import { useCallback, useState } from 'react';

export const statuses = {
  //request stauses adj v globálba
  PENDING: 'pending',
  COMPLETED: 'completed',
  ERROR: 'error',
};

const useAsync = (asyncFn, immidiate = false) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [status, setStatus] = useState(immidiate ? statuses.PENDING : null);

  const execute = useCallback(
    async (...params) => {
      setStatus(statuses.PENDING);
      setError(null);
      setData(null);

      let resolvedStatus = null;

      try {
        const data = await asyncFn(...params);
        setData(data);
        resolvedStatus = statuses.COMPLETED;
      } catch (error) {
        console.error(error);
        setError(error.message);
        resolvedStatus = statuses.ERROR;
      }

      setStatus(resolvedStatus);
      return resolvedStatus;
    },
    [asyncFn]
  );

  return {
    execute,
    data,
    error,
    status,
  };
};

export default useAsync;
