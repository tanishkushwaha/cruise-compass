import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import UserOrderCard from "../../components/OrderItemCard"


const Food = () => {

  interface FoodType {
    name: string,
    descr: string,
    price: string
  }

  const [data, setData] = useState<FoodType[]>([])

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
      <Heading mb='3rem' as='h1'>Food</Heading>
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(dish => (
          <UserOrderCard imgSrc="https://www.greenchickchop.in/cdn/shop/files/RumaliRoti_result.webp?v=1682660083" title={dish.name} descr={dish.descr} price={dish.price} />
        ))}

      </SimpleGrid>
    </Container >
  )
}

export default Food