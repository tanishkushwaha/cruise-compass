import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import UserOrderCard from "../../components/OrderItemCard"


const Snacks = () => {

  interface SnackType {
    name: string,
    descr: string,
    imgUrl: string,
    price: string
  }

  const [data, setData] = useState<SnackType[]>([])

  // Add useEffect to fetch data
  useEffect(() => {
    // Dummy data
    setData([
      {
        name: 'Cheese Pizza',
        descr: 'Pizza loaded with cheese.',
        imgUrl: 'https://images.ctfassets.net/6jpeaipefazr/7pAssrDIiauLbPpBRuxxRf/5a4f533fa9cbd16c4f3c386849fbb07f/P14-5000328462622.jpg?w=1080&h=1080',
        price: '$5'
      },
      {
        name: 'Pepperoni Pizza',
        descr: 'Pizza topped with pepperoni slices.',
        imgUrl: 'https://images.ctfassets.net/6jpeaipefazr/7pAssrDIiauLbPpBRuxxRf/5a4f533fa9cbd16c4f3c386849fbb07f/P14-5000328462622.jpg?w=1080&h=1080',
        price: '$6'
      },
      {
        name: 'Hawaiian Pizza',
        descr: 'Pizza topped with ham and pineapple.',
        imgUrl: 'https://images.ctfassets.net/6jpeaipefazr/7pAssrDIiauLbPpBRuxxRf/5a4f533fa9cbd16c4f3c386849fbb07f/P14-5000328462622.jpg?w=1080&h=1080',
        price: '$8'
      },
      {
        name: 'Veggie Supreme Pizza',
        descr: 'Pizza loaded with assorted vegetables.',
        imgUrl: 'https://images.ctfassets.net/6jpeaipefazr/7pAssrDIiauLbPpBRuxxRf/5a4f533fa9cbd16c4f3c386849fbb07f/P14-5000328462622.jpg?w=1080&h=1080',
        price: '$8'
      }
    ])
  }, [])



  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Snacks</Heading>
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(snack => (
          <UserOrderCard imgSrc={snack.imgUrl} title={snack.name} descr={snack.descr} price={snack.price} />
        ))}

      </SimpleGrid>
    </Container >
  )
}

export default Snacks