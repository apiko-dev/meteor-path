/*
* Official docs:
* https://nodejs.org/docs/latest/api/path.html
*/

Package.describe({
  name: 'jss:path',
  version: '0.0.3',
  summary: 'Wrapper for Node "path" package.',
  git: 'https://github.com/JSSolutions/meteor-path'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('path.js', 'server');
  api.export('path', 'server');
});

Npm.depends({
  'util-is': '0.1.0',
  path: '0.12.7'
});

Package.onTest(function(api) {
  api.use(['tinytest', 'jss:path'], 'server');
  api.addFiles('tests.js', 'server');
});
