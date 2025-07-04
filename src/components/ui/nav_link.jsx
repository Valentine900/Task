import { NavLink } from "react-router";
import { Flex, Text, Box } from "@chakra-ui/react";

const CustomNavLink = ({ to, icon: Icon, children }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Flex
          align="center"
          padding="small"
          gap="small"
          borderRadius="medium2"
          bg={isActive ? "gray.100" : "transparent"}
          color="gray.900"
          fontSize="small2"
          fontFamily="main"
        >
          {Icon ? <Icon size={20} /> : <Box width={5}  />}
          <Text texAlign="center" fontWeight="medium" lineHeight="small2" >
            {children}
          </Text>
        </Flex>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
