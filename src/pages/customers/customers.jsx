import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { 
  Box, 
  Input, 
  Heading, 
  Text, 
  Button
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useCustomersQuery, useCreateCustomerMutation } from "@/api/customers/customers.query";

function Customers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [notification, setNotification] = useState({ show: false, type: '', message: '' });
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const [newlyCreatedUsers, setNewlyCreatedUsers] = useState([]);
  const itemsPerPage = 10;

  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset,
    setError,
    clearErrors 
  } = useForm();

  const { isLoading: loading, data, refetch } = useCustomersQuery(currentPage, itemsPerPage);
  const createCustomerMutation = useCreateCustomerMutation();

  const customers = data?.users || [];
  const totalCount = data?.total || 0;

  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    const newTimeoutId = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm); 
    }, 300);

    setTimeoutId(newTimeoutId);

    return () => clearTimeout(newTimeoutId);
  }, [searchTerm]);

  useEffect(() => {
    if (notification.show) {
      const timer = setTimeout(() => {
        setNotification({ show: false, type: '', message: '' });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });
  };

  const allUsers = useMemo(() => {
    return [...newlyCreatedUsers, ...customers];
  }, [customers, newlyCreatedUsers]);

  const currentUsers = useMemo(() => {
    const filtered = allUsers.filter((user) => {
      const searchLower = debouncedSearchTerm.toLowerCase();
      return (
        user.firstName?.toLowerCase().includes(searchLower) ||
        user.lastName?.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower)
      );
    });

    if (!sortConfig.key) return filtered;

    const sorted = [...filtered].sort((a, b) => {
      let aVal = a[sortConfig.key];
      let bVal = b[sortConfig.key];

      if (sortConfig.key === "birthDate") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }

      if (aVal < bVal) return sortConfig.direction === "asc" ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === "asc" ? 1 : -1;
      return 0;
    });

    return sorted;
  }, [allUsers, debouncedSearchTerm, sortConfig]);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });
  };

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const openModal = () => {
    clearErrors();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    reset();
    setIsModalOpen(false);
  };

  const onSubmit = async (formData) => {
    try {
      const customerData = {
        ...formData,
        birthDate: new Date(formData.birthDate).toISOString()
      };

      const result = await createCustomerMutation.mutateAsync(customerData);
      
      if (result) {
        setNewlyCreatedUsers(prev => [result, ...prev]);
      }
      
      showNotification('success', 'Customer created successfully');
      
      reset();
      closeModal();
      
      refetch();
      
      setCurrentPage(1);
      
    } catch (error) {
      console.error('Error creating customer:', error);
      
      showNotification('error', error.response?.data?.message || 'Error creating customer');

      if (error.response?.data?.errors) {
        error.response.data.errors.forEach(err => {
          setError(err.field, {
            type: 'server',
            message: err.message
          });
        });
      }
    }
  };

  return (
    <Box mt="big2" fontFamily="main" maxWidth="1800px">
      {notification.show && (
        <Box
          position="fixed"
          top="4"
          right="4"
          zIndex="2000"
          bg={notification.type === 'success' ? 'green.500' : 'red.500'}
          color="white"
          px="6"
          py="4"
          borderRadius="md"
          boxShadow="lg"
          maxWidth="400px"
        >
          <Text fontWeight="medium">{notification.message}</Text>
        </Box>
      )}

      <Box display="flex" justifyContent="space-between" alignItems="center" mb="big2">
        <Heading fontSize="big2" fontWeight="medium">
          Customers
        </Heading>
        <Button 
          onClick={openModal} 
          bg="main.600" 
          color="white" 
          fontFamily="main"
          fontWeight="medium"
          fontSize="small2"
          borderRadius="small"
        >
          Add Customer
        </Button>
      </Box>

      <Input
        placeholder="Search by first name, last name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb="big2"
        borderColor="gray.300"
        _focus={{ borderColor: "gray.500" }}
        borderRadius="big"
      />

      <Box
        display="flex"
        bg="gray.100"
        px="medium3"
        py="medium"
        borderBottom="3px solid"
        borderColor="main.400"
        cursor="pointer"
        fontFamily="main"
        fontWeight="medium"
      >
        <Box flex={1} onClick={() => handleSort("firstName")} cursor="pointer">
          First Name{" "}
          {sortConfig.key === "firstName" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
        <Box flex={1} onClick={() => handleSort("lastName")} cursor="pointer">
          Last Name{" "}
          {sortConfig.key === "lastName" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
        <Box flex={1} onClick={() => handleSort("birthDate")} cursor="pointer">
          Birth Date{" "}
          {sortConfig.key === "birthDate" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
        <Box flex={2} onClick={() => handleSort("email")} cursor="pointer">
          Email{" "}
          {sortConfig.key === "email" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
      </Box>

      {loading ? (
        <Text mt="4">Loading...</Text>
      ) : currentUsers.length === 0 ? (
        <Text mt="4" textAlign="center" color="gray.500">
          No customers found
        </Text>
      ) : (
        currentUsers.map((user) => (
          <Box
            key={user.id || `new-${user.email}-${user.firstName}`}
            display="flex"
            px="medium3"
            py="medium2"
            borderBottom="1px solid"
            borderColor="gray.300"
            _hover={{ bg: "gray.100" }}
            alignItems="center"
          >
            <Box flex={1}>{user.firstName}</Box>
            <Box flex={1}>{user.lastName}</Box>
            <Box flex={1}>
              {user.birthDate ? format(new Date(user.birthDate), "d MMMM yyyy") : 'N/A'}
            </Box>
            <Box flex={2}>{user.email}</Box>
          </Box>
        ))
      )}

      <Box display="flex" justifyContent="center" alignItems="center" mt="big2" gap="big">
        <Button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          bg="gray.200"
          colorScheme=""
          color="gray.950"
          fontFamily="main"
          fontWeight="medium"
        >
          Prev
        </Button>
        <Text fontFamily="main" fontWeight="medium">
          Page {currentPage} of {totalPages}
        </Text>
        <Button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          bg="gray.200"
          colorScheme=""
          color="gray.950"
          fontFamily="main"
          fontWeight="medium"
        >
          Next
        </Button>
      </Box>

      {isModalOpen && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bg="rgba(0, 0, 10, 0.6)"
          display="flex"
          alignItems="center"
          justifyContent="center"
          zIndex="1000"
        >
          <Box
            bg="another.wh"
            borderRadius="medium"
            width="100%"
            maxWidth="550px"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              p="big3"
              borderBottom="1px solid"
              borderColor="gray.200"
            >
              <Heading fontSize="xl" fontWeight="medium">
                Add New Customer
              </Heading>
              <Button
                variant="ghost"
                onClick={closeModal}
                fontSize="lg"
                _hover={{ bg: "gray.100" }}
                isDisabled={createCustomerMutation.isLoading}
              >
                ×
              </Button>
            </Box>

            <Box p="big3">
              <Box mb={4}>
                <Text fontWeight="medium" mb="small2">
                  First Name
                </Text>
                <Input
                  {...register("firstName", { 
                    required: "First name is required",
                    minLength: {
                      value: 2,
                      message: "First name must be at least 2 characters"
                    }
                  })}
                  placeholder="Enter first name"
                  isInvalid={errors.firstName}
                />
                {errors.firstName && (
                  <Text color="red.500" fontSize="small2" mt="small">
                    {errors.firstName.message}
                  </Text>
                )}
              </Box>

              <Box mb={4}>
                <Text fontWeight="medium" mb="small2">
                  Last Name
                </Text>
                <Input
                  {...register("lastName", { 
                    required: "Last name is required",
                    minLength: {
                      value: 2,
                      message: "Last name must be at least 2 characters"
                    }
                  })}
                  placeholder="Enter last name"
                  isInvalid={errors.lastName}
                />
                {errors.lastName && (
                  <Text color="red.500" fontSize="small2" mt="small">
                    {errors.lastName.message}
                  </Text>
                )}
              </Box>

              <Box mb={4}>
                <Text fontWeight="medium" mb="small2">
                  Email
                </Text>
                <Input
                  type="email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  placeholder="Enter email"
                  isInvalid={errors.email}
                />
                {errors.email && (
                  <Text color="red.500" fontSize="small2" mt="small">
                    {errors.email.message}
                  </Text>
                )}
              </Box>

              <Box mb={4}>
                <Text fontWeight="medium" mb="small2">
                  Birth Date
                </Text>
                <Input
                  type="date"
                  {...register("birthDate", { 
                    required: "Birth date is required",
                    validate: {
                      validDate: (value) => {
                        const date = new Date(value);
                        return !isNaN(date.getTime()) || "Please enter a valid date";
                      },
                      notFuture: (value) => {
                        const date = new Date(value);
                        return date <= new Date() || "Birth date cannot be in the future";
                      }
                    }
                  })}
                  isInvalid={errors.birthDate}
                />
                {errors.birthDate && (
                  <Text color="red.500" fontSize="small2" mt="small">
                    {errors.birthDate.message}
                  </Text>
                )}
              </Box>
            </Box>

            <Box
              display="flex"
              justifyContent="flex-end"
              p="big2"
              borderTop="1px solid"
              borderColor="gray.200"
              gap="small2"
            >
              <Button 
                variant="ghost" 
                onClick={closeModal}
                isDisabled={createCustomerMutation.isLoading}
              >
                Cancel
              </Button>
              <Button 
                type="submit" 
                bg="main.600" 
                color="white" 
                _hover={{ bg: "main.500" }}
                isLoading={createCustomerMutation.isLoading}
                loadingText="Creating..."
              >
                Add Customer
              </Button>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Customers;