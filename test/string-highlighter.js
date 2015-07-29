Tinytest.add("_replaceWithHighlightTag", function (test) {
  var html = "Sample keywords and HTML Contents with <a href>search</a> keyword.";
  var keyword = "keyword";
  var expectedResult = "Sample keywords and HTML Contents with &lt;a href&gt;search&lt;/a&gt; keyword.";

  var retResult = StringHighlighter._replaceWithHighlightTag(html, keyword);
  // assertions
  test.equal(retResult, expectedResult);
});

Tinytest.add("_removeHighlightTags", function (test) {
  var htmlWithHighlightTag = "Sample <highlight>keyword</highlight>s and HTML Contents with search <highlight>keyword</highlight>.";
  var expectedResult = "Sample keywords and HTML Contents with search keyword.";

  var retResult = StringHighlighter._removeHighlightTags(htmlWithHighlightTag);
  // assertions
  test.equal(retResult, expectedResult);
});