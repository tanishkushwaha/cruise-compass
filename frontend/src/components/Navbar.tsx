import { Avatar, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { IoMdHome } from "react-icons/io"
import { BiSolidDish } from "react-icons/bi"
import { FaPenAlt } from "react-icons/fa"
import { BiSolidMoviePlay } from "react-icons/bi"
import { GiLipstick } from "react-icons/gi"
import { FaDumbbell } from "react-icons/fa6"
import { BiSolidParty } from "react-icons/bi"
import { Icon } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { useAuth } from "../context/authContext"

const Navbar = () => {
  const auth = useAuth()

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)' >
        <GridItem colSpan={2} bg='black' p={1}>
          <Flex justifyContent='center' alignItems='center' flexDirection='column' gap={3} mb='2rem'>
            <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='md' />
            <Text fontSize='lg' letterSpacing={1} color='white' as='b'>{`${auth.user.firstName} ${auth.user.lastName}`}</Text>
          </Flex>

          <Flex direction='column'>
            <NavItem title='Home' icon={<Icon as={IoMdHome} color='white' />} path='/' />
            <NavItem title='Catering' icon={<Icon as={BiSolidDish} color='white' />} path='/order/catering' />
            <NavItem title='Stationery' path='/order/stationery' icon={<Icon as={FaPenAlt} color='white' />} />
            <NavItem title='Movies' path='/book/movies' icon={<Icon as={BiSolidMoviePlay} color='white' />} />
            <NavItem title='Beauty Salon' path='/book/beauty-salon' icon={<Icon as={GiLipstick} color='white' />} />
            <NavItem title='Fitness Centre' path='/book/fitness-centre' icon={<Icon as={FaDumbbell} color='white' />} />
            <NavItem title='Party Hall' path='/book/party-hall' icon={<Icon as={BiSolidParty} color='white' />} />
          </Flex>
        </GridItem>
        <GridItem colSpan={10} overflow='auto' h='100vh'>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  )
}

const NavItem = ({ title, path, icon }: { title: string, path: string, icon: any }) => {
  return (

    <NavLink to={path} className={({ isActive, isPending }) => isPending ? "pending" : isActive ? "active" : ""}>

      {({ isActive }) => (
        <Flex h='30px' px='1rem' py='2rem' gap={2} alignItems='center' borderRadius={8} _hover={{ bgColor: 'gray.900' }} cursor='pointer' bgColor={isActive ? 'gray.900' : ''}>
          {icon}
          <Text fontSize='md' letterSpacing='1px' color='white' as='b'>{title}</Text>
        </Flex>
      )}


    </NavLink>
  )
}

export default Navbar