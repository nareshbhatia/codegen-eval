module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
    },
    {
      type: 'fuzzypath',
      name: 'workspace',
      itemType: 'directory',
      message: 'Which workspace should this go to?',
      excludePath: (nodePath) => {
        // If a parent directory is excluded then children will not be
        // traversed. Hence, '.' must be included.
        const includePath =
          nodePath.startsWith('.') ||
          nodePath.startsWith('apps') ||
          nodePath.startsWith('packages');
        return !includePath;
      },
      depthLimit: 1,
    },
  ],
  actions: ({ name, folder }) => {
    return [
      {
        type: 'addMany',
        destination: '{{workspace}}/src/components/{{name}}',
        base: 'templates/component',
        templateFiles: 'templates/component/**/*.hbs',
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
