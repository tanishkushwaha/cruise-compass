import { SearchIcon } from '@chakra-ui/icons'
import { Box, Button, Container, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { MdDelete } from 'react-icons/md'

const Cart = () => {
  return (
    <Container maxW='5xl' p='5rem' h='90%'>
      <Heading mb='3rem' as='h1'>Cart</Heading>
      <Flex direction='column' gap='1rem'>
        <CartItem />
        <CartItem />
        <CartItem />
      </Flex>
    </Container>
  )
}

const CartItem = () => {
  return (
    <Flex bgColor='gray.200'>
      <Box bgColor='gray.500' w='8rem' h='8rem'></Box>
      <Flex p='1rem'>
        <Box>
          <Text fontSize='lg'>Cheese Pizza</Text>
          {/* <Button mt='0.5rem' bgColor='gray.300' size='sm'>Delete</Button> */}
          <QtySelector />
        </Box>
      </Flex>
      <Flex p='1rem' alignItems='center' justifyContent='end' flex='1'>
        <Text fontSize='2xl' fontWeight={700}>₹120</Text>
      </Flex>
    </Flex>
  )
}

const QtySelector = () => {
  const [qty, setQty] = useState(1)

  return (
    <Flex mt='1rem'>
      <IconButton size='xs' colorScheme='blue' aria-label='Search database' icon={<FaMinus />} onClick={() => setQty(prevQty => --prevQty)} />
      <Flex bgColor='white' w='40px' h='24px' justifyContent='center' alignItems='center'>{qty}</Flex>
      <IconButton size='xs' colorScheme='blue' aria-label='Search database' icon={<FaPlus />} onClick={() => setQty(prevQty => ++prevQty)} />
    </Flex>
  )
}

export default Cart