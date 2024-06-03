import { Card, CardBody, Stack, Heading, CardFooter, Button, Image, Text, Flex } from "@chakra-ui/react"

interface ItemCardProps {
  imgSrc: string,
  imgAlt?: string,
  title: string,
  description: string,
  price: string
}

const OrderItemCard = ({ imgSrc, imgAlt = 'img', title, description, price }: ItemCardProps) => {
  return (
    <Card maxW='100%'>
      <CardBody>
        <Image
          src={imgSrc}
          alt={imgAlt}
          borderRadius='md'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md' fontWeight={600}>{title}</Heading>
          <Text>
            {description}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {`Rs. ${price}`}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>

        <Flex width='100%' gap={3} justifyContent='right'>
          <Button variant='outline' colorScheme='blue' size='md'>
            Add
          </Button>
          <Button variant='solid' colorScheme='blue' size='md'>
            Buy
          </Button>
        </Flex>

      </CardFooter>
    </Card>
  )
}

export default OrderItemCard