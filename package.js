Package.describe({
  name: 'liberation:collection-pluck',
  summary: 'Adds a method "pluck" to Collections',
  version: '1.1.0',
  git: 'https://github.com/dolgarev/meteor-collection-pluck.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['mongo', 'random']);
  api.addFiles('pluck.js', ['client', 'server']);
});
