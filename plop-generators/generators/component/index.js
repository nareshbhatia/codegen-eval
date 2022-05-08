const treeWalk = require('klaw-sync');
const path = require('path');

module.exports = {
  description: 'Component Generator',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'Component name',
    },
    // {
    //   type: 'fuzzypath',
    //   name: 'workspace',
    //   itemType: 'directory',
    //   message: 'Which workspace should this go to?',
    //   excludePath: (nodePath) => {
    //     // If a parent directory is excluded then children will not be
    //     // traversed. Hence, '.' must be included.
    //     const includePath =
    //       nodePath.startsWith('.') ||
    //       nodePath.startsWith('apps') ||
    //       nodePath.startsWith('packages');
    //     return !includePath;
    //   },
    //   depthLimit: 1,
    // },
    {
      type: 'list',
      name: 'workspace',
      message: 'Which workspace should this go to?',
      choices: () => {
        const dirSpecs = resolvePaths(process.cwd(), ['apps/*', 'packages/*']);
        return dirSpecs.map((dirSpec) => ({
          name: dirSpec.name,
          value: dirSpec.path,
        }));
      },
    },
  ],
  actions: ({ name, workspace }) => {
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

function resolvePaths(rootDir, relativePaths) {
  const specs = [];

  relativePaths.forEach((relativePath) => {
    const isGlob = relativePath.endsWith('*');
    if (isGlob) {
      // strip the * at the end
      const relativeParentDir = relativePath.slice(0, -1);
      const parentDir = path.join(rootDir, relativeParentDir);
      const childDirs = treeWalk(parentDir, { nofile: true, depthLimit: 0 });
      childDirs.forEach((childDir) => {
        specs.push({
          name: path.relative(rootDir, childDir.path),
          path: childDir.path,
        });
      });
    } else {
      specs.push({
        name: relativePath,
        path: path.join(rootDir, relativePath),
      });
    }
  });

  return specs;
}
