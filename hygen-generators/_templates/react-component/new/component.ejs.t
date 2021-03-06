---
to: <%= workspace %>/src/components/<%= name %>/<%= name %>.tsx
---
import * as React from 'react';

interface <%= name %>Props {
  title: string;
}

export function <%= name %>({ title }: <%= name %>Props) {
  return <div>{title}</div>;
}
