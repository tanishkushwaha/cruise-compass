import { Box, Flex, Grid, GridItem, Heading, Image, Button } from '@chakra-ui/react'
// import axiosInstance from '../../utils/axiosInstance'
import { useState } from 'react'
import CruiseImage from '../../assets/login.jpg'
import FormInput from '../../components/FormInput'

const Login = () => {

  // State for storing the form data
  const [data, setData] = useState({
    id: '',
    password: ''
  })

  // State for storing the error status for form validation
  const [errors, setErrors] = useState({ id: false, password: false })

  const handleChange = (e: any) => {
    setErrors({ id: false, password: false })

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
    if (!data.id) {
      setErrors(prevData => ({ ...prevData, id: true }))
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
    // axios.post('/login', data, {
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then(res => {
    //     if (res.status === 200) {
    //       console.log('User logged in successfully')

    //     }
    //   })
    //   .catch(err => console.log(err));
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
              <Heading letterSpacing={1} mb='1.5rem'>Log in</Heading>
              <Flex direction='column' gap={4}>
                <FormInput label='Enter ID' name='id' type='text' value={data.id} onChange={handleChange} error={errors.id} />
                <FormInput label='Password' name='password' type='password' value={data.password} onChange={handleChange} error={errors.password} />
                <Button w='6rem' mt='0.5rem' colorScheme='blue' letterSpacing={1} onClick={submitForm}>Submit</Button>
              </Flex>
            </GridItem>
          </Grid>
        </Box>
      </Flex >
    </>
  )
}

export default Login