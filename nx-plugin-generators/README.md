# Nx Plugin Generators

This document describes the steps to create this repo and the code generators.

## Create the Nx monorepo

    npx create-nx-workspace@latest --preset=core

`--preset=core` ensures that no Nx plugins are installed and the npm Workspaces
feature is leveraged.

## Install @nrwl/nx-plugin & @nrwl/devkit

    npm install --save-dev @nrwl/nx-plugin @nrwl/devkit

## Generate "react" plugin

    nx g @nrwl/nx-plugin:plugin react

Creates /packages/react/src/generators/react. This generator creates react
packages.

## Build "react" plugin

    nx build react

Creates /dist/packages/react

## Create a library where we will generate React components

    nx g ./dist/packages/react:react ui-lib

Creates /packages/ui-lib

## Create a component generator in the "react" plugin

    nx g @nrwl/nx-plugin:generator component --project=react

Creates /packages/react/src/generators/component. Adjust the `files` folder to
create the files you want.

## Rebuild "react" plugin

    nx build react

## Create a component called Button in ui-lib

    nx g ./dist/packages/react:component Button --project=ui-lib

Creates /packages/ui-lib/components/Button

## Publishing and testing the plugin

```sh
# Publish "react" plugin from /dist/packages/react
# Use one of the following commands:
npm link     # local
npm publish  # to npm

# Create a target nx repo for testing the plugin, e.g.
npx create-nx-workspace@latest --preset=core

# Install "react" plugin in this repo
cd nx-test-repo
npm install --save-dev @nx-plugin-generators/react

# Run "react" plugin to generate a component
# Creates /packages/ui-lib/components/Button
nx g @nx-plugin-generators/react:component Button --project=ui-lib
```

## Prompting the user for properties

Use `x-prompt` in schema.json:

```json
{
  "$schema": "http://json-schema.org/schema",
  "cli": "nx",
  "$id": "Component",
  "title": "",
  "type": "object",
  "properties": {
    "project": {
      "type": "string",
      "description": "Project name",
      "$default": {
        "$source": "projectName"
      },
      "x-prompt": "Which workspace should this go to?"
    },
    "name": {
      "type": "string",
      "description": "",
      "$default": {
        "$source": "argv",
        "index": 0
      },
      "x-prompt": "What name would you like to use for the component?"
    }
  },
  "required": ["project", "name"]
}
```

## If project property is missed, @nrwl/react generator defaults it

```sh
nx generate @nrwl/react:component --name=Hello --dry-run
```

Specifically you can't choose from the available projects.
