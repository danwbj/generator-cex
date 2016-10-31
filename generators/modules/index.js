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
                name: 'modules',
                message: 'Your module names',
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

            var modules = _.split(_.trim(this.answers.modules), ' ')
            var author = this.answers.author
            var self = this
            _.map(modules, function(m) {
                var module = {
                    u_name: _.toUpper(m),
                    l_name: _.toLower(m),
                    author: author
                }
                self.fs.copyTpl(self.templatePath('src/modules/module/constants/actionTypes.js'), self.destinationPath('src/modules/' + module.l_name + '/constants/actionTypes.js'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/containers/homeContainer.js'), self.destinationPath('src/modules/' + module.l_name + '/containers/homeContainer.js'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/reducers/index.js'), self.destinationPath('src/modules/' + module.l_name + '/reducers/index.js'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/reducers/module.js'), self.destinationPath('src/modules/' + module.l_name + '/reducers/' + module.l_name + '.js'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/routes/spa.jsx'), self.destinationPath('src/modules/' + module.l_name + '/routes/spa.jsx'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/store/index.js'), self.destinationPath('src/modules/' + module.l_name + '/store/index.js'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/views/home.jsx'), self.destinationPath('src/modules/' + module.l_name + '/views/home.jsx'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/main-home.jsx'), self.destinationPath('src/modules/' + module.l_name + '/main-home.jsx'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/main-home.json'), self.destinationPath('src/modules/' + module.l_name + '/main-home.json'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/main.jsx'), self.destinationPath('src/modules/' + module.l_name + '/main.jsx'), module)
                self.fs.copyTpl(self.templatePath('src/modules/module/main.json'), self.destinationPath('src/modules/' + module.l_name + '/main.json'), module)
            })
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
