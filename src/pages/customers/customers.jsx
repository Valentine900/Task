import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Box, Input, Heading, Text, Button } from "@chakra-ui/react";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({key: null, direction: "asc"});

  const [currentPage, setCurrrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.users);
        setFilteredCustomers(data.users);
      })
      .catch((error) => console.error("loading error:", error));
  }, []);

  useEffect(() => {
    const lowerSearch = searchTerm.toLowerCase();
    const filtered = customers.filter(
      (user) =>
        user.firstName.toLowerCase().includes(lowerSearch) ||
        user.lastName.toLowerCase().includes(lowerSearch) ||
        user.email.toLowerCase().includes(lowerSearch)
    );
    setFilteredCustomers(filtered);
    setCurrrentPage(1);
  }, [searchTerm, customers]);

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }
    setSortConfig({ key, direction });

    const sorted = [...filteredCustomers].sort((a, b) => {
      let aVal = a[key];
      let bVal = b[key];

      if (key === "birthDate") {
        aVal = new Date(aVal);
        bVal = new Date(bVal);
      }

      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
    setFilteredCustomers(sorted);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentCustomers = filteredCustomers.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrrentPage(currentPage + 1);
  };

  return (
    <Box mt="big2" fontFamily="main" maxWidth="1800px" >
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
        <Box
          flex={1}
          onClick={() => handleSort("firstName")}
          cursor="pointer"
        >
          First Name{" "}
          {sortConfig.key === "firstName" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
        <Box
          flex={1}
          onClick={() => handleSort("lastName")}
          cursor="pointer"
        >
          Last Name{" "}
          {sortConfig.key === "lastName" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
        <Box
          flex={1}
          onClick={() => handleSort("birthDate")}
          cursor="pointer"
        >
          Birth Date{" "}
          {sortConfig.key === "birthDate" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
        <Box
          flex={2}
          onClick={() => handleSort("email")}
          cursor="pointer"
        >
          Email{" "}
          {sortConfig.key === "email" &&
            (sortConfig.direction === "asc" ? "↑" : "↓")}
        </Box>
      </Box>

      {currentCustomers.map((user) => (
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
      ))}

      <Box display="flex" justifyContent="center" alignItems="center" mt="big2" gap="big">
        <Button onClick={handlePrevPage} disabled={currentPage === 1} bg="gray.200" color="gray.950" fontFamily="main" fontWeight="medium">
          Prev
        </Button>
        <Text fontFamily="main" fontWeight="medium">
          Page {currentPage} of {totalPages}
        </Text>
        <Button onClick={handleNextPage} disabled={currentPage === totalPages} bg="gray.200" fontFamily="main" fontWeight="medium" color="gray.950">
          Next
        </Button>
      </Box>
    </Box>
  );
}

export default Customers;
