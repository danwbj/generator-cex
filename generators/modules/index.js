var generators = require('yeoman-generator');

var CEXGenerator = generators.Base.extend({
    'initializing': function() {
        console.log('initializing - tools');
    }
});

module.exports = CEXGenerator;
