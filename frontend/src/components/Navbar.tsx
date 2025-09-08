import { Box, Flex, Grid, GridItem, Text } from "@chakra-ui/react";
import { IoMdHome } from "react-icons/io";
import { FaClipboardList, FaShoppingCart } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { FaCog } from "react-icons/fa";
import { Icon } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { FiLogOut } from "react-icons/fi";
import { roles } from "../rbac/roles";
import { NavLink, Outlet } from "react-router";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const auth = useAuth();

  return (
    <>
      <Grid templateColumns='repeat(12, 1fr)'>
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Box bg='black' h='100vh' w={{ base: "60px", lg: "auto" }} pt={10}>
            <Flex
              justifyContent='center'
              alignItems='center'
              flexDirection='column'
              gap={3}
              mb='2rem'
            >
              <Text
                color='white'
                fontSize='lg'
                fontWeight={800}
                display={{ base: "none", lg: "block" }}
              >
                Cruise Compass
              </Text>
              {/* <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' size='md' /> */}
              {/* <Text fontSize='lg' color='white'>{`${auth.user.firstName} ${auth.user.lastName}`}</Text> */}
            </Flex>

            <Flex direction='column'>
              {auth.user?.role === roles.USER ? (
                <>
                  <NavItem
                    title='Home'
                    icon={
                      <Icon
                        as={IoMdHome}
                        color='white'
                        boxSize={{ base: 6, lg: 5 }}
                      />
                    }
                    path='/home'
                  />
                  <NavItem
                    title='Cart'
                    icon={
                      <Icon
                        as={FaShoppingCart}
                        color='white'
                        boxSize={{ base: 6, lg: 5 }}
                      />
                    }
                    path='/cart'
                  />
                  <NavItem
                    title='My Orders'
                    icon={
                      <Icon
                        as={FaClipboardList}
                        color='white'
                        boxSize={{ base: 6, lg: 5 }}
                      />
                    }
                    path='/orders'
                  />
                </>
              ) : auth.user?.role === roles.MANAGER ? (
                <NavItem
                  title='Management'
                  icon={
                    <Icon
                      as={MdManageAccounts}
                      color='white'
                      boxSize={{ base: 6, lg: 5 }}
                    />
                  }
                  path='/management'
                />
              ) : auth.user?.role === roles.HEAD_COOK ? (
                <NavItem
                  title='Orders'
                  icon={
                    <Icon
                      as={FaClipboardList}
                      color='white'
                      boxSize={{ base: 6, lg: 5 }}
                    />
                  }
                  path='/orders/catering'
                />
              ) : auth.user?.role === roles.SUPERVISOR ? (
                <NavItem
                  title='Orders'
                  icon={
                    <Icon
                      as={FaClipboardList}
                      color='white'
                      boxSize={{ base: 6, lg: 5 }}
                    />
                  }
                  path='/orders/stationery'
                />
              ) : auth.user?.role === roles.ADMIN ? (
                <NavItem
                  title='Admin'
                  icon={
                    <Icon
                      as={RiAdminFill}
                      color='white'
                      boxSize={{ base: 6, lg: 5 }}
                    />
                  }
                  path='/admin'
                />
              ) : null}
              <NavItem
                title='Account'
                icon={
                  <Icon as={FaCog} color='white' boxSize={{ base: 6, lg: 5 }} />
                }
                path='/account'
              />
              <NavItem
                title='Logout'
                icon={
                  <Icon
                    as={FiLogOut}
                    color='white'
                    boxSize={{ base: 6, lg: 5 }}
                  />
                }
                path='/logout'
                style={{ marginTop: "auto" }}
              />
            </Flex>
          </Box>
        </GridItem>
        <GridItem colSpan={{ base: 11, lg: 10 }} overflow='auto' h='100vh'>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

const NavItem = ({
  title,
  path,
  icon,
  style,
}: {
  title: string;
  path: string;
  icon: any;
  style?: CSSProperties;
}) => {
  return (
    <NavLink
      style={style}
      to={path}
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      {({ isActive }) => (
        <Flex
          h='30px'
          px='1rem'
          py='2rem'
          gap={2}
          alignItems='center'
          justifyContent={{ base: "center", lg: "flex-start" }}
          _hover={{ bgColor: "gray.900" }}
          cursor='pointer'
          bgColor={isActive ? "gray.800" : ""}
        >
          {icon}
          <Text
            display={{ base: "none", lg: "block" }}
            fontSize='lg'
            color='white'
            fontWeight={400}
          >
            {title}
          </Text>
        </Flex>
      )}
    </NavLink>
  );
};

export default Navbar;
