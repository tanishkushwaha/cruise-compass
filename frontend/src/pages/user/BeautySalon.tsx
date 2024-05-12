import { Button, Container, Heading, Input } from "@chakra-ui/react"


const BeautySalon = () => {
  return (
    <>
      <Container maxW='5xl' p='5rem' letterSpacing={1}>
        <Heading mb='3rem' as='h1'>Beauty Salon</Heading>
        <Heading mb='1rem' as='h2' size='md'>Choose Date & Time</Heading>
        <Input mb='2rem' placeholder='Select Date and Time' size='md' type='datetime-local' />
        <Button colorScheme='blue'>Confirm Booking</Button>
      </Container>
    </>
  )
}

export default BeautySalon