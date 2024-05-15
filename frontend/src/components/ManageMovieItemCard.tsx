import { Card, CardBody, Stack, Heading, Divider, CardFooter, Button, Image, Text, Flex } from "@chakra-ui/react"

type PropsType = {
  imgSrc: string,
  imgAlt?: string,
  title: string,
  languages: string,
  rating: string
}

const ManageMovieItemCard = ({ imgSrc, imgAlt = 'img', title, languages, rating }: PropsType) => {
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
          <Text color='gray.400'>
            {rating}
          </Text>
          <Text color='gray.400'>
            {languages}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>

        <Flex width='100%' gap={2} justifyContent='right'>
          <Button variant='solid' colorScheme='yellow' size='md'>
            Edit
          </Button>
          <Button variant='solid' colorScheme='red' size='md'>
            Delete
          </Button>
        </Flex>

      </CardFooter>
    </Card>
  )
}

export default ManageMovieItemCard