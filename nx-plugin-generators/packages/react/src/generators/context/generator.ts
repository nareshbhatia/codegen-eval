import {
  Tree,
  formatFiles,
  readProjectConfiguration,
  generateFiles,
  joinPathFragments,
} from '@nrwl/devkit';
import { ContextGeneratorSchema } from './schema';

export default async function (tree: Tree, schema: ContextGeneratorSchema) {
  console.log('schema:', schema);
  // command: nx workspace-generator react --project=mylib Sidebar
  // schema: { project: 'ui-lib', name: 'Sidebar' }
  // projectRoot: packages/ui-lib
  const projectRoot = readProjectConfiguration(tree, schema.project).root;

  const substitutions = {
    ...schema,
    // remove __tmpl__ from file endings
    tmpl: '',
  };

  generateFiles(
    tree, // the virtual file system
    joinPathFragments(__dirname, './files'), // path to files
    projectRoot, // destination path of the files
    substitutions // substitutions in files
  );
  await formatFiles(tree);
}
