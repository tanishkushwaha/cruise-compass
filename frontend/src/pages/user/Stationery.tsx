import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import UserOrderCard from "../../components/UserOrderCard"


const Stationery = () => {

  interface StationeryType {
    name: string,
    descr: string,
    imgUrl: string,
    price: string
  }

  const [data, setData] = useState<StationeryType[]>([])

  // Add useEffect to fetch data
  useEffect(() => {
    // Dummy data
    setData([
      {
        name: 'Cheese Pizza',
        descr: 'Pizza loaded with cheese.',
        imgUrl: 'https://inkprint.in/wp-content/uploads/2023/09/notebook-printing.png',
        price: '$5'
      },
      {
        name: 'Pepperoni Pizza',
        descr: 'Pizza topped with pepperoni slices.',
        imgUrl: 'https://inkprint.in/wp-content/uploads/2023/09/notebook-printing.png',
        price: '$6'
      },
      {
        name: 'Hawaiian Pizza',
        descr: 'Pizza topped with ham and pineapple.',
        imgUrl: 'https://inkprint.in/wp-content/uploads/2023/09/notebook-printing.png',
        price: '$8'
      },
      {
        name: 'Veggie Supreme Pizza',
        descr: 'Pizza loaded with assorted vegetables.',
        imgUrl: 'https://inkprint.in/wp-content/uploads/2023/09/notebook-printing.png',
        price: '$8'
      }
    ])
  }, [])



  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Stationery</Heading>
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(item => (
          <UserOrderCard imgSrc={item.imgUrl} title={item.name} descr={item.descr} price={item.price} />
        ))}

      </SimpleGrid>
    </Container >
  )
}

export default Stationery