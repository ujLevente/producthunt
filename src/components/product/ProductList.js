import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import ProductItem from './ProductItem';

const ProductList = ({ data }) => {
  if (!data) {
    return null;
  }

  if (!data.length) {
    return (
      <div>
        <Typography color="textSecondary" align="center" variant="h4">
          No product found!
        </Typography>
      </div>
    );
  }
  let options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const products = data.map((product) => (
    <Grid item xs={12} sm={6} md={4} key={product.product_id}>
      <ProductItem
        productName={product.title}
        description={product.description}
        activeDate={new Date(product.active).toLocaleDateString(
          navigator.language,
          options
        )}
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {products}
    </Grid>
  );
};

export default ProductList;
