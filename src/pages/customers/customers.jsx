import { useState, useEffect, useMemo } from "react";
import { format } from "date-fns";
import { Box, Input, Heading, Text, Button } from "@chakra-ui/react";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(""); 
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const [timeoutId, setTimeoutId] = useState(null);

  const fetchCustomers = async (page) => {
    setLoading(true);
    const skip = (page - 1) * itemsPerPage;
    try {
      const res = await fetch(`https://dummyjson.com/users?limit=${itemsPerPage}&skip=${skip}`);
      const data = await res.json();
      setCustomers(data.users);
      setTotalCount(data.total);
    } catch (error) {
      console.error("Loading error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage]);

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

  const currentUsers = useMemo(() => {

    const filtered = customers.filter((user) => {
      const searchLower = debouncedSearchTerm.toLowerCase();
      return (
        user.firstName.toLowerCase().includes(searchLower) ||
        user.lastName.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower)
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
  }, [customers, debouncedSearchTerm, sortConfig]);

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

  return (
    <Box mt="big2" fontFamily="main" maxWidth="1800px">
      <Heading fontSize="big2" mb="big2" fontWeight="medium">
        Customers
      </Heading>

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
      ) : (
        currentUsers.map((user) => (
          <Box
            key={user.id}
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
            <Box flex={1}>{format(new Date(user.birthDate), "d MMMM yyyy")}</Box>
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
    </Box>
  );
}

export default Customers;