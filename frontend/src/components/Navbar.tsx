import { Avatar, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"

const Navbar = () => {

  return (
    <>
      <Grid h='100vh' templateColumns='repeat(12, 1fr)' >
        <GridItem colSpan={2} bg='black' p={5}>
          <Flex justifyContent='center' alignItems='center' flexDirection='column' gap={3} mb='5rem'>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='lg' />
            <Text fontSize='xl' letterSpacing={1} color='white' as='b'>Dan Abrahmov</Text>
          </Flex>

          <Flex direction='column' >
            <NavItem title='Food' path='/order/catering/food' />
            <NavItem title='Snacks' path='/order/catering/snacks' />
            <NavItem title='Movies' path='/book/movies' />
            <NavItem title='Beauty Salon' path='/book/beauty-salon' />
            <NavItem title='Fitness Centre' path='/book/fitness-centre' />
            <NavItem title='Party Hall' path='/book/party-hall' />
          </Flex>
        </GridItem>
        <GridItem colSpan={10}>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  )
}

const NavItem = ({ title, path }: { title: string, path: string }) => {
  return (

    <NavLink to={path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>

      {({ isActive, isPending, isTransitioning }) => (
        // <span className={isActive ? "active" : ""}>Tasks</span>
        <Flex h='30px' px='1rem' py='2rem' alignItems='center' _hover={{ bgColor: 'gray.900' }} cursor='pointer' bgColor={isActive ? 'gray.900' : ''}>
          <Text fontSize='lg' letterSpacing='1px' color='white' as='b'>{title}</Text>
        </Flex>
      )}


    </NavLink>
  )
}

export default Navbar