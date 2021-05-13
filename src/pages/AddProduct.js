import { Card, CardContent } from '@material-ui/core';
import React from 'react';
import ProductForm from '../components/product/ProductForm';

const AddProduct = () => {
  return (
    <Card>
      <CardContent>
        {/* <Typography variant="body2" color="textSecondary" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography> */}
        <ProductForm />
      </CardContent>
    </Card>
  );
};

export default AddProduct;
