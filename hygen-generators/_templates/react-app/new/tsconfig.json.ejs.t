---
to: apps/<%= name %>/tsconfig.json
---
{
  "extends": "tsconfig/vite.json",
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
