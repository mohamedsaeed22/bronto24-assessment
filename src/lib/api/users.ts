import { UserFormData } from "@/types";
import apiClient from "@/lib/api/";

export async function getAllUsers() {
  const response = await apiClient.get("/userprofiles/");
  return response?.data?.results;
}

export async function createUser(userData: UserFormData) {
  const response = await apiClient.post("/userprofiles/create/", userData);
  return response.data;
}

export async function updateUser(id: number, userData: Partial<UserFormData>) {
  const response = await apiClient.patch(
    `/userprofiles/update/${id}/`,
    userData
  );
  return response.data;
}

export async function deleteUser(id: number) {
  const response = await apiClient.delete(`/userprofiles/delete/${id}/`);
  return response.status === 204 ? { success: true } : response.data;
}
