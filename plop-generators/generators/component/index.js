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
        type: 'addMany',
        destination: '{{workspace}}/src/components/{{name}}',
        base: 'templates/component',
        templateFiles: 'templates/component/**/*.hbs'
      },
      {
        type: 'modify',
        path: '{{workspace}}/src/components/index.ts',
        pattern: /(\/\/ -- PREPEND EXPORTS HERE --)/gi,
        template: "export * from './{{name}}';\n$1",
      },
    ];
  },
};
