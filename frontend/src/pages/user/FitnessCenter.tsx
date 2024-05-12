import { Button, Container, Heading, Input } from "@chakra-ui/react"


const FitnessCenter = () => {
  return (
    <>
      <Container maxW='5xl' p='5rem' letterSpacing={1}>
        <Heading mb='3rem' as='h1'>Fitness Centre</Heading>
        <Heading mb='1rem' as='h2' size='md'>Choose Date & Time</Heading>
        <Input mb='2rem' placeholder='Select Date and Time' size='md' type='datetime-local' />
        <Button colorScheme='blue'>Confirm Booking</Button>
      </Container>
    </>
  )
}

export default FitnessCenter