import { Container, Heading, SimpleGrid, Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import UserOrderCard from "../../components/OrderItemCard"
import SpinnerScreen from "../../components/SpinnerScreen"
import axios from "../../utils/axiosInstance"


const Food = () => {

  type FoodType = {
    _id: string,
    name: string,
    description: string,
    price: string,
    imgURL: string
  }

  const [data, setData] = useState<FoodType[]>([])
  const [loading, setLoading] = useState(true)

  // Add useEffect to fetch data
  useEffect(() => {
    axios.get('/api/foods')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
      })

  }, [])

  if (loading) {
    return <SpinnerScreen />
  }

  return (
    <Container maxW='5xl' p='5rem' h='90%'>
      <Heading mb='3rem' as='h1'>Food</Heading>

      {(data.length === 0) ? (
        <Flex justifyContent='center' alignItems='center' h='100%'>
          <Heading as='h2' color='gray.500'>No items</Heading>
        </Flex>
      ) : (
        <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

          {data.map(item => (
            <UserOrderCard key={item._id} imgSrc={item.imgURL} title={item.name} description={item.description} price={item.price} />
          ))}

        </SimpleGrid>
      )}


    </Container >
  )
}

export default Food