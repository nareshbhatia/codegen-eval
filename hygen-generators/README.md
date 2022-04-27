# Hygen Generators

## Setting up Hygene

```bash
# Install Hygene globally for easy access
$ npm install -g hygene

# Run generator with action new to create a new generator called react-page
$ hygen generator new react-page
        |         |   |
        |         |   name
        |         action
        generator

# Run generator react-page with action new to create a new page called HomePage
$ hygen react-page new HomePage
        |          |   |
        |          |   name
        |          action
        generator

# To add prompts to any generator, simply add a file called prompts.js to that generator.
```

## Detailed example

```bash
# Run generator react-app with action new to create a new app called trade-force
$ hygen react-app new trade-force

# Run generator react-page with action new to create a new page called OrdersPage
$ hygen react-page new OrdersPage

# Run generator react-component with action new to create a new page called OrderList
$ hygen react-component new OrderList
```

## Choosing workspace directory

There is no good enquirer prompt for selecting a directory interactively.

## Binary files are not transferring in spite of .hygenignore

See _templates/react-app/new/src/favicon.ico
