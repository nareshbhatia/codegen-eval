module.exports = {
  description: 'Page Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Page name, e.g. HomePage',
    },
    {
      type: 'folder',
      name: 'workspace',
      message: 'Which workspace should this go to?',
      basePath: '.', // Relative to CwD
    },
  ],
  actions: ({ name, folder }) => {
    return [
      {
        type: 'add',
        path: '{{workspace}}/src/pages/{{name}}/index.ts',
        templateFile: './generators/page/index.hbs',
      },
      {
        type: 'add',
        path: '{{workspace}}/src/pages/{{name}}/{{name}}.tsx',
        templateFile: './generators/page/page.hbs',
      },
    ];
  },
};
