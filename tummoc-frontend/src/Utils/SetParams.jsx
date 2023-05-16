import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";



export const useSearch = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const prevSearchParamsRef = useRef(searchParams.toString());

    useEffect(() => {
      const currentSearchParams = searchParams.toString();
      if (prevSearchParamsRef.current !== currentSearchParams) {
        prevSearchParamsRef.current = currentSearchParams;
      }
    }, [searchParams]);

    const updateSearch = (newSearch)=> {
      const params = new URLSearchParams(prevSearchParamsRef.current);

      Object.entries(newSearch).forEach(([key, value]) => {
        if (value) {
          params.set(key, value);
        } else {
          params.delete(key);
        }
      });

      setSearchParams(params.toString());
    };

    const currentSearch = Array.from(searchParams.entries()).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: value,
      }),
      {}
    );

    return [currentSearch, updateSearch];
  };