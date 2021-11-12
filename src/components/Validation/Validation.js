import React from 'react';
import './style.css';

export const Validation = ({ msg, children, className, ...res }) => {
  const classes = ['validation-wrapper', className].join(' ');
  return (
    <div {...res} className={classes}>
      {children}
      {msg && <div className="validation-message">{msg}</div>}
    </div>
  );
};
