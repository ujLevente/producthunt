import React from 'react';
import style from './Button.module.scss';

// export const purposes = {
//   PRIMARY: 'btn-primary',
//   SECONDARY: 'btn-secondary',
//   DANGER: 'btn-danger',
// };

const Button = ({ className = '', children: text, ...props }) => {
  return (
    <button className={`${style.btn} ${className}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
