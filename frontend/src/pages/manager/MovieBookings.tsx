import { Container, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react"


const MovieBookings = () => {
  type dataType = {
    customerName: string,
    movie: string,
    date: string,
    timings: string,
    seat: string
  }

  const [data, setData] = useState<dataType[]>([{
    customerName: '',
    movie: '',
    date: '',
    timings: '',
    seat: ''
  }])

  useEffect(() => {

    // Fetch data

    setData([{
      customerName: 'John Doe',
      movie: 'Interstellar',
      date: '14 May \'24',
      timings: '6:30pm',
      seat: '11C'
    }])
  }, [])

  let counter = 1

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Movie Bookings</Heading>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>S. No.</Th>
              <Th>Customer</Th>
              <Th>Movie</Th>
              <Th>Date</Th>
              <Th>Timings</Th>
              <Th>Seat</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => (
              <Tr>
                <Td>{counter++}</Td>
                <Td>{item.customerName}</Td>
                <Td>{item.movie}</Td>
                <Td>{item.date}</Td>
                <Td>{item.timings}</Td>
                <Td>{item.seat}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default MovieBookings