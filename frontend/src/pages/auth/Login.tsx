import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Button,
  useToast,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import CruiseImage from "../../assets/login.jpg";
import FormInput from "../../components/FormInput";
import { Link, Navigate } from "react-router";
import { useAuth } from "../../contexts/AuthContext";
import SpinnerScreen from "../../components/SpinnerScreen";

const Login = () => {
  const auth = useAuth();
  if (auth.loggedIn) return <Navigate to='/' replace />;

  const toast = useToast();

  // State for storing the form data
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  // State for storing the error status for form validation
  const [errors, setErrors] = useState({ email: false, password: false });

  const handleChange = (e: any) => {
    setErrors({ email: false, password: false });

    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = async () => {
    let invalidForm = false;

    // ID validaton
    if (!data.email) {
      setErrors((prevData) => ({ ...prevData, email: true }));
      invalidForm = true;
    }

    // Password validation
    if (!data.password) {
      setErrors((prevData) => ({ ...prevData, password: true }));
      invalidForm = true;
    }

    if (invalidForm) return;

    // Login
    const error = await auth.login(data.email, data.password);

    if (error === "InvalidCredentials") {
      toast({
        title: "Invalid e-mail or password.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else if (error === "ServerIssue") {
      toast({
        title: "Cannot reach the server.",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    } else {
      toast({
        title: "User logged in successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top-right",
      });
    }
  };

  if (auth.loading) return <SpinnerScreen />;

  return (
    <>
      <Flex justifyContent='center' alignItems='center' h='100vh'>
        <Box
          w='50rem'
          h='25rem'
          boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        >
          <Grid templateColumns='repeat(12, 1fr)'>
            <GridItem colSpan={{ base: 0, md: 6 }}>
              <Image
                display={{ base: "none", md: "block" }}
                src={CruiseImage}
                alt='cruise-image'
              />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }} p='2rem'>
              <Heading mb='1.5rem'>Log in</Heading>
              <Flex direction='column' gap={4}>
                <FormInput
                  label='Email'
                  name='email'
                  type='text'
                  value={data.email}
                  onChange={handleChange}
                  error={errors.email}
                />
                <FormInput
                  label='Password'
                  name='password'
                  type='password'
                  value={data.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <Button
                  w='6rem'
                  mt='0.5rem'
                  colorScheme='blue'
                  onClick={submitForm}
                >
                  Submit
                </Button>
                <Flex justifyContent='end'>
                  <Link to='/register'>
                    <Text as='u' color='blue.800'>
                      Don't have account?
                    </Text>
                  </Link>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Flex>
    </>
  );
};

export default Login;
