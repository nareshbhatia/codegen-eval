module.exports = function (plop) {
  plop.inquirer.registerPrompt('folder', require('inquirer-directory'));
  plop.inquirer.registerPrompt('fuzzypath', require('inquirer-fuzzy-path'))

  plop.setGenerator('component', require('./generators/component'));
  plop.setGenerator('page', require('./generators/page'));
}
