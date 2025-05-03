import apiClient from "@/lib/api";

export async function getAllCountries() {
  const response = await apiClient.get("/countries/");
  return response.data;
}
