---
inject: true
to: <%= workspace %>/src/pages/index.ts
skip_if: <%= name %>
after: "// -- APPEND ITEMS HERE --"
---
export * from './<%= name %>';
