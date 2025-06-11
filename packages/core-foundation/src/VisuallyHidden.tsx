import React from 'react';

export const VisuallyHidden: React.FC<
  React.HTMLAttributes<HTMLSpanElement>
> = ({ children, style, ...rest }) => (
  <span
    style={{
      position: 'absolute',
      width: '1px',
      height: '1px',
      padding: 0,
      margin: '-1px',
      overflow: 'hidden',
      clip: 'rect(0, 0, 0, 0)',
      whiteSpace: 'nowrap',
      border: 0,
      ...(style || {}),
    }}
    {...rest}
  >
    {children}
  </span>
);

export default VisuallyHidden;
