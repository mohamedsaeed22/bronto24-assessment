import { useQuery } from "@tanstack/react-query";
import { getAllCountries } from "@/lib/api/countries";

export function useCountries() {
  const countriesQuery = useQuery({
    queryKey: ["countries"],
    queryFn: getAllCountries,
    staleTime: Infinity,
  });

  return {
    countries: countriesQuery.data?.results || [],
    isLoading: countriesQuery.isLoading,
    isError: countriesQuery.isError,
    error: countriesQuery.error,
  };
}
