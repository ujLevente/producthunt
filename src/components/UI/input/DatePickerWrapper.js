import { KeyboardDatePicker } from '@material-ui/pickers';
import { useField } from 'formik';

import React from 'react';

const DatePickerWrapper = (props) => {
  const [, meta, helpers] = useField(props);

  return (
    <KeyboardDatePicker
      {...props}
      fullWidth={true}
      inputVariant="outlined"
      format="MM/dd/yyyy"
      value={meta.value}
      onChange={(event) => helpers.setValue(event)}
    />
  );
};

export default DatePickerWrapper;
