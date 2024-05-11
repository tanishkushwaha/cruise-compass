import { Card, CardBody, Stack, Heading, Image, Text } from "@chakra-ui/react"

interface ItemCardProps {
  imgSrc: string,
  imgAlt?: string,
  title: string,
  rating: string,
  languages: string
}

const MovieCard = ({ imgSrc, imgAlt = 'img', title, rating, languages }: ItemCardProps) => {
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
    </Card>
  )
}

export default MovieCard