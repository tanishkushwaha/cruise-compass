import { Container, Flex, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import ItemCard from "../../components/ManageFoodItemCard"
import FloatingAddButton from '../../components/FloatingAddButton'
import AddFoodModal from "../../components/AddFoodModal"
import { useEffect, useState } from "react"
import axios from "../../utils/axiosInstance"


const ManageFoodItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  type PropsType = {
    _id: string,
    name: string,
    description: string,
    price: string,
    imgURL: string
  }

  const [data, setData] = useState<PropsType[]>([])

  // Add useEffect to fetch data
  useEffect(() => {
    // Dummy data
    // setData([
    //   {
    //     name: 'Cheese Pizza',
    //     descr: 'Pizza loaded with cheese.',
    //     price: '$5'
    //   },
    //   {
    //     name: 'Pepperoni Pizza',
    //     descr: 'Pizza topped with pepperoni slices.',
    //     price: '$6'
    //   },
    //   {
    //     name: 'Hawaiian Pizza',
    //     descr: 'Pizza topped with ham and pineapple.',
    //     price: '$8'
    //   },
    //   {
    //     name: 'Veggie Supreme Pizza',
    //     descr: 'Pizza loaded with assorted vegetables.',
    //     price: '$8'
    //   }
    // ])

    axios.get('/api/foods')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <Container h='90%' maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Manage Food</Heading>
      {(data.length === 0) && (
        <Flex justifyContent='center' alignItems='center' h='100%'>
          <Heading as='h2' color='gray.500'>No items</Heading>
        </Flex>
      )}
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(item => (
          <ItemCard key={item._id} imgSrc={item.imgURL} title={item.name} descr={item.description} price={`₹${item.price}`} />
        ))}

      </SimpleGrid>
      <AddFoodModal isOpen={isOpen} onClose={onClose} />
      <FloatingAddButton onClick={onOpen} />
    </Container >
  )
}

export default ManageFoodItems
