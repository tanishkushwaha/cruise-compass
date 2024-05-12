import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import MenuItemCard from "../../components/MenuItemCard"
import { useNavigate } from "react-router-dom"


const Catering = () => {
  const navigate = useNavigate()

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Catering</Heading>
      <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <MenuItemCard title='Food' onClick={() => { navigate('/order/catering/food') }} />
        <MenuItemCard title='Snacks' onClick={() => { navigate('/order/catering/snacks') }} />
        <MenuItemCard title='Beverages' onClick={() => { navigate('/order/catering/beverages') }} />
      </SimpleGrid>
    </Container>
  )
}

export default Catering