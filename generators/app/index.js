function generator() {
  'use strict';

  const yeoman = require('yeoman-generator');
  const chalk = require('chalk');
  const yosay = require('yosay');
  const path = require('path');
  const mkdirp = require('mkdirp');
  const fs = require('fs-extra');

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

      //copy all files
      let source = this.sourceRoot() + '/resource';
      let destination = this.destinationRoot();

      fs.copy(source, destination)
        .then(() => console.log('success!'))
        .catch(err => console.error(err));
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

      //copy templates
      this.fs.copy(this.sourceRoot() + '/' + 'babelrc_tmpl', '.babelrc');
      this.fs.copy(this.sourceRoot() + '/' + 'coveralls_tmpl', '.coveralls.yml');
      this.fs.copy(this.sourceRoot() + '/' + 'eslintrc_tmpl', '.eslintrc');
      this.fs.copy(this.sourceRoot() + '/' + 'gitignore_tmpl', '.gitignore');
      this.fs.copy(this.sourceRoot() + '/' + 'gruntfile_tmpl', 'Gruntfile.js');
      this.fs.copy(this.sourceRoot() + '/' + 'npmignore_tmpl', '.npmignore');
      this.fs.copy(this.sourceRoot() + '/' + 'travis_tmpl', '.travis.yml');
    },
    install: function() {
      process.exit();
    }
  });
}

generator();
