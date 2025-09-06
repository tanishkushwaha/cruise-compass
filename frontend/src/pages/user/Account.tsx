import { Avatar, Container, Flex, Heading } from "@chakra-ui/react";
import FormInput from "../../components/FormInput";
import { useAuth } from "../../contexts/AuthContext";

const Account = () => {
  const auth = useAuth();

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>
        Account
      </Heading>
      <Flex direction='column' gap={4}>
        <Flex justifyContent='center'>
          <Avatar
            mb='2rem'
            size='2xl'
            name='Segun Adebayo'
            src='https://bit.ly/sage-adebayo'
          />
        </Flex>
        <Flex gap={4}>
          <FormInput
            label='First Name'
            name='firstName'
            type='text'
            value={auth.user?.firstName}
            disabled
          />
          <FormInput
            label='Last Name'
            name='lastName'
            type='text'
            value={auth.user?.lastName}
            disabled
          />
        </Flex>
        <FormInput
          label='Phone'
          name='phone'
          type='tel'
          value={auth.user?.phone}
          disabled
        />
        <FormInput
          label='Email'
          name='email'
          type='email'
          value={auth.user?.email}
          disabled
        />
      </Flex>
    </Container>
  );
};

export default Account;
