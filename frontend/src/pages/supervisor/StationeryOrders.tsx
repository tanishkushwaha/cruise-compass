import { Container, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import { useEffect, useState } from "react"


const StationeryOrders = () => {
  type dataType = {
    customerName: string,
    item: string,
    qty: string,
    date: string,
    orderTime: string,
  }

  const [data, setData] = useState<dataType[]>([{
    customerName: '',
    item: '',
    qty: '',
    date: '',
    orderTime: '',
  }])

  useEffect(() => {

    // Fetch data

    setData([{
      customerName: 'John Doe',
      item: 'Pen',
      qty: '1',
      date: '14 May \'24',
      orderTime: '6:30pm',
    }])
  }, [])

  let counter = 1

  return (
    <Container maxW='5xl' p='5rem' letterSpacing={1}>
      <Heading mb='3rem' as='h1'>Stationery Orders</Heading>

      <TableContainer>
        <Table variant='simple'>
          <Thead>
            <Tr>
              <Th>S. No.</Th>
              <Th>Customer</Th>
              <Th>Item</Th>
              <Th>Qty.</Th>
              <Th>Date</Th>
              <Th>Ordered At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map(item => (
              <Tr>
                <Td>{counter++}</Td>
                <Td>{item.customerName}</Td>
                <Td>{item.item}</Td>
                <Td>{item.qty}</Td>
                <Td>{item.date}</Td>
                <Td>{item.orderTime}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}

export default StationeryOrders