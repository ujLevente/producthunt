import { Card, CardContent, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import ProductForm from '../components/product/ProductForm';
import LoadingMask from '../components/UI/LoadingMask';
import useAsync, { statuses } from '../hooks/use-async';
import sendRequest from '../lib/api';

// const format = {
//   year: 'numeric',
//   month: 'long',
//   day: 'numeric',
// };

const EditProduct = () => {
  const history = useHistory();
  const { id } = useParams();

  const { execute: submitForm, error: formSubmissionError } =
    useAsync(sendRequest);

  const {
    execute: getProductData,
    data: productData,
    status: getProductDataStatus,
    error: getProductDataError,
  } = useAsync(sendRequest, true);
  console.log(productData);

  useEffect(() => {
    getProductData(`/products/${id}`);
  }, [id, getProductData]);

  if (getProductDataStatus === statuses.PENDING) {
    return <LoadingMask show={true} />;
  }

  if (getProductDataStatus === statuses.ERROR) {
    <div>{getProductDataError}</div>;
  }

  if (!productData) {
    return (
      <Typography color="textSecondary" align="center" variant="h4">
        No product found with id = {id}.
      </Typography>
    );
  }

  const onSubmit = async (values, helpers) => {
    const status = await submitForm(`/products/${id}`, values, 'PUT');
    helpers.setSubmitting(false);

    if (status === statuses.COMPLETED) {
      history.push('/');
    }
  };

  const initialValues = {
    productName: productData[0].title,
    description: productData[0].description,
    activeDate: null,
  };

  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5">
          Edit product
        </Typography>
        <ProductForm
          onSubmit={onSubmit}
          error={formSubmissionError}
          initialValues={initialValues}
        />
      </CardContent>
    </Card>
  );
};

export default EditProduct;
