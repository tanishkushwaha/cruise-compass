import { Container, Heading, Stack, Box, SimpleGrid } from '@chakra-ui/react'
import MenuItemCard from "../../components/MenuItemCard"
import { useNavigate } from "react-router-dom"

const AdminDashboard = () => {
  const navigate = useNavigate()

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Dashboard</Heading>
      <Stack direction='column' spacing='5rem'>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Users</Heading>
          <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <MenuItemCard title='Add User' onClick={() => navigate('/admin/users/add')} />
            <MenuItemCard title='View User Details' onClick={() => navigate('/admin/users/view')} />
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Manage Items</Heading>
          <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <MenuItemCard title='Movies' onClick={() => navigate('/admin/movies')} />
            <MenuItemCard title='Food' onClick={() => navigate('/admin/catering/food')} />
            <MenuItemCard title='Snacks' onClick={() => navigate('/admin/catering/snacks')} />
            <MenuItemCard title='Beverages' onClick={() => navigate('/admin/catering/beverages')} />
            <MenuItemCard title='Stationery' onClick={() => navigate('/admin/stationery')} />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

export default AdminDashboard