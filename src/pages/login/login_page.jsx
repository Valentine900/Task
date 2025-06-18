import { useNavigate } from "react-router";
import {
  Box,
  Text,
  Button,
  Link,
  Heading,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import logoImage from "@/assets/Logo.svg";
import InputField from "@/components/ui/input_field";
import { useAuth } from "@/components/model/auth_context";

function Login() {
  const [isAuth, setAuth] = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    if (email === "admin" && password === "admin") {
      setAuth(true);
    } else {
      alert("Incorrect login or password");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Box
        align="center"
        width="500px"
        padding="20px"
        boxShadow="0px 8px 40px 0px #00000014"
        borderRadius="16px"
      >
        <Flex justify="center">
          <Image
            src={logoImage}
            width="51px"
            height="51px"
            objectFit="contain"
            marginBottom="8px"
          />
        </Flex>
        <Heading
          color="#111111"
          fontSize="big2"
          fontWeight="medium"
          textAlign="center"
        >
          Welcome back
        </Heading>
        <Text
          color="gray.500"
          fontSize="small2"
          fontWeight="normal"
          textAlign="center"
        >
          Sign in to access your dashboard, tasks and clients.
        </Text>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputField
            register={register}
            errors={errors}
            label="Email"
            name="email"
            type="text"
          />
          <InputField
            register={register}
            errors={errors}
            label="Password"
            name="password"
            type="password"
          />
          <Flex justify="flex-end" marginTop="8px">
            <Link
              _hover={{ textUnderlineOffset: "unset" }}
              color="main.600"
              textDecoration="underline"
              fontSize="14px"
              fontWeight="500"
            >
              Forgot password?
            </Link>
          </Flex>
          <Button
            type="submit"
            width="100%"
            bg="#1A1A1B"
            color="#ffffff"
            borderRadius="16px"
            p="13px"
            marginTop="24px"
            fontSize="small2"
          >
            Log in
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
