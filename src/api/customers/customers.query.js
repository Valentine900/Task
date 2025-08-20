import {queryOptions, useQuery} from "@tanstack/react-query";
import {fetchCustomers} from "@/api/customers/customers.api.js";

export const getCustomersOptions = (currentPage, itemsPerPage) => {
  return queryOptions(
    {
      queryKey: ["customers", currentPage, itemsPerPage],
      queryFn: () => fetchCustomers(currentPage, itemsPerPage),
      staleTime: 1000 * 60 * 5, // 5 minutes
    }
  )
}


export const useCustomersQuery = (currentPage, itemsPerPage) => {
  return useQuery(getCustomersOptions(currentPage, itemsPerPage));
}

