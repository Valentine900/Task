import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Box, Input, Text, Heading } from "@chakra-ui/react";

function Customers() {
  const [customers, setCustomers] = useState([]);
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortConfig, setSortConfig] = useState({key: null, direction: "asc"});

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setCustomers(data.users);
        setFilteredCustomers(data.users);
      })
      .catch((error) => console.error("Ошибка загрузки данных:", error));
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

      {filteredCustomers.map((user) => (
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
    </Box>
  );
}

export default Customers;
