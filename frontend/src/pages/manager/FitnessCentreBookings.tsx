import { Container, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react"


const FitnessCentreBookings = () => {
  type dataType = {
    customerName: string,
    date: string,
    timings: string,
  }

  const [data, setData] = useState<dataType[]>([{
    customerName: '',
    date: '',
    timings: '',
  }])

  useEffect(() => {

    // Fetch data

    setData([{
      customerName: 'John Doe',
      date: '14 May \'24',
      timings: '6:30pm',
    }])
  }, [])

  let counter = 1

  return (
    <Container maxW='5xl' p='5rem' letterSpacing={1}>
      <Heading mb='3rem' as='h1'>Fitness Centre Bookings</Heading>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>S. No.</Th>
              <Th>Customer</Th>
              <Th>Date</Th>
              <Th>Timings</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => (
              <Tr>
                <Td>{counter++}</Td>
                <Td>{item.customerName}</Td>
                <Td>{item.date}</Td>
                <Td>{item.timings}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default FitnessCentreBookings