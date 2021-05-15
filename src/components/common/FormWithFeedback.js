import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React from 'react';

const FormWithFeedback = ({ error }) => {
  return (
    <Snackbar open={!!error && !isInProgress}>
      <Alert severity="error">{error}</Alert>
    </Snackbar>
  );
};

export default FormWithFeedback;
