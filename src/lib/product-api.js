import sendRequest from './api';

const BASE_URI = '/products';

export const getProducts = () => {
  return sendRequest(BASE_URI);
};

export const addProduct = (data) => {
  return sendRequest(BASE_URI, data, 'POST');
};
