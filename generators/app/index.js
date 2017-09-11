function generator() {
  'use strict';

  const yeoman = require('yeoman-generator');
  const chalk = require('chalk');
  const yosay = require('yosay');
  const path = require('path');
  const mkdirp = require('mkdirp');
  const ncp = require('ncp').ncp;
  var fs = require('fs.extra');

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

      // const readmeTpl = _.template(this.fs.read(this.templatePath('README.md')));

      // this.composeWith(this.sourceRoot(), {
      //   boilerplate: false,
      //   name: this.props.name,
      //   projectRoot: 'generators',
      //   skipInstall: this.options.skipInstall,
      //   readme: readmeTpl({
      //     generatorName: this.props.name
      //   })
      // });

      // this.composeWith(require.resolve('../subgenerator'), {
      //   arguments: ['app']
      // });
    },
    writing: function() {
      //copy all files
      let source = this.sourceRoot() + '/resource';
      let destination = this.destinationRoot();

      // ncp(source, destination, (err) => {
      //   if (err) {
      //     return console.error(err);
      //   }

      //   console.log('Copied all resources to %s folder', this.props.projectName);
      // });
      fs.copyRecursive(source, destination, function(err) {
        if (err) {
          throw err;
        }

        console.log("Copied './foo' to './bar'");
      });

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
