module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
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
        path: '{{workspace}}/src/components/{{name}}/index.ts',
        templateFile: './generators/component/index.hbs',
      },
      {
        type: 'add',
        path: '{{workspace}}/src/components/{{name}}/{{name}}.tsx',
        templateFile: './generators/component/component.hbs',
      },
    ];
  },
};
