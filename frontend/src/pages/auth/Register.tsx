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
import axios from "../../utils/axiosInstance";
import { Link, useNavigate } from "react-router";

const Register = () => {
  const toast = useToast();
  const navigate = useNavigate();

  // State for storing the form data
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "",
  });

  // State for storing the error status for form validation
  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    password: false,
  });

  const handleChange = (e: any) => {
    setErrors({
      firstName: false,
      lastName: false,
      phone: false,
      email: false,
      password: false,
    });

    setData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const submitForm = () => {
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

    console.log(data);

    // Send the data to the backend and get the auth token
    axios
      .post("/api/users", data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        toast({
          title: "Registeration successful.",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "top-right",
        });
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 409) {
          toast({
            title: "Email already exists",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        } else {
          toast({
            title: "Some error occured",
            status: "error",
            duration: 5000,
            isClosable: true,
            position: "top-right",
          });
        }
      });
  };

  return (
    <>
      <Flex justifyContent='center' alignItems='center' h='100vh'>
        <Box
          w='70rem'
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
              <Heading letterSpacing={1} mb='3rem'>
                Register
              </Heading>
              <Flex direction='column' gap={4}>
                <Flex gap={4}>
                  <FormInput
                    label='First Name'
                    name='firstName'
                    type='text'
                    value={data.firstName}
                    onChange={handleChange}
                    error={errors.firstName}
                  />
                  <FormInput
                    label='Last Name'
                    name='lastName'
                    type='text'
                    value={data.lastName}
                    onChange={handleChange}
                    error={errors.lastName}
                  />
                </Flex>
                <FormInput
                  label='Phone'
                  name='phone'
                  type='tel'
                  value={data.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
                <FormInput
                  label='Email'
                  name='email'
                  type='email'
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
                  letterSpacing={1}
                  onClick={submitForm}
                >
                  Submit
                </Button>
                <Flex justifyContent='end'>
                  <Link to='/login'>
                    <Text as='u' color='blue.800'>
                      Already have an account?
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

export default Register;
