# Codegen Eval

Evaluation of various code generators

|                     | Plop                         | Hygen                            | Nx                    |
|---------------------|------------------------------|----------------------------------|-----------------------|
| Template Language   | Handlebars                   | EJS                              | EJS                   |
| CLI command         | plop component               | hygen generator action name      | Flexible & extensible |
| Generator loading   | In plopfile                  | Based on directory structure     | In tools directory    |
| Workspace awareness | ----- No -----               | ----- No -----                   | Yes                   |
| Directory transform | addMany                      | Copies directory                 | Copies directory      |
| Extensibility       | Inquirer prompts and actions | Actions in front-matter          | Full TypeScript       |
| Sharing             | ?                            | hygen-add (yarn only)            | Compiled plugins      |
| Modularity          | Single-level                 | 2 levels, generator/action       | Anything you want     |
| Docs quality        | Average                      | Good                             | Average               |
| Other               |                              | Wasn't able to copy binary files | ---- Tied to Nx ----  |
| Project active?     | Yes                          | ---- No ----                     | Yes                   |
