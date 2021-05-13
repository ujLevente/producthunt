import React from 'react';
import style from './ValidationErrorMessage.module.scss';

const ValidationErrorMessage = (props) => {
  return (
    <>
      {props.display ? (
        <div className={style.error}>{props.errorMessage}</div>
      ) : null}
    </>
  );
};

export default ValidationErrorMessage;
