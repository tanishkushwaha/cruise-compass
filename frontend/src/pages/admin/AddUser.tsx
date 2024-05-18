import { Button, Container, Heading, Stack, useToast } from "@chakra-ui/react"
import FormInput from "../../components/FormInput"
import { useState } from "react"
import axios from "../../utils/axiosInstance"
import FormSelectRole from "../../components/FormSelectRole"


const AddUser = () => {

  const toast = useToast()

  type Data = {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    role: string;
  }

  const [data, setData] = useState<Data>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: ''
  })

  const [inputErrors, setInputErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false,
    role: false
  })

  const handleInputChange = (e: any) => {
    setInputErrors({
      firstName: false,
      lastName: false,
      phone: false,
      email: false,
      role: false
    })

    const { name, value } = e.target

    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSelectChange = (e: any) => {
    setInputErrors(prevStates => ({
      ...prevStates,
      role: false
    }))
    setData(prevData => ({
      ...prevData,
      role: e.target.value
    }))
  }

  const handleSubmit = () => {

    let formValid = true

    for (const field in data) {
      if (!data[field as keyof Data]) {
        setInputErrors(prevStates => ({
          ...prevStates,
          [field]: true
        }))

        formValid = false
      }
    }

    if (!data.role) {
      setInputErrors(prevStates => ({
        ...prevStates,
        role: true
      }))
      formValid = false
    }

    if (!formValid) return

    // Send the data to the backend
    axios.post('/api/users', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {

        toast({
          title: 'Account created successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })

        console.log(res.data)
        setData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          role: ''
        })
      })
      .catch(err => {

        if (err.response.status === 400) {
          toast({
            title: 'Email already exists!',
            status: 'error',
            duration: 5000,
            isClosable: true,
            position: 'top-right'
          })
          return
        }

        toast({
          title: 'Some error occured',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })

        console.log(err)
      })
  }

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Add User</Heading>
      <Stack direction='column' spacing='1.5rem'>
        <FormInput label='First Name' name='firstName' type="text" value={data.firstName} placeholder="Eg: Tanish" onChange={handleInputChange} error={inputErrors.firstName} />
        <FormInput label='Last Name' name='lastName' type="text" value={data.lastName} placeholder="Eg: Kushwaha" onChange={handleInputChange} error={inputErrors.lastName} />
        <FormInput label='Phone Number' name='phone' type="number" value={data.phone} placeholder="Eg: 9876543210" onChange={handleInputChange} error={inputErrors.phone} />
        <FormInput label='Email' name='email' type="email" value={data.email} placeholder="Eg: tanish@example.com" onChange={handleInputChange} error={inputErrors.email} />
        {/* <FormInput label='Role' name='role' type="text" value={data.role} placeholder="Eg: USER" onChange={handleInputChange} error={inputErrors.role} style={{ textTransform: "uppercase" }} /> */}

        <FormSelectRole onChange={handleSelectChange} error={inputErrors.role} />

        <Button w='6rem' colorScheme='blue' onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Container>
  )
}

export default AddUser