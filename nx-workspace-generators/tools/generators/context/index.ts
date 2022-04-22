import {
  Tree,
  formatFiles,
  installPackagesTask,
  readProjectConfiguration,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';

export default async function (tree: Tree, schema: any) {
  console.log('schema:', schema);
  // command: nx workspace-generator context --project=ui-lib ViewState
  // schema: { project: 'ui-lib', name: 'ViewState' }
  // projectRoot: packages/ui-lib
  const projectRoot = readProjectConfiguration(tree, schema.project).root;

  const substitutions = {
    ...schema,
    // remove __tmpl__ from file endings
    tmpl: '',
  };

  generateFiles(
      tree, // the virtual file system
      joinPathFragments(__dirname, './templates'), // path to templates
      projectRoot, // destination path of the files
      substitutions // substitutions in templates
  );
  await formatFiles(tree);
  return () => {
    installPackagesTask(tree);
  };
}
