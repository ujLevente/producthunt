import React from 'react';
import style from './ClickableIcon.module.scss';

const ClickableIcon = ({ className = '', iconName, ...props }) => {
  return (
    <button className={`${style['btn-with-icon']} ${className}`} {...props}>
      <span className="material-icons">{iconName}</span>
    </button>
  );
};

export default ClickableIcon;
