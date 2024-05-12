import { Flex, Text, Heading, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <>
      <Flex justifyContent='center' alignItems='center' direction='column' h='100vh'>
        <Heading mb='1rem' as='h1' size='2xl'>404</Heading>
        <Text mb='1rem'>Oops! The page you are looking for is not found :(</Text>
        <Button onClick={() => { navigate('/') }}>Go to Home</Button>
      </Flex >
    </>
  )
}

export default NotFound