import { NavLink } from "react-router";
import { Flex, Text } from "@chakra-ui/react";

const CustomNavLink = ({ to, icon: Icon, children }) => {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <Flex
          align="center"
          p="2"
          gap="2"
          borderRadius="lg"
          bg={isActive ? "gray.100" : "transparent"}
          color="gray.900"
          fontSize="small2"
        >
          {Icon && <Icon size={20} />}
          <Text fontWeight="medium">{children}</Text>
        </Flex>
      )}
    </NavLink>
  );
};

export default CustomNavLink;
