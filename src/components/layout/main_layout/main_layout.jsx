import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { Box, Stack, Flex, Text, Heading, Image } from "@chakra-ui/react";
import CustomNavLink from "@/components/ui/nav_link.jsx";
import {
  SquaresFour,
  UserList,
  TreeStructure,
  GearSix,
  CheckCircle,
} from "phosphor-react";
import { useAuth } from "@/components/model/auth_context";

import logoImage from "@/assets/Logo.svg";

function MainLayout() {
  const [isAuth, setAuth] = useAuth();

  const handleLogout = () => {
    setAuth(false);
  };

  return (
    <Box display="flex">
      <Box width="268px" padding="20px">
        <Stack align="left">
          <Flex marginTop="13px">
            <Image
              src={logoImage}
              width="34px"
              height="34px"
              marginBottom="40px"
            />
            <Heading
              fontSize="medium2"
              fontWeight="medium"
              marginLeft="8px"
              color="#111111"
            >
              PA KYC
            </Heading>
          </Flex>

          <CustomNavLink to="/" icon={SquaresFour}>
            Dashboard
          </CustomNavLink>
          <CustomNavLink to="/customers" icon={UserList}>
            Customers
          </CustomNavLink>
          <CustomNavLink to="/*" icon={null}>
            Tasks
          </CustomNavLink>
          <CustomNavLink to="/*" icon={null}>
            My tasks
          </CustomNavLink>
          <CustomNavLink to="/*" icon={null}>
            Backlog
          </CustomNavLink>
          <Box height="1px" width="220px" backgroundColor="#F2F2F2" />
          <CustomNavLink to="/*" icon={TreeStructure}>
            Rules
          </CustomNavLink>
          <CustomNavLink to="/*" icon={null}>
            Manual tasks
          </CustomNavLink>
          <Box height="1px" width="220px" backgroundColor="#F2F2F2" />
          <CustomNavLink to="/*" icon={GearSix}>
            Settings
          </CustomNavLink>
          <CustomNavLink to="/*" icon={CheckCircle}>
            System health
          </CustomNavLink>

          <Flex
            align="center"
            p="4"
            marginTop="auto"
            borderRadius="lg"
            boxShadow="0px 3px 8px 0px #0000000D"
            onClick={handleLogout}
            cursor="pointer"
            bg="#FFFFFF"
            mt={8}
          >
            <Text fontWeight="normal" fontSize="small" color="gray.900">
              Log Out
            </Text>
          </Flex>
        </Stack>
      </Box>
      <Box flexGrow={1} paddingLeft="20px">
        <Outlet />
      </Box>
    </Box>
  );
}

export default MainLayout;
