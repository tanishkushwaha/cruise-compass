import { Button, Container, Heading, Input, Radio, RadioGroup, Stack } from "@chakra-ui/react"
import { useState } from "react"


const PartyHall = () => {
  const [occasion, setOccasion] = useState('birthday')
  const [hallType, setHallType] = useState('small')

  return (
    <>
      <Container maxW='5xl' p='5rem' letterSpacing={1}>
        <Heading mb='3rem' as='h1'>Party Hall</Heading>
        <Heading mb='1rem' as='h2' size='md'>Hall Type</Heading>
        <RadioGroup mb='2.5rem' onChange={setHallType} value={hallType}>
          <Stack direction='row' spacing={8}>
            <Radio value='small'>Small</Radio>
            <Radio value='medium'>Medium</Radio>
            <Radio value='large'>Large</Radio>
          </Stack>
        </RadioGroup>
        <Heading mb='1rem' as='h2' size='md'>Occasion</Heading>
        <RadioGroup mb='2.5rem' onChange={setOccasion} value={occasion}>
          <Stack direction='row' spacing={8}>
            <Radio value='birthday'>Birthday</Radio>
            <Radio value='wedding'>Wedding</Radio>
            <Radio value='engagement'>Engagement</Radio>
            <Radio value='get-together'>Get-Together</Radio>
            <Radio value='business-party'>Business Party</Radio>
          </Stack>
        </RadioGroup>
        <Heading mb='1rem' as='h2' size='md'>Date & Time</Heading>
        <Input mb='2.5rem' w='20rem' placeholder='Select Date and Time' size='md' type='datetime-local' /><br />
        <Button colorScheme='blue' letterSpacing={1}>Confirm Booking</Button>
      </Container>
    </>
  )
}

export default PartyHall