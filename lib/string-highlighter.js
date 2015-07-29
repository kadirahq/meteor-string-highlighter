StringHighlighter = {};
var highlightTag = "highlight"; //as; <highlight>$$</highlight>

StringHighlighter._wrapInTag = function(elements, keywords) {
  var query = [];
  
  _.each(keywords, function(keyword) {
    var hasQuoted = QueryFilter._isExactPhrase(keyword);
    if(hasQuoted) {
      keyword = keyword.replace(/\"/g,""); // rid the quotatons
      query.push(keyword);
    } else {
      words = keyword.split(" ");
      if(words.length > 0) {
        _.each(words, function(word) {
          query.push(word);
        });
      } else {
        query.push(keyword);
      }
    }
  });

  Meteor.defer(function() {
    _.each(elements, function(element) {
      $(element).wrapInTag({
        tag: "highlight",
        query: query
      });
    });
  });
}

StringHighlighter._replaceWithHighlightTag = function(html, keyword) {
  // clean the keyword by removing ""
  var hasQuoted = QueryFilter._isExactPhrase(keyword);
  if(hasQuoted) {
    keyword = keyword.replace(/\"/g,""); // rid the quotatons
  }

  // encode html tags with html-entities NPM module
  entities = new htmlEntities();
  var string = entities.encode(html);

  var patt = new RegExp("("+keyword+")", "ig");
  return string.replace(patt, "<" + highlightTag + ">$1</" + highlightTag + ">");
};

StringHighlighter._removeHighlightTags = function(string) {
  var find1 = "<" + highlightTag + ">";
  var find2 = "</" + highlightTag + ">";

  var string = string.replace(new RegExp(escapeRegExp(find1), "g"), "");
  return string.replace(new RegExp(escapeRegExp(find2), "g"), "");
};

$.fn.wrapInTag = function(opts) {
  var tag = opts.tag || "strong",
      query = opts.query || [],
      regex = RegExp(query.join("|"), "gi"),
      replacement = "<"+ tag +">$&</"+ tag +">";

  return this.html(function() {
    return $(this).text().replace(regex, replacement);
  });
};

function escapeRegExp(string) {
  return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
