import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import ProductForm from '../components/product/ProductForm';
import useAsync, { statuses } from '../hooks/use-async';
import sendRequest from '../lib/api';

const initialValues = {
  productName: '',
  description: '',
  activeDate: null,
};

const AddProduct = () => {
  const { execute, data, error, status } = useAsync(sendRequest);
  const history = useHistory();
  console.log(data, error, status);
  // console.log(error, status, 1);
  // useEffect(() => {
  //   if (status === statuses.COMPLETED) {
  //     history.push('/');
  //   }
  // }, [status, history]);

  const onSubmit = async (values, helpers) => {
    const status2 = await execute('/products', values, 'POST');
    console.log('GECIii');
    helpers.setSubmitting(false);
    if (status2 === statuses.COMPLETED) {
      history.push('/');
    }
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Add new product
        </Typography>
        <ProductForm
          onSubmit={onSubmit}
          error={error}
          initialValues={initialValues}
        />
      </CardContent>
    </Card>
  );
};

export default AddProduct;
