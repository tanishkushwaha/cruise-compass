import { Container, Heading, Stack, SimpleGrid, Box } from "@chakra-ui/react"
import DashboardCard from "../components/MenuItemCard"


const ManageStationery = () => {
  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Manage Stationery</Heading>
      <Stack direction='column' spacing='5rem'>
        <Box>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='View Items' />
            <DashboardCard title='Add New Item' />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

export default ManageStationery