import { Container, Heading, SimpleGrid, useDisclosure } from "@chakra-ui/react"
import ManageMovieItemCard from "../../components/ManageMovieItemCard"
import FloatingAddButton from '../../components/FloatingAddButton'
import AddMovieModal from "../../components/AddMovieModal"
import { useEffect, useState } from "react"


const ManageMovieItems = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  type DataType = {
    name: string,
    language: string,
    rating: string
  }

  const [data, setData] = useState<DataType[]>([])

  // Add useEffect to fetch data
  useEffect(() => {
    // Dummy data
    setData([
      {
        name: 'Oppenheimer',
        language: 'Pizza loaded with cheese.',
        rating: '$5'
      },
      {
        name: 'Pepperoni Pizza',
        language: 'Pizza topped with pepperoni slices.',
        rating: '$6'
      },
      {
        name: 'Hawaiian Pizza',
        language: 'Pizza topped with ham and pineapple.',
        rating: '$8'
      },
      {
        name: 'Veggie Supreme Pizza',
        language: 'Pizza loaded with assorted vegetables.',
        rating: '$8'
      }
    ])
  }, [])



  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Manage Movies</Heading>
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(item => (
          <ManageMovieItemCard imgSrc="https://www.greenchickchop.in/cdn/shop/files/RumaliRoti_result.webp?v=1682660083" title={item.name} languages={item.language} rating={item.rating} />
        ))}

      </SimpleGrid>
      <AddMovieModal isOpen={isOpen} onClose={onClose} />
      <FloatingAddButton onClick={onOpen} />
    </Container >
  )
}

export default ManageMovieItems