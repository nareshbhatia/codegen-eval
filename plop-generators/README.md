# Plop Generators

## Setting up plop

```bash
# Install plop globally for easy access
$ npm install -g plop

# Run component generator
$ plop
? [PLOP] Please choose a generator. component - Component Generator
? Component name Button
? Which workspace should this go to? packages/ui-lib
++ /packages/ui-lib/src/components/Button/index.ts
++ /packages/ui-lib/src/components/Button/Button.tsx


# Run page generator
$ plop
? [PLOP] Please choose a generator. component - Page Generator
? Page name, e.g. HomePage HomePage
? Which workspace should this go to? apps/movie-magic
++ /apps/movie-magic/src/pages/HomePage/index.ts
++ /apps/movie-magic/src/pages/HomePage/HomePage.tsx
```

## Documentation

As seen from the comments below, documentation is not very clear.

## TypeScript

Had a hard time setting up for TypeScript. Tried the following routes
unsuccessfully. Resorted to JavaScript using CommonJS modules.

1. https://plopjs.com/documentation/#typescript-declarations
2. https://github.com/plopjs/plop/issues/192
3. https://github.com/plopjs/plop/issues/297

## Location of plopfile.js

Everything is relative to the location of plopfile.js which results in some
issues:

1. If plopfile is kept at the root of the repo, then paths to reach the
   generators become long, e.g. `./generators/component`. This is not ideal
   because now the generator location has to be hard coded.
2. If plopfile is kept in the generators folder, then generating code in root
   repo requires specifying relative paths like
   `../packages/ui-lib/src/components`. Not very ideal.

I am going with option 1. Keeping plopfile in root also has the advantage that
it can be accessed using a global plop command, so basically you can just type
`plop`. If buried inside generators, then you have to say
`plop --plopfile generators/plopfile.js` which is very inconvenient.

## Workspace Awareness

Plop does not understand workspaces inside a monorepo. I force user to select a
workspace using inquirer-directory. This is a bit flaky because user could
accidentally select other directories.

## Could not make addMany work

It adds one extra level of nesting.

Example:

```
{
  type: 'addMany',
  destination: '{{workspace}}/src/components/{{name}}',
  templateFiles: './generators/component/*.hbs',
  abortOnFail: true,
}

Expected: ui-lib/src/components/Hello/Hello.tsx
Actual:   ui-lib/src/components/Hello/component/Hello.tsx
```

There are no good examples for `addMany`.

## Could not make append work

Don't know how to specify the template for barreling file `index.tsx`. Their
example puts it under `plop-files` - can't tell it this is a magic directory
name.

Example:

```
{
  type: 'append',
  path: '{{workspace}}/src/components/index.tsx',
  pattern: /-- APPEND ITEMS HERE --/gi,
  template: "export * from './{{name}}';",
  unique: true,
}
```
