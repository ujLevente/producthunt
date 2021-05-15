import DateFnsUtils from '@date-io/date-fns';
import { Box, Button, Grid, makeStyles, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import DatePickerWrapper from '../UI/input/DatePickerWrapper';
import TextFieldWrapper from '../UI/input/TextFieldWrapper';
import LoadingMask from '../UI/LoadingMask';

const initialValues = {
  productName: '',
  description: '',
  activeDate: null,
};

const validationSchema = Yup.object({
  productName: Yup.string()
    .max(75, 'Must be 75 characters or less')
    .required('Required'),
  description: Yup.string().max(255, 'Must be 255 characters or less'),
  activeDate: Yup.date().nullable().default(null),
}); // talán áthelyezni pagere

const useStyles = makeStyles((theme) => {
  return {
    formWrapper: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(8),
    },
    submitButton: {
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
    },
  };
});

const ProductForm = ({ onSubmit, error }) => {
  const classes = useStyles();

  return (
    <>
      <Typography gutterBottom variant="h5">
        Add new product
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <div className={classes.formWrapper}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(formik) => (
            <Form>
              <LoadingMask show={formik.isSubmitting} />
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextFieldWrapper label="Product Name" name="productName" />
                </Grid>
                <Grid item xs={12}>
                  <TextFieldWrapper
                    multiline={true}
                    label="Description"
                    rows="5"
                    name="description"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePickerWrapper name="activeDate" label="Active date" />
                  </MuiPickersUtilsProvider>
                </Grid>
              </Grid>
              <Box display="flex" mt={3} justifyContent="flex-end">
                <Button
                  disabled={formik.isSubmitting}
                  className={classes.submitButton}
                  color="primary"
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default ProductForm;
