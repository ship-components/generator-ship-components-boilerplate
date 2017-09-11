function generator() {
  'use strict';

  const yeoman = require('yeoman-generator');
  const chalk = require('chalk');
  const yosay = require('yosay');
  const path = require('path');
  const mkdirp = require('mkdirp');

  module.exports = yeoman.extend({
    prompting: function() {
      this.log(yosay('Welcome to the amazing ' + chalk.red('generator-ship-components-boilerplate') + ' generator!'));

      // Asking users for inputs
      var prompts =[{
        type: 'input',
        name: 'projectName',
        message: 'Please enter your project name(ship-components-):',
        default: 'ship-components-'
      },
      {
        type: 'input',
        name: 'projectDesc',
        message: 'Please input project description:'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Pleace input author name:',
        default: 'Sepand Assadi <sepand.assadi@sony.com>'
      }];
      return this.prompt(prompts).then(function(props) {
        this.props = props;
      }.bind(this));
    },
    defaults: function() {
      if(path.basename(this.destinationPath()) !== this.props.projectName) {
        this.log('Your generator must be inside a folder named ' + this.props.projectName + '\n' + 'I\'ll automatically create this folder.');
        mkdirp(this.props.projectName);
        this.destinationRoot(this.destinationPath(this.props.projectName));
      }
    },
    writing: function() {
      // package
      var pkg = this.fs.readJSON(this.templatePath('package.json'), {});
      pkg.name = this.props.projectName;
      pkg.description = this.props.projectDesc;
      pkg.author = this.props.author;

      pkg.repository.url = 'git+https://github.com/ship-components/' + this.props.projectName + '.git';
      pkg.bugs.url = 'https://github.com/ship-components/' + this.props.projectName + '/issues';
      pkg.homepage = 'git+https://github.com/ship-components/' + this.props.projectName + '#readme';

      //package.json
      this.fs.writeJSON(this.destinationPath('package.json'), pkg);

      // create all required folders
      mkdirp(this.destinationRoot() + '/' + 'dist');
      mkdirp(this.destinationRoot() + '/' + 'examples');
      mkdirp(this.destinationRoot() + '/' + 'src');
      mkdirp(this.destinationRoot() + '/' + 'tasks');

      // create src sub folders
      mkdirp(this.destinationRoot() + '/' + 'src/__tests__');
      mkdirp(this.destinationRoot() + '/' + 'src/__tests__/__snapshots__');

      // create tasks folders
      mkdirp(this.destinationRoot() + '/' + 'tasks');
      mkdirp(this.destinationRoot() + '/' + 'tasks/config');
      mkdirp(this.destinationRoot() + '/' + 'tasks/register');

      //copy all files
      let source = this.sourceRoot() + '/resource';
      let destination = this.destinationRoot();

      //copy app templates
      this.fs.copy(this.sourceRoot() + '/' + 'babelrc_tmpl', '.babelrc');
      this.fs.copy(this.sourceRoot() + '/' + 'coveralls_tmpl', '.coveralls.yml');
      this.fs.copy(this.sourceRoot() + '/' + 'eslintrc_tmpl', '.eslintrc');
      this.fs.copy(this.sourceRoot() + '/' + 'gitignore_tmpl', '.gitignore');
      this.fs.copy(this.sourceRoot() + '/' + 'gruntfile_tmpl', 'Gruntfile.js');
      this.fs.copy(this.sourceRoot() + '/' + 'npmignore_tmpl', '.npmignore');
      this.fs.copy(this.sourceRoot() + '/' + 'travis_tmpl', '.travis.yml');

      // copy examples folder
      this.fs.copy(source + '/examples/index.html', destination + '/examples/index.html');
      this.fs.copy(source + '/examples/index.jsx', destination + '/examples/index.jsx');

      // copy src folder
      this.fs.copy(source + '/src/index.css', destination + '/src/index.css');
      this.fs.copy(source + '/src/index.js', destination + '/src/index.js');
      this.fs.copy(source + '/src/__tests__/index.test.js', destination + '/src/__tests__/index.test.js');
      this.fs.copy(source + '/src/__tests__/__snapshots__/index.test.js.snap', destination + '/src/__tests__/__snapshots__/index.test.js.snap');

      // Copy tasks folder
      // Config folder
      this.fs.copy(source + '/tasks/config/clean.js', destination + '/tasks/config/clean.js');
      this.fs.copy(source + '/tasks/config/coveralls.js', destination + '/tasks/config/coveralls.js');
      this.fs.copy(source + '/tasks/config/eslint.js', destination + '/tasks/config/eslint.js');
      this.fs.copy(source + '/tasks/config/webpack.config.js', destination + '/tasks/config/webpack.config.js');
      this.fs.copy(source + '/tasks/config/webpack.js', destination + '/tasks/config/webpack.js');
      // register folder
      this.fs.copy(source + '/tasks/register/build.js', destination + '/tasks/register/build.js');
      this.fs.copy(source + '/tasks/register/coveralls.js', destination + '/tasks/register/coveralls.js');
      this.fs.copy(source + '/tasks/register/default.js', destination + '/tasks/register/default.js');
      this.fs.copy(source + '/tasks/register/lint.js', destination + '/tasks/register/lint.js');
      this.fs.copy(source + '/tasks/register/server.js', destination + '/tasks/register/server.js');
    },
    install: function() {
      process.exit();
    }
  });
}

generator();
