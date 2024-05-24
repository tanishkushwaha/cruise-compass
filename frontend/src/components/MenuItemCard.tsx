import { Heading, Flex } from "@chakra-ui/react"

const MenuItemCard = ({ title, icon, onClick }: any) => {
  return (

    <Flex bg='black' minH={100} borderRadius={8} justifyContent='center' alignItems='center' cursor='pointer' _hover={{ transform: 'scale(1.1)' }} onClick={onClick}>
      <Flex gap={3} alignItems='center'>
        {icon}
        <Heading color='white' size='md'>{title}</Heading>
      </Flex>
    </Flex>
  )
}

export default MenuItemCard