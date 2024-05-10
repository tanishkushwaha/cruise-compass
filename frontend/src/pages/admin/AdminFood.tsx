import { Container, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import ItemCard from "../../components/AdminFoodCard"
import FloatingAddButton from '../../components/FloatingAddButton'
import AddDishModal from "../../components/AddDishModal"
import { useEffect, useState } from "react"


const Dishes = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  interface DishType {
    name: string,
    descr: string,
    price: string
  }

  const [data, setData] = useState<DishType[]>([])

  // Add useEffect to fetch data
  useEffect(() => {
    // Dummy data
    setData([
      {
        name: 'Cheese Pizza',
        descr: 'Pizza loaded with cheese.',
        price: '$5'
      },
      {
        name: 'Pepperoni Pizza',
        descr: 'Pizza topped with pepperoni slices.',
        price: '$6'
      },
      {
        name: 'Hawaiian Pizza',
        descr: 'Pizza topped with ham and pineapple.',
        price: '$8'
      },
      {
        name: 'Veggie Supreme Pizza',
        descr: 'Pizza loaded with assorted vegetables.',
        price: '$8'
      }
    ])
  }, [])



  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Dishes</Heading>
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(dish => (
          <ItemCard imgSrc="https://www.greenchickchop.in/cdn/shop/files/RumaliRoti_result.webp?v=1682660083" title={dish.name} descr={dish.descr} price={dish.price} />
        ))}

      </SimpleGrid>
      <AddDishModal isOpen={isOpen} onClose={onClose} />
      <FloatingAddButton onClick={onOpen} />
    </Container >
  )
}

export default Dishes