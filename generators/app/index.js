function generator() {
  'use strict';

  var yeoman = require('yeoman-generator');
  var chalk = require('chalk');
  var yosay = require('yosay');
  var path = require('path');

  module.exports = yeoman.extend({
    prompting: function() {
      this.log(yosay('Welcome to the amazing ' + chalk.red('generator-ship-components-boilerplate') + ' generator!'));

      // Asking users for inputs
      var prompts =[{
        type: 'input',
        name: 'projectName',
        message: 'Pleace input your project name(ship-components-):',
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
        this.log('Your generator must be inside a folder named ' + this.props.projectName + '\n' +
    'I\'ll automatically create this folder.');
        this.mkdir(this.props.projectName);
        this.destinationRoot(this.destinationPath(this.props.projectName));
      }
    },
    writing: function() {
    //copy all files
      this.directory(this.sourceRoot() + '/resource/', this.destinationRoot());

      // package
      var pkg = this.fs.readJSON(this.templatePath('package.json'), {});
      pkg.name = this.props.projectName;
      pkg.description = this.props.projectDesc;
      pkg.author = this.props.author;

      //package.json
      this.fs.writeJSON(this.destinationPath('package.json'), pkg);

      //copy templates
      this.copy('babelrc_tmpl', '.babelrc');
      this.copy('coveralls_tmpl', '.coveralls.yml');
      this.copy('eslintrc_tmpl', '.eslintrc');
      this.copy('gitignore_tmpl', '.gitignore');
      this.copy('gruntfile_tmpl', 'Gruntfile.js');
      this.copy('npmignore_tmpl', '.npmignore');
      this.copy('travis_tmpl', '.travis.yml');
    },
    install: function() {
      process.exit();
    }
  });
}

generator();
