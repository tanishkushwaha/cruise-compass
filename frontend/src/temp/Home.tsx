import { useState } from "react"
import { Container, Heading, Stack, Box, SimpleGrid } from '@chakra-ui/react'
import DashboardCard from "../components/DashboardCard"

const Home = () => {
  const [currentUser, setCurrentUser] = useState('ADMIN')

  return (
    <>
      {currentUser === 'ADMIN' ? (
        <AdminHome />

      ) : currentUser === 'MANAGER' ? (
        <MangerHome />

      ) : (
        <VoyagerHome />

      )}
    </>
  )
}

const AdminHome = () => {

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Dashboard</Heading>
      <Stack direction='column' spacing='5rem'>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Manage Voyagers</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='Voyager Details' />
            <DashboardCard title='Add New Voyager' />
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Manage Menu Items</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='Catering' />
            <DashboardCard title='Stationery' />
            <DashboardCard title='Movies' />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

const MangerHome = () => {
  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Dashboard</Heading>
      <Stack direction='column' spacing='5rem'>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>View Bookings</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='Movie Tickets' />
            <DashboardCard title='Beauty Salon' />
            <DashboardCard title='Fitness Center' />
            <DashboardCard title='Party Hall' />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

const VoyagerHome = () => {
  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Cruise Compass</Heading>
      <Stack direction='column' spacing='5rem'>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Order Items</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='Catering' />
            <DashboardCard title='Stationery' />
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Book a Service</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <DashboardCard title='Movies' />
            <DashboardCard title='Beauty Salon' />
            <DashboardCard title='Fitness Center' />
            <DashboardCard title='Party Hall' />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home