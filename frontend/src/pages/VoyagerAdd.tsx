import { Button, Container, Heading, Stack } from "@chakra-ui/react"
import FormTextField from "../components/FormInput"
import { useState } from "react"


const VoyagerAdd = () => {

  interface FormData {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
  }

  const [data, setData] = useState<FormData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })

  const [inputErrors, setInputErrors] = useState({
    firstName: false,
    lastName: false,
    phone: false,
    email: false
  })

  const handleChange = (e: any) => {
    setInputErrors({
      firstName: false,
      lastName: false,
      phone: false,
      email: false
    })

    const { name, value } = e.target

    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = () => {

    let formValid = true

    for (const field in data) {
      if (!data[field as keyof FormData]) {
        setInputErrors(prevStates => ({
          ...prevStates,
          [field]: true
        }))

        formValid = false
      }
    }

    if (!formValid) return

    // Send the data to the backend

    console.log(data);

  }

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Add New Voyager</Heading>
      <Stack direction='column' spacing='1.5rem'>
        <FormTextField label='First Name' name='firstName' type="text" value={data.firstName} placeholder="Eg: Tanish" onChange={handleChange} error={inputErrors.firstName} />
        <FormTextField label='Last Name' name='lastName' type="text" value={data.lastName} placeholder="Eg: Kushwaha" onChange={handleChange} error={inputErrors.lastName} />
        <FormTextField label='Phone Number' name='phone' type="number" value={data.phone} placeholder="Eg: 9876543210" onChange={handleChange} error={inputErrors.phone} />
        <FormTextField label='Email' name='email' type="email" value={data.email} placeholder="Eg: tanish@example.com" onChange={handleChange} error={inputErrors.email} />
        <Button colorScheme='blue' onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Container>
  )
}

export default VoyagerAdd