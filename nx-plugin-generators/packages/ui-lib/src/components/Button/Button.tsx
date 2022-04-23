import * as React from 'react';

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return <div>{title}</div>;
}
