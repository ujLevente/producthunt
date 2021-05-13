import DateFnsUtils from '@date-io/date-fns';
import {
  Box,
  Button,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { Form, Formik } from 'formik';
import React from 'react';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  productName: Yup.string()
    .max(75, 'Must be 75 characters or less')
    .required('Required'),
  description: Yup.string().max(255, 'Must be 255 characters or less'),
  activeDate: Yup.date(),
});

const init = {
  productName: '',
  description: '',
  activeDate: null,
};

const useStyles = makeStyles((theme) => ({
  formWrapper: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(8),
  },
  submitButton: {
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const ProductForm = (props) => {
  const classes = useStyles();
  // const matches = useMediaQuery((theme) => {
  //   console.log(theme);
  //   return theme.breakpoints.up('sm');
  // });
  // console.log(matches);
  return (
    <>
      <Typography gutterBottom variant="h5">
        Add new product
      </Typography>
      <div className={classes.formWrapper}>
        <Formik
          initialValues={init}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {(formik) => (
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    type="textarea"
                    {...formik.getFieldProps('productName')}
                    error={
                      formik.touched.productName && !!formik.errors.productName
                    }
                    label="Product Name"
                    variant="outlined"
                    helperText={
                      formik.touched.productName && formik.errors.productName
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth={true}
                    multiline={true}
                    {...formik.getFieldProps('description')}
                    error={
                      formik.touched.description && !!formik.errors.description
                    }
                    helperText={
                      formik.touched.description && formik.errors.description
                    }
                    label="Description"
                    variant="outlined"
                    rows="5"
                  />
                </Grid>
                <Grid item xs={12}>
                  <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                      fullWidth={true}
                      inputVariant="outlined"
                      label="Active date"
                      format="MM/dd/yyyy"
                      value={formik.values.activeDate}
                      onChange={(value) =>
                        formik.setFieldValue('activeDate', value)
                      }
                    />
                  </MuiPickersUtilsProvider>
                </Grid>
                {/* <Button type="file" name="file" /> */}
              </Grid>
              <Box display="flex" mt={3} justifyContent="flex-end">
                <Button
                  className={classes.submitButton}
                  color="primary"
                  variant="contained"
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
