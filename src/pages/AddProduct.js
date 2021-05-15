import { Card, CardContent } from '@material-ui/core';
import React, { useEffect } from 'react';
import ProductForm from '../components/product/ProductForm';
import useAsync from '../hooks/use-async';
import sendRequest from '../lib/api';

const AddProduct = () => {
  const { execute, error, isInprogres } = useAsync(sendRequest);

  // useEffect(() => {
  //   if (!error)
  // }, )

  const onSubmit = async (values, helpers) => {
    const result = await execute('/products', values, 'POST');
    helpers.setSubmitting(false);

    // if (result.status === 'succes') {

    // }
  };

  return (
    <Card>
      <CardContent>
        <ProductForm onSubmit={onSubmit} error={error} isInprogres />
      </CardContent>
    </Card>
  );
};

export default AddProduct;
