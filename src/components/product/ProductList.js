import { Grid, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import useAsync, { statuses } from '../../hooks/use-async';
import sendRequest from '../../lib/api';
import LoadingMask from '../UI/LoadingMask';
import ProductItem from './ProductItem';

const format = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const ProductList = ({ data }) => {
  const { execute, error, status } = useAsync(sendRequest);
  const [products, setProducts] = useState(data);

  const handleDelete = async (id) => {
    const status = await execute(`/products/${id}`, null, 'DELETE'); // szar sorrend

    if (status === statuses.COMPLETED) {
      setProducts((prevState) => {
        return prevState.filter((product) => product.product_id !== id);
      });
    }
  };

  if (products.length === 0) {
    return (
      <div>
        <Typography color="textSecondary" align="center" variant="h4">
          No product found!
        </Typography>
      </div>
    );
  }

  const productItems = products.map((product) => (
    <Grid item xs={12} sm={6} md={4} key={product.product_id}>
      <ProductItem
        handleDelete={handleDelete}
        id={product.product_id}
        productName={product.title}
        description={product.description}
        activeDate={new Date(product.active).toLocaleDateString(
          navigator.language,
          format
        )}
      />
    </Grid>
  ));

  return (
    <>
      <LoadingMask show={status === statuses.PENDING} />
      {status === statuses.ERROR && <div>{error}</div>}
      <Grid container spacing={2}>
        {productItems}
      </Grid>
    </>
  );
};

export default ProductList;
