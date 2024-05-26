import { Avatar, Flex, Grid, GridItem, Text } from "@chakra-ui/react"
import { IoMdHome } from "react-icons/io"
import { FaClipboardList } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaCog } from "react-icons/fa";

import { Icon } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"
import { NavLink } from "react-router-dom"
import useAuth from "../hooks/useAuth";

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
            <NavItem title='Account' icon={<Icon as={FaCog} color='white' />} path='/account' />
            {auth.user.role === 'MANAGER' ? (
              <NavItem title='Management' icon={<Icon as={MdManageAccounts} color='white' />} path='/management' />
            ) : auth.user.role === 'HEAD_COOK' ? (
              <NavItem title='Orders' icon={<Icon as={FaClipboardList} color='white' />} path='/orders/catering' />

            ) : auth.user.role === 'SUPERVISOR' ? (
              <NavItem title='Orders' icon={<Icon as={FaClipboardList} color='white' />} path='/orders/stationery' />

            ) : auth.user.role === 'ADMIN' ? (
              <NavItem title='Admin' icon={<Icon as={RiAdminFill} color='white' />} path='/admin' />

            ) : null
            }
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