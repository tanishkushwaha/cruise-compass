import { Container, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react"


const PartyHallBookings = () => {
  type dataType = {
    customerName: string,
    hallType: string,
    occasion: string,
    date: string,
    timings: string,
  }

  const [data, setData] = useState<dataType[]>([{
    customerName: '',
    hallType: '',
    occasion: '',
    date: '',
    timings: '',
  }])

  useEffect(() => {

    // Fetch data

    setData([{
      customerName: 'John Doe',
      hallType: 'Small',
      occasion: 'Birthday',
      date: '14 May \'24',
      timings: '6:30pm',
    }])
  }, [])

  let counter = 1

  return (
    <Container maxW='5xl' p='5rem' letterSpacing={1}>
      <Heading mb='3rem' as='h1'>Party Hall Bookings</Heading>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>S. No.</Th>
              <Th>Customer</Th>
              <Th>Hall Type</Th>
              <Th>Occastion</Th>
              <Th>Date</Th>
              <Th>Timings</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => (
              <Tr>
                <Td>{counter++}</Td>
                <Td>{item.customerName}</Td>
                <Td>{item.hallType}</Td>
                <Td>{item.occasion}</Td>
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

export default PartyHallBookings