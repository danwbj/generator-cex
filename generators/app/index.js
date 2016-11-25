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
                name: 'name',
                message: 'Your project name',
                default: this.appname // Default to current folder name
            }, {
                type: 'input',
                name: 'author',
                message: 'What\'s your name',
                store: true
            }, {
                type: 'input',
                name: 'module',
                message: 'Your default module name',
                default: 'demo',
                validate: function(input) {
                    return input != ''
                }
            }, {
                type: 'list',
                name: 'pkm',
                choices: [
                    'npm', 'yarn'
                ],
                message: 'Your package manager'
            },
            // {
            //     type: 'confirm',
            //     name: 'cool',
            //     message: 'Would you like to enable the Cool feature?'
            // }
        ]).then(function(answers) {
            this.answers = answers
        }.bind(this))
    },
    'configuring': function() {
        // console.log(this.answers)
        console.log('configuring - cex')
    },
    'default': function() {
        console.log('default - cex')
    },
    'writing': {
        root() {
            this.fs.copyTpl(this.templatePath('_package.json'), this.destinationPath('package.json'), this.answers)
            this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('README.md'), this.answers)
            this.fs.copyTpl(this.templatePath('_.babelrc'), this.destinationPath('.babelrc'), this.answers);
            this.fs.copyTpl(this.templatePath('_.eslintrc.json'), this.destinationPath('.eslintrc.json'), this.answers);
            this.fs.copyTpl(this.templatePath('_.gitignore'), this.destinationPath('.gitignore'), this.answers);
        },
        tools() {
            this.directory('tools', 'tools');
        },
        src() {
            this.copy('src/favicon.ico', 'src/favicon.ico')
            this.directory('src/img', 'src/img')
            this.directory('src/libs', 'src/libs')
            this.directory('src/style', 'src/style')
        },
        modules() {
            var u_module = _.toUpper(this.answers.module);
            var module = {
                u_name: u_module,
                l_name: this.answers.module,
                author: this.answers.author
            }
            // common
            this.directory('src/modules/common', 'src/modules/common')
            // module
            this.fs.copyTpl(this.templatePath('src/modules/module/actions/homeActions.js'), this.destinationPath('src/modules/' + module.l_name + '/actions/homeActions.js'), module)
            this.directory('src/modules/module/adapter', 'src/modules/' + module.l_name + '/adapter')
            this.fs.copyTpl(this.templatePath('src/modules/module/constants/actionTypes.js'), this.destinationPath('src/modules/' + module.l_name + '/constants/actionTypes.js'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/containers/homeContainer.js'), this.destinationPath('src/modules/' + module.l_name + '/containers/homeContainer.js'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/reducers/index.js'), this.destinationPath('src/modules/' + module.l_name + '/reducers/index.js'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/reducers/module.js'), this.destinationPath('src/modules/' + module.l_name + '/reducers/' + module.l_name + '.js'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/routes/spa.jsx'), this.destinationPath('src/modules/' + module.l_name + '/routes/spa.jsx'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/store/index.js'), this.destinationPath('src/modules/' + module.l_name + '/store/index.js'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/views/home.jsx'), this.destinationPath('src/modules/' + module.l_name + '/views/home.jsx'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/main-home.jsx'), this.destinationPath('src/modules/' + module.l_name + '/main-home.jsx'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/main-home.json'), this.destinationPath('src/modules/' + module.l_name + '/main-home.json'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/main.jsx'), this.destinationPath('src/modules/' + module.l_name + '/main.jsx'), module)
            this.fs.copyTpl(this.templatePath('src/modules/module/main.json'), this.destinationPath('src/modules/' + module.l_name + '/main.json'), module)
        }
    },
    'conflicts': function() {
        console.log('conflicts - cex')
    },
    'install': function() {
        // install dependencies
        // console.log('install - cex')
        // var done = this.async();
        // var _sa = [
        //     'git init', 'git submodule add https://github.com/nasawz/cex.git src/components/cex', this.answers.pkm + ' install'
        // ]
        //
        // shellby.series(_sa, function(err) {
        //     done()
        // });
    },
    'end': function() {
        // console.log('end - cex')
        // shellby.exec('npm start', function(err) {
        //     console.log('app run');
        // });
    }
})

module.exports = CEXGenerator
