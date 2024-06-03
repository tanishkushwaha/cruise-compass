import { Box, Flex, Grid, GridItem, Heading, Image, Button, useToast, Text } from '@chakra-ui/react'
import { useState } from 'react'
import CruiseImage from '../../assets/login.jpg'
import FormInput from '../../components/FormInput'
import axios from '../../utils/axiosInstance'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const toast = useToast()
  const navigate = useNavigate()

  // State for storing the form data
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  // State for storing the error status for form validation
  const [errors, setErrors] = useState({ email: false, password: false })

  const handleChange = (e: any) => {
    setErrors({ email: false, password: false })

    setData((prevData) => (
      {
        ...prevData,
        [e.target.name]: e.target.value
      }
    ))
  }

  const submitForm = () => {

    let invalidForm = false

    // ID validaton
    if (!data.email) {
      setErrors(prevData => ({ ...prevData, email: true }))
      invalidForm = true
    }

    // Password validation
    if (!data.password) {
      setErrors(prevData => ({ ...prevData, password: true }))
      invalidForm = true
    }

    if (invalidForm) return

    console.log(data);


    // Send the data to the backend and get the auth token
    axios.post('/api/login', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(() => {
        toast({
          title: 'User logged in successfully.',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
        navigate('/')
      })
      .catch(err => {
        console.log(err)
        toast({
          title: 'Invalid Credentials',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      });
  }

  return (
    <>
      <Flex justifyContent='center' alignItems='center' h='100vh'>
        <Box w='50rem' h='25rem' boxShadow='0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'>
          <Grid templateColumns='repeat(12, 1fr)'>
            <GridItem colSpan={{ base: 0, md: 6 }}>
              <Image display={{ base: 'none', md: 'block' }} src={CruiseImage} alt='cruise-image' />
            </GridItem>
            <GridItem colSpan={{ base: 12, md: 6 }} p='2rem'>
              <Heading mb='1.5rem'>Log in</Heading>
              <Flex direction='column' gap={4}>
                <FormInput label='Email' name='email' type='text' value={data.email} onChange={handleChange} error={errors.email} />
                <FormInput label='Password' name='password' type='password' value={data.password} onChange={handleChange} error={errors.password} />
                <Button w='6rem' mt='0.5rem' colorScheme='blue' onClick={submitForm}>Submit</Button>
                <Flex justifyContent='end'>
                  <Link to='/register'><Text as='u' color='blue.800'>Don't have account?</Text></Link>
                </Flex>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Flex >
    </>
  )
}

export default Login