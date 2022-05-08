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

Documentation is not comprehensive. Examples are buried inside
packages/plop/tests and not very easy to understand.

## TypeScript

Had a hard time setting up for TypeScript. Tried the following routes
unsuccessfully. Resorted to JavaScript using CommonJS modules.

1. https://plopjs.com/documentation/#typescript-declarations
2. https://github.com/plopjs/plop/issues/192
3. https://github.com/plopjs/plop/issues/297

## Location of plopfile.js

Keeping plopfile in root also has the advantage that it can be accessed using a
global plop command, so basically you can just type `plop`. If buried inside
generators, then you have to say `plop --plopfile generators/plopfile.js` which
is very inconvenient.

## Workspace Awareness

Plop does not understand workspaces inside a monorepo. I was able to write my
own function to use with a list.

## Was able to append exports in index.js after some trial & error

Requires a comment line in the file as a marker.
