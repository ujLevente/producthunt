import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import useAsync, { statuses } from '../hooks/use-async';
import sendRequest from '../lib/api';

const ProductDetails = () => {
  const { id } = useParams();
  const { execute, data, error, status } = useAsync(sendRequest, true);

  useEffect(() => {
    execute(`/products/${id}`);
  }, [execute, id]);

  if (status === statuses.ERROR) {
    return <p>fuck</p>;
  }

  return <div>{status === statuses.COMPLETED && data.json()}</div>;
};

export default ProductDetails;
