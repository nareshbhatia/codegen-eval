# Enquirer

```sh
# yargs parses "contact" and hands over the options to contact function
# Note: there is a bug in Select - see code
node index.js contact --name Mat

# yargs parses "component" and hands over the options to component function
node index.js component --name Header
```

## Observations

- Documentation is outdated. For example, README.md does not talk about
  autofill. There is a separate docs folder, but that too is incomplete.
- Last code commit was on Sep 6, 2020
  (https://github.com/enquirer/enquirer/pull/309)
- 149 open issues, many of which with no responses
- TypeScript types are not well maintained (see
  https://github.com/enquirer/enquirer/issues/135#issuecomment-851367525)
