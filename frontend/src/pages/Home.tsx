import { useState } from "react"
import { Container, Heading, Stack, Card, CardHeader, Box, Button, CardBody, CardFooter, SimpleGrid, Text } from '@chakra-ui/react'

const Home = () => {
  const [currentUser, setCurrentUser] = useState('Mdd')

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
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Voyager Details</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Add New Voyager</Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Manage Menu Items</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Catering</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Stationery</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Movies</Heading>
              </CardHeader>
            </Card>
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
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Movie Tickets</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Beauty Salon</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Fitness Center</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Party Hall</Heading>
              </CardHeader>
            </Card>
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
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Catering</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Stationery</Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Book a Service</Heading>
          <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Movies</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Beauty Salon</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Fitness Center</Heading>
              </CardHeader>
            </Card>
            <Card minH={100} style={{ cursor: 'pointer' }} _hover={{ boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
              <CardHeader>
                <Heading size='md'>Party Hall</Heading>
              </CardHeader>
            </Card>
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}

export default Home