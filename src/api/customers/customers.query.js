import { queryOptions, useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchCustomers, createCustomer } from "@/api/customers/customers.api.js";

export const getCustomersOptions = (currentPage, itemsPerPage) => {
  return queryOptions(
    {
      queryKey: ["customers", currentPage, itemsPerPage],
      queryFn: () => fetchCustomers(currentPage, itemsPerPage),
      staleTime: 1000 * 60 * 5, 
    }
  )
}

export const useCustomersQuery = (currentPage, itemsPerPage) => {
  return useQuery(getCustomersOptions(currentPage, itemsPerPage));
}

export const useCreateCustomerMutation = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createCustomer,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['customers'] });
    },
  });
};

