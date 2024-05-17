import { Button, Container, Heading, Select, Stack } from "@chakra-ui/react"
import FormInput from "../../components/FormInput"
import { useState } from "react"
import axios from "../../utils/axiosInstance"


const AddUser = () => {

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

  const handleChange = (e: any) => {
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

    if (!formValid) return

    // Send the data to the backend
    axios.post('/api/users', data, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Add User</Heading>
      <Stack direction='column' spacing='1.5rem'>
        <FormInput label='First Name' name='firstName' type="text" value={data.firstName} placeholder="Eg: Tanish" onChange={handleChange} error={inputErrors.firstName} />
        <FormInput label='Last Name' name='lastName' type="text" value={data.lastName} placeholder="Eg: Kushwaha" onChange={handleChange} error={inputErrors.lastName} />
        <FormInput label='Phone Number' name='phone' type="number" value={data.phone} placeholder="Eg: 9876543210" onChange={handleChange} error={inputErrors.phone} />
        <FormInput label='Email' name='email' type="email" value={data.email} placeholder="Eg: tanish@example.com" onChange={handleChange} error={inputErrors.email} />
        {/* <FormInput label='Role' name='role' type="text" value={data.role} placeholder="Eg: USER" onChange={handleChange} error={inputErrors.role} style={{ textTransform: "uppercase" }} /> */}

        <Select placeholder='Select Role'>
          <option value='USER'>User</option>
          <option value='MANAGER'>Manager</option>
          <option value='SUPERVISOR'>Supervisor</option>
          <option value='HEAD_COOK'>Head Cook</option>
          <option value='ADMIN'>Admin</option>
        </Select>

        <Button w='6rem' colorScheme='blue' onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Container>
  )
}

export default AddUser