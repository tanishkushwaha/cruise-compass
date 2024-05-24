import { Container, Heading, Icon, SimpleGrid } from "@chakra-ui/react"
import MenuItemCard from "../../components/MenuItemCard"
import { useNavigate } from "react-router-dom"
import { FaBowlFood } from "react-icons/fa6"
import { GiChocolateBar } from "react-icons/gi"
import { RiDrinks2Fill } from "react-icons/ri"


const Catering = () => {
  const navigate = useNavigate()

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Catering</Heading>
      <SimpleGrid spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
        <MenuItemCard title='Food' icon={<Icon as={FaBowlFood} color='white' />} onClick={() => { navigate('/order/catering/food') }} />
        <MenuItemCard title='Snacks' icon={<Icon as={GiChocolateBar} color='white' />} onClick={() => { navigate('/order/catering/snacks') }} />
        <MenuItemCard title='Beverages' icon={<Icon as={RiDrinks2Fill} color='white' />} onClick={() => { navigate('/order/catering/beverages') }} />
      </SimpleGrid>
    </Container>
  )
}

export default Catering