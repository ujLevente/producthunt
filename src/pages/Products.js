import { Box, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect } from 'react';
import ProductList from '../components/product/ProductList';
import LoadingMask from '../components/UI/LoadingMask';
import useAsync from '../hooks/use-async';
import sendRequest from '../lib/api';

const Products = () => {
  const { execute, data, error, isInprogres } = useAsync(sendRequest, true);

  useEffect(() => {
    execute('/products');
  }, [execute]);

  let content;

  if (error) {
    content = (
      <>
        <Box display="flex" flexDirection="column">
          <Alert severity="error">{error}</Alert>
          <Box mt={2} display="flex" justifyContent="center">
            <Button
              variant="outlined"
              onClick={execute.bind(null, '/products')}
            >
              Try again
            </Button>
          </Box>
        </Box>
      </>
    );
  } else {
    content = <ProductList data={data} />;
  }

  return (
    <>
      <LoadingMask show={isInprogres} />
      {content}
    </>
  );
};

export default Products;
