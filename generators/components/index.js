var generators = require('yeoman-generator')
var _ = require('lodash')
var shellby = require('shellby')

var CEXGenerator = generators.Base.extend({
    'initializing': function() {
        console.log('initializing - cex')
    },
    'prompting': function() {
        return this.prompt([
            {
                type: 'input',
                name: 'component',
                message: 'Your component name',
                default: 'demo',
                validate: function(input) {
                    return input != ''
                }
            }, {
                type: 'input',
                name: 'author',
                message: 'What\'s your name',
                store: true
            }
        ]).then(function(answers) {
            this.answers = answers
        }.bind(this))
    },
    'configuring': function() {
        console.log(this.answers)
        console.log('configuring - cex')
    },
    'default': function() {
        console.log('default - cex')
    },
    'writing': {
        modules() {
            var author = this.answers.author
            var self = this
            var component = {
                ab: _.toLower(this.answers.component),
                Ab_camel: _.upperFirst(_.camelCase(this.answers.component)),
                ab_camel: _.camelCase(this.answers.component),
                author: author
            }
            self.fs.copyTpl(self.templatePath('src/demo/demo.jsx'), self.destinationPath('src/components/' + component.ab+'/'+ component.ab + '.jsx'), component)
            self.fs.copyTpl(self.templatePath('src/demo/demo.less'), self.destinationPath('src/components/' + component.ab + '/' + component.ab + '.less'), component)
            self.fs.copyTpl(self.templatePath('src/vdemo.jsx'), self.destinationPath('example/modules/cex/views/' + 'v'+component.ab + '.jsx'), component)
        }
    },
    'conflicts': function() {
        console.log('conflicts - cex')
    },
    'install': function() {
        // install dependencies
        console.log('install - cex')
    },
    'end': function() {
        console.log('end - cex')
    }
})

module.exports = CEXGenerator
