import * as React from 'react';

type BoxProps = React.HTMLAttributes<HTMLDivElement>;

export function Box({ style, ...props }: BoxProps) {
  return (
    <div
      style={{ boxSizing: 'border-box', ...style }}
      {...props}
    />
  );
}
