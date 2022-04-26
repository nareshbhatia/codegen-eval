module.exports = function (plop) {
  plop.inquirer.registerPrompt('folder', require('inquirer-directory'));

  plop.setGenerator('component', require('./generators/component'));
  plop.setGenerator('page', require('./generators/page'));
}
