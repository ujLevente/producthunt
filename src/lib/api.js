const BASE_DOMAIN = 'http://localhost:4000';
const ERROR_MSG = 'Error while sending request.';

// const sendRequest = async (uri, data = null, method = 'GET') => {
//   const requestConfig = {
//     mode: 'cors',
//     method,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   if (method !== 'GET' && data != null) {
//     requestConfig.body = JSON.stringify(data);
//   }

//   const response = await fetch(BASE_DOMAIN + uri, requestConfig);
//   const result = await response.json();

//   if (!response.ok) {
//     throw new Error(result.message || ERROR_MSG);
//   }

//   return result;
// };

const sendRequest = async (uri, data = null, method = 'GET') => {
  const requestConfig = {
    mode: 'cors',
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET' && method !== 'DELETE' && data !== null) {
    requestConfig.body = JSON.stringify(data);
  }

  const response = await fetch(BASE_DOMAIN + uri, requestConfig);
  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || ERROR_MSG);
  }

  return result;
};

// export const Products = {
//   getAll: async () => {
//     const data = await sendRequest('/products');

//     return data.map((el) => {

//     });
//   }
// }
export default sendRequest;
