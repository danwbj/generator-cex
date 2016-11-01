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
                name: 'module',
                message: 'Your module name',
                default: 'demo',
                validate: function(input) {
                    return input != ''
                }
            }, {
                type: 'input',
                name: 'page',
                message: 'Your page name',
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
            var module = {
                u_name: _.toUpper(this.answers.module),
                l_name: _.toLower(this.answers.module),
                author: author
            }
            var page = {
                Ab: _.upperFirst(this.answers.page),
                ab: _.toLower(this.answers.page),
                u_name: _.toUpper(this.answers.module),
                l_name: _.toLower(this.answers.module),
                author: author
            }
            self.fs.copyTpl(self.templatePath('src/modules/module/containers/homeContainer.js'), self.destinationPath('src/modules/' + module.l_name + '/containers/' + page.ab + 'Container.js'), page)
            self.fs.copyTpl(self.templatePath('src/modules/module/views/home.jsx'), self.destinationPath('src/modules/' + module.l_name + '/views/' + page.ab + '.jsx'), page)
            self.fs.copyTpl(self.templatePath('src/modules/module/main-home.jsx'), self.destinationPath('src/modules/' + module.l_name + '/main-' + page.ab + '.jsx'), page)
            self.fs.copyTpl(self.templatePath('src/modules/module/main-home.json'), self.destinationPath('src/modules/' + module.l_name + '/main-' + page.ab + '.json'), page)
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
