'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('App File / Folder Structure', function() {
  it('the app folder should have all the required files', () => {
    // app folder, the test will fails if these files are not present
    assert.file([
      './generators/app/index.js',
      './generators/app/templates/babelrc_tmpl',
      './generators/app/templates/coveralls_tmpl',
      './generators/app/templates/eslintrc_tmpl',
      './generators/app/templates/gitignore_tmpl',
      './generators/app/templates/gruntfile_tmpl',
      './generators/app/templates/npmignore_tmpl',
      './generators/app/templates/travis_tmpl',
      './generators/app/templates/package.json',
      './generators/app/templates/resource/examples/index.html',
      './generators/app/templates/resource/examples/index.jsx',
      './generators/app/templates/resource/src/__tests__/index.test.js',
      './generators/app/templates/resource/src/index.css',
      './generators/app/templates/resource/src/index.js'
    ]);
  });

  it('the component folder should have all the required files', () => {
    // component folder, the test will fails if these files are not present
    assert.file([
      './generators/component/index.js',
      './generators/component/template/component_tmpl'
    ]);
  });
});

describe('Runing the app generator', () => {
  it('should return no error if everything passes', () => {
    helpers.run(path.join(__dirname, '../generators/app/index.js'))
      .withPrompts({
        projectName: 'bar',
        projectDesc: 'sample',
        author: 'Sam Assadi'
      })
      .then(function(dir) {
        // assert something about the stuff in `dir`
        console.log(dir);
        assert.noFile([
          dir + '/.eslintrc'
        ]);
      });
  });
});
