import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, Image, Text, Flex } from "@chakra-ui/react"

interface ItemCardProps {
  imgSrc: string,
  imgAlt?: string,
  title: string,
  descr: string,
  price: string
}

const OrderItemCard = ({ imgSrc, imgAlt = 'img', title, descr, price }: ItemCardProps) => {
  return (
    <Card maxW='100%'>
      <CardBody>
        <Image
          src={imgSrc}
          alt={imgAlt}
          borderRadius='md'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {descr}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>

        <Flex width='100%' gap={2} justifyContent='right'>
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