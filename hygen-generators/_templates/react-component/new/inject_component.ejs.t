---
inject: true
to: <%= workspace %>/src/components/index.ts
skip_if: <%= name %>
after: "// -- APPEND ITEMS HERE --"
---
export * from './<%= name %>';
