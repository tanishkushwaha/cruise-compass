import { Button, Container, Heading, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import FormInput from "../../components/FormInput"
import { useState } from "react"

const ViewUser = () => {
  const [data, setData] = useState({
    id: ''
  })

  const [userDetails, setUserDetails] = useState({
    id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: ''
  })

  const [inputError, setInputError] = useState(false)

  const handleChange = (e: any) => {
    setInputError(false)
    setData({
      id: e.target.value
    })
  }

  const handleSubmit = () => {
    if (!data.id) {
      setInputError(true)
      return
    }

    // Send the ID to the backend an get the data

    console.log(data);

    const userData = {
      "id": "123456789",
      "firstName": "John",
      "lastName": "Doe",
      "phone": "123-456-7890",
      "email": "john.doe@example.com"
    }


    setUserDetails(userData)

  }

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>View User</Heading>
      <Stack direction='column' spacing='1.5rem' mb='3rem'>
        <FormInput label='Voyager ID' name='id' value={data.id} onChange={handleChange} error={inputError} errorMessage='Invalid ID' />
        <Button w='6rem' colorScheme='blue' onClick={handleSubmit}>Submit</Button>
      </Stack>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{userDetails.id}</Td>
              <Td>{userDetails.firstName}</Td>
              <Td>{userDetails.lastName}</Td>
              <Td>{userDetails.phone}</Td>
              <Td>{userDetails.email}</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ViewUser