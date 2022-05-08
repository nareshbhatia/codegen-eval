const inquirer = require('inquirer');
const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

async function contact(argv) {
  const questions = [
    {
      // autofill for select is broken - see https://github.com/enquirer/enquirer/issues/386
      type: 'list',
      name: 'name',
      choices: [
        { name: 'Mat', value: 'Mat' },
        { name: 'Jon', value: 'Jon' },
      ],
    },
    { type: 'input', name: 'username', message: 'What is your username?' },
    { type: 'input', name: 'email', message: 'What is your email?' },
    { type: 'input', name: 'phone', message: 'What is your phone number?' },
  ];

  const answers = await inquirer.prompt(questions, argv);

  console.log(answers);
}

async function component(argv) {
  const questions = [
    { type: 'input', name: 'name', message: 'What is the component name?' },
    { type: 'input', name: 'workspace', message: 'What is the workspace?' },
  ];

  const answers = await inquirer.prompt(questions, argv);

  console.log(answers);
}

async function main() {
  const argv = yargs(hideBin(process.argv)).argv;
  console.log(argv);

  switch (argv._[0]) {
    case 'contact':
      contact(argv);
      break;
    case 'component':
      component(argv);
      break;
  }
}

main().catch((err) => {
  console.log(err);
});
