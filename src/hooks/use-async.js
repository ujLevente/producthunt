import { useCallback, useState } from 'react';

// export const statuses = {
//     PENDING: 'pending',
//     CO
// }

const useAsync = (asyncFn, immidiate = false) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [isInprogres, setIsInprogres] = useState(false);

  const execute = useCallback(
    async (...params) => {
      setIsInprogres(true);
      setError(null);

      try {
        const data = await asyncFn(...params);
        setData(data);
      } catch (error) {
        setError(error.message);
      }
      setIsInprogres(false);
    },
    [asyncFn]
  );

  return {
    execute,
    data,
    error,
    isInprogres,
  };
};

export default useAsync;
