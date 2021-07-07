import { useEffect, useState } from 'react';

export default function useGetPokemon(url) {
  const [data, setData] = useState('');
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getPokemon = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    };
    if (url) {
      getPokemon();
    }
  }, [url]);
  return {
    data,
    isLoading,
  };
}
