'use strict';
var yeoman = require('yeoman-generator');

var ComponentGenerator = yeoman.generators.NamedBase.extend({
  initializing: function() {
    this.log('Component Name -->' + this.name + '.');
  },

  writing: function() {
    this.template('component_tmpl', 'src/components/'+ this.name + '.jsx');
  }
});

module.exports = ComponentGenerator;
