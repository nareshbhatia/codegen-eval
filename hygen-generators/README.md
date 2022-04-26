# Hygen Generators

## Setting up Hygene

```bash
# Install Hygene globally for easy access
$ npm install -g hygene

# Run generator with action new to create a new generator called page
$ hygen generator new page
        |         |   |
        |         |   name
        |         action
        generator

# Run generator page with action new to create a new page called HomePage
$ hygen page new HomePage
        |    |   |
        |    |   name
        |    action
        generator

# To add prompts to any generator, simply add a file called prompts.js to that generator.
```

## Documentation

## Choosing workspace directory

There is no good enquirer prompt for selecting a directory interactively.
