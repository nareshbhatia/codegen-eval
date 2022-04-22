# Nx Workspace Generators

This document describes the steps to create this repo and the code generators.

## Create the Nx monorepo

```sh
npx create-nx-workspace@latest --preset=core
```

`--preset=core` ensures that no Nx plugins are installed and the npm Workspaces
feature is leveraged.

## Create a library where we will generate React components

```sh
nx g npm-package ui-lib
```

## Create a workspace generator to create components

```sh
nx g @nrwl/workspace:workspace-generator component
```

This creates the `tools/generators/component` folder.

Add files to this folder to fully implement the generator.

## Running the generator

Create a `Button` component in `ui-lib`

```sh
nx workspace-generator component --project=ui-lib Button
```
