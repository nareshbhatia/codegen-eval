# Inquirer

```sh
# yargs parses "contact" and hands over the options to contact function
# Note: there is a bug in Select - see code
node index.js contact --name Mat

# yargs parses "component" and hands over the options to component function
node index.js component --name Header
```

## Observations

- Good number of plugins from community
- Answered questions are skipped. Added `askAnswered` simply asks the answered
  question without prefilling the known answer.
- Documentation is decent.
- Last code commit was on Apr 28, 2022 (3 days ago)
- 207 open issues, but mostly have responses
- TypeScript types are well maintained (see
  https://www.npmjs.com/package/@types/inquirer)
