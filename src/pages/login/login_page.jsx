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
import logoForLogin from "@/assets/Logo for login.svg";
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
        padding="big"
        boxShadow="variant_b"
        borderRadius="big"
      >
        <Flex justify="center">
          <Image
            src={logoForLogin}
            width="51px"
            height="51px"
            objectFit="contain"
            marginBottom="small"
          />
        </Flex>
        <Heading
          color="another.bl"
          fontSize="big2"
          fontWeight="medium"
          textAlign="center"
          fontFamily="main"
        >
          Welcome back
        </Heading>
        <Text
          color="gray.500"
          fontSize="small2"
          fontWeight="normal"
          textAlign="center"
          fontFamily="main"
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
          <Flex justify="flex-end" marginTop="small">
            <Link
              _hover={{ textUnderlineOffset: "unset" }}
              color="main.600"
              textDecoration="underline"
              fontSize="small"
              fontWeight="medium"
              fontFamily="main"
            >
              Forgot password?
            </Link>
          </Flex>
          <Button
            type="submit"
            width="100%"
            bg="another.btn_log_in"
            color="another.bg"
            borderRadius="big"
            p="medium2"
            mt="big2"
            fontSize="small2"
            fontFamily="main"
          >
            Log in
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default Login;
