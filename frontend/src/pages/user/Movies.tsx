import { Container, Heading, SimpleGrid } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import MovieCard from "../../components/MovieCard"


const Movies = () => {

  type MovieType = {
    name: string,
    descr: string,
    imgUrl: string,
    price: string
  }

  const [data, setData] = useState<MovieType[]>([])

  // Add useEffect to fetch data
  useEffect(() => {
    // Dummy data
    setData([
      {
        name: 'Oppenheimer',
        descr: 'UA',
        imgUrl: 'https://m.media-amazon.com/images/I/81218n6JFgL._AC_UF1000,1000_QL80_DpWeblab_.jpg',
        price: 'English'
      },
      {
        name: 'Pepperoni Pizza',
        descr: 'Pizza topped with pepperoni slices.',
        imgUrl: 'https://image.tmdb.org/t/p/original/xrgBLpPMXWXKdyj5r36RVfmkRdb.jpg',
        price: '$6'
      },
      {
        name: 'Hawaiian Pizza',
        descr: 'Pizza topped with ham and pineapple.',
        imgUrl: 'https://m.media-amazon.com/images/I/81piTqX9IfL.jpg',
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
      <Heading mb='3rem' as='h1'>Movies</Heading>
      <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

        {data.map(item => (
          <MovieCard imgSrc={item.imgUrl} title={item.name} rating={item.descr} languages={item.price} />
        ))}

      </SimpleGrid>
    </Container >
  )
}

export default Movies