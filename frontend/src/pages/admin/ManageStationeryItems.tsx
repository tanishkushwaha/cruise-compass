import { Container, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import ManageStationeryItemCard from "../../components/ManageStationeryItemCard"
import FloatingAddButton from '../../components/FloatingAddButton'
import AddStationeryItemModal from "../../components/AddStationeryItemModal"
import { useEffect, useState } from "react"


const ManageStationeryItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  type PropsType = {
    name: string,
    descr: string,
    price: string
  }

  const [data, setData] = useState<PropsType[]>([])

  // Add useEffect to fetch data
  useEffect(() => {
    // Dummy data
    setData([
      {
        name: 'Book',
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
      <Heading mb='3rem' as='h1'>Manage Stationery</Heading>
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(item => (
          <ManageStationeryItemCard imgSrc="https://www.greenchickchop.in/cdn/shop/files/RumaliRoti_result.webp?v=1682660083" title={item.name} descr={item.descr} price={item.price} />
        ))}

      </SimpleGrid>
      <AddStationeryItemModal isOpen={isOpen} onClose={onClose} />
      <FloatingAddButton onClick={onOpen} />
    </Container >
  )
}

export default ManageStationeryItems