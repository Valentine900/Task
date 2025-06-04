import { useNavigate } from "react-router"; 
import { Box, Text, Input, Field, Button, Link, Heading, Image, Flex} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import logoImage from '@/assets/Logo.svg';


function Login() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;

    if (email === "admin" && password === "admin") {
      localStorage.setItem("isAuthenticated", "true"); 
      navigate("/");
    } else {
      alert("Incorrect login or password");
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Box align="center" width="500px" padding="20px" boxShadow="0px 8px 40px 0px #00000014" borderRadius="16px">
          <Flex justify="center" >
          <Image src={logoImage} width="51px" height="51px" objectFit="contain" marginBottom="8px"/>
          </Flex>
          <Heading color="#111111" fontSize="28px" fontWeight="500" textAlign="center">
            Welcome back
          </Heading>
          <Text color="#71717A" fontSize="16px" fontWeight="400" textAlign="center">
            Sign in to access you dashboard, tasks and clients.
          </Text>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Field.Root invalid={errors.email}>
              <Field.Label color="#71717A" marginTop="24px">Email</Field.Label>
              <Input 
                bg="#F6F7FA" 
                borderRadius="8px" 
                p="12px" 
                border="none" 
                fontSize="14px"
                {...register("email", { required: "Required field" })} 
              />
              <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
            </Field.Root>

            <Field.Root invalid={errors.password}>
              <Field.Label color="#71717A" marginTop="24px">Password</Field.Label>
              <Input 
                bg="#F6F7FA" 
                borderRadius="8px" 
                p="12px" 
                border="none" 
                fontSize="14px"
                {...register("password", { required: "Required field" })} 
              />
              <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
              <Link
                _hover={{
                  textUnderlineOffset: "unset",
                }
                }
                color="#4C6BB5"
                marginLeft="auto"
                marginTop="8px"
                textDecoration="underline" 
                fontSize="14px" 
                fontWeight="500"
                >
                Forgot password?
              </Link> 
            </Field.Root>
            
            <Button 
              type="submit" 
              width="100%" 
              bg="#1A1A1B" 
              color="#ffffff" 
              borderRadius="16px" 
              p="13px"
              marginTop="24px"
            >
              Log in
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
}

export default Login;