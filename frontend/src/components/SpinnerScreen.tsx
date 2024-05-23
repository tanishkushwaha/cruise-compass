import { Flex, Spinner } from "@chakra-ui/react"


const SpinnerScreen = () => {
  return (
    <>
      <Flex h='100vh' justifyContent='center' alignItems='center'>
        <Spinner size='xl' color='black' thickness='4px' />
      </Flex>
    </>
  )
}

export default SpinnerScreen