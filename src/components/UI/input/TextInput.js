import { useField } from 'formik';
import React from 'react';
import ValidationErrorMessage from './ValidationErrorMessage';
import style from './TextInput.module.scss';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const isValidationFailed = meta.touched && meta.error;
  console.log(meta);
  return (
    <>
      <label className={style.label} htmlFor={props.id || props.name}>
        {label}
      </label>
      <input
        className={`${isValidationFailed && style['error']} ${
          style['text-input']
        }`}
        {...field}
        {...props}
      />

      <ValidationErrorMessage
        errorMessage={meta.error}
        display={isValidationFailed}
      />
    </>
  );
};

export default TextInput;
