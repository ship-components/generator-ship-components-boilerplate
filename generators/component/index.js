'use strict';
var Generator = require('yeoman-generator');

var ComponentGenerator = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  initializing() {
    this.log('Component Name -->' + this.name + '.');
  }

  writing() {
    this.template('component_tmpl', 'src/components/'+ this.name + '.jsx');
  }
};

module.exports = ComponentGenerator;
