import { apiClient } from "@/api/apiClient.js";

export const fetchCustomers = async (page, itemsPerPage) => {
  const skip = (page - 1) * itemsPerPage;
  const res = await apiClient.get(`users?limit=${itemsPerPage}&skip=${skip}`);
  return res.data;
};

export const createCustomer = async (customerData) => {
  const res = await apiClient.post('users/add', customerData);
  return res.data;
};
