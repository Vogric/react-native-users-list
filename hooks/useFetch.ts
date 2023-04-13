import { useEffect, useState } from 'react';
import axios, { AxiosResponse } from 'axios';

const useFetch = <T>(
  url: string,
  initialData?: T
): [T | null, boolean, string | null] => {
  const [data, setData] = useState<T | null>(initialData || null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);

    axios({ url })
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error: Error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return [data, loading, error];
};

export default useFetch;
