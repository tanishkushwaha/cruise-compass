import { Container, Heading, Stack, Box, SimpleGrid } from '@chakra-ui/react'
import MenuItemCard from "../../components/MenuItemCard"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Home</Heading>
      <Stack direction='column' spacing='5rem'>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Order</Heading>
          <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <MenuItemCard title='Catering' onClick={() => navigate('/order/catering')} />
            <MenuItemCard title='Stationery' onClick={() => navigate('/order/stationery')} />
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg'>Book</Heading>
          <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <MenuItemCard title='Movies' onClick={() => navigate('/book/movies')} />
            <MenuItemCard title='Beauty Salon' onClick={() => navigate('/book/beauty-salon')} />
            <MenuItemCard title='Fitness Center' onClick={() => navigate('/book/fitness-centre')} />
            <MenuItemCard title='Party Hall' onClick={() => navigate('/book/party-hall')} />
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  )
}


export default Home