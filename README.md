# meteor-string-highlighter

String Highlighter for Meteor Apps

## Install

`meteor install kadira:kadira:string-highlighter`

## Usage

### Inject `<highlight>` tags directly into DOM at the client-side

```javascript
var elements = ["#elm1_Id", ".elm2_Class"];
var keywords = ["keyword1", "keyword2"];
StringHighlighter._wrapInTag(element, keywords);
```

### Replace with `<higlight>` tag before the html loads into document

```javascript
var html = StringHighlighter._replaceWithHighlightTag(html, keyword);
```

In case, you wants to remove the `<highlight>`` tag;

```javascript
var html = StringHighlighter._removeHighlightTags(html);
```