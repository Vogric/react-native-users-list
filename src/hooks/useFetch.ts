import { useQuery } from 'react-query';
import axios from 'axios';

const useFetch = <T>(url: string): [T | null, boolean, unknown] => {
  const { data, isLoading, error } = useQuery<T>(url, async () => {
    const response = await axios.get(url);
    return response.data;
  });

  return [data || null, isLoading, error];
};

export default useFetch;
