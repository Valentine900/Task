import { Outlet } from "react-router";
import {
  Box,
  Stack,
  Flex,
  Text,
  Image,
  Heading,
  Select,
} from "@chakra-ui/react";
import CustomNavLink from "@/components/ui/nav_link.jsx";
import { useAuth } from "@/components/model/auth_context";
import { navLinks } from "@/app/data";
import avatar1 from "@/assets/Ellipse 59.png";

import logoImage from "@/assets/Logo.svg";

function MainLayout() {
  const [isAuth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Box display="flex">
      <Box width="268px" pt="big3" pr="big4" pb="giant" pl="big2">
        <Stack gap="nothing" align="left">
          <Image src={logoImage} width="148px" height="34px" mb="giant" />
          <Stack gap="small">
            {navLinks.map((item, index) =>
              item.isDivider ? (
                <Box
                  key={index}
                  height="1px"
                  width="220px"
                  backgroundColor="another.line"
                />
              ) : (
                <CustomNavLink key={index} to={item.to} icon={item.icon}>
                  {item.label}
                </CustomNavLink>
              )
            )}
          </Stack>
          <Flex
            align="center"
            padding="medium3"
            borderRadius="medium2"
            boxShadow="variant_a"
            onClick={handleLogout}
            cursor="pointer"
            bg="another.wh"
            mt="veryHuge"
          >
            <Text
              fontWeight="normal"
              fontSize="small"
              color="gray.900"
              fontFamily="main"
            >
              Log Out
            </Text>
          </Flex>
          <Flex
            padding="small"
            borderRadius="medium2"
            bg="gray.100"
            gap="small"
            marginTop="veryLittle"
            alignItems="center"
          >
            <Image src={avatar1} width="32px" height="32px" />

            <Flex flexDirection="column" flexGrow="1">
              <Flex alignItems="center" width="100%">
                <Heading
                  lineHeight="little2"
                  fontWeight="medium"
                  fontSize="small"
                >
                  Alfredo Baptista
                </Heading>
                <Box ml="auto">
                  <Select.Root>
                    <Select.Indicator />
                  </Select.Root>
                </Box>
              </Flex>
              <Text
                fontWeight="normal"
                fontSize="little"
                color="gray.400"
                fontFamily="main"
                lineHeight="little"               
              >
                baptista.a@company.com
              </Text>
            </Flex>
          </Flex>
        </Stack>
      </Box>
      <Box flexGrow={1}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
