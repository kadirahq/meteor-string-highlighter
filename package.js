Package.describe({
  "summary": "String Highlighter for Meteor Apps",
  "version": "0.0.1",
  "git": "https://github.com/kadirahq/meteor-string-highlighter",
  "name": "kadira:string-highlighter"
});

Npm.depends({
  "html-entities": "1.1.3"
});

Package.on_use(function(api) {
  if(api.versionsFrom){
    api.versionsFrom('METEOR@0.9.0');
  }
  api.use(["jquery"]);
  api.use(["kadira:regex-query-filter@0.0.3"]);
  api.use("cosmos:browserify@0.3.0");
  api.export("StringHighlighter", "client");
  api.add_files("client.browserify.js", "client");
  api.add_files("lib/string-highlighter.js", "client");
  api.add_files("lib/string-highlighter.css", "client");
});


Package.onTest(function(api) {
  api.use([
    "jquery",  
    "tinytest",
    "kadira:regex-query-filter"
  ]);
  api.use("kadira:string-highlighter");
  api.addFiles("lib/string-highlighter.js", "client");
  api.addFiles("test/string-highlighter.js", "client");
});