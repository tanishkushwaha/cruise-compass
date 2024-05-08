import { Container, Heading, Stack, SimpleGrid, Box } from "@chakra-ui/react"
import DashboardCard from "../components/DashboardCard"


const Catering = () => {
  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Manage Catering</Heading>
      <Stack direction='column' spacing='5rem'>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Food</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='View Dishes' />
            <DashboardCard title='Add New Dish' />
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Snacks</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='View Items' />
            <DashboardCard title='Add New Item' />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

export default Catering