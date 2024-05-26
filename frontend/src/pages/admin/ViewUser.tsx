import { Button, Container, Flex, Heading, IconButton, Stack, Table, TableContainer, Tbody, Td, Th, Thead, Tr, useToast } from "@chakra-ui/react"
import FormInput from "../../components/FormInput"
import { useState } from "react"
import axios from "../../utils/axiosInstance"
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";


const ViewUser = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [user, setUser] = useState({
    _id: '',
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    role: ''
  })

  const [inputError, setInputError] = useState(false)

  const handleChange = (e: any) => {
    setInputError(false)
    setEmail(e.target.value)
  }

  const handleSubmit = () => {
    if (!email) {
      setInputError(true)
      return
    }

    // Get user data from the backend

    axios.get(`/api/users/email/${email}`)
      .then(res => {
        setUser(res.data)
        console.log('Response:', res.data)
      })
      .catch(err => {
        console.log(err);
        toast({
          title: 'User not found',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      })
  }

  const handleEditButton = () => {
    console.log('User:', user)
    navigate(`/admin/users/edit/${user._id}`)
  }

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>View User</Heading>
      <Stack direction='column' spacing='1.5rem' mb='3rem'>
        <FormInput label='Email' name='id' value={email} onChange={handleChange} error={inputError} errorMessage='Invalid ID' />
        <Button w='6rem' colorScheme='blue' onClick={handleSubmit}>Submit</Button>
      </Stack>
      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.phone}</Td>
              <Td>{user.email}</Td>
              <Td>{user.role}</Td>
              <Td>
                {user.firstName && <Flex gap={4}>
                  <IconButton aria-label="editUser" icon={<MdEdit />} onClick={handleEditButton} />
                  <IconButton aria-label="deleteUser" icon={<MdDelete />} />
                </Flex>}
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default ViewUser