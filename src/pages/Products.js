import { Box, Button } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import React, { useEffect } from 'react';
import ProductList from '../components/product/ProductList';
import LoadingMask from '../components/UI/LoadingMask';
import useAsync, { statuses } from '../hooks/use-async';
import sendRequest from '../lib/api';

const Products = () => {
  const { execute, data, error, status } = useAsync(sendRequest, true);

  useEffect(() => {
    execute('/products');
  }, [execute]);

  if (status === statuses.PENDING) {
    return <LoadingMask show={true} />;
  }

  if (error) {
    return (
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
  }

  return <ProductList data={data} />;
};

export default Products;
