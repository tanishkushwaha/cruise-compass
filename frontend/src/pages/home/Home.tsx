import {
  Container,
  Heading,
  Stack,
  Box,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";
import MenuItemCard from "../../components/MenuItemCard";
import { BiSolidDish, BiSolidMoviePlay, BiSolidParty } from "react-icons/bi";
import { FaPenAlt, FaDumbbell } from "react-icons/fa";
import { GiLipstick } from "react-icons/gi";

const Home = () => {
  // const navigate = useNavigate()

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>
        Home
      </Heading>
      <Stack direction='column' spacing='3rem'>
        <Box>
          <Heading mb='2rem' as='h2' size='lg' fontWeight={700}>
            Order
          </Heading>
          <SimpleGrid
            spacing={10}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
          >
            {/* <MenuItemCard title='Catering' icon={<Icon as={BiSolidDish} color='white' />} onClick={() => navigate('/order/catering')} /> */}
            {/* <MenuItemCard title='Stationery' icon={<Icon as={FaPenAlt} color='white' />} onClick={() => navigate('/order/stationery')} /> */}
          </SimpleGrid>
        </Box>
        <Box>
          <Heading mb='2rem' as='h2' size='lg' fontWeight={700}>
            Book
          </Heading>
          <SimpleGrid
            spacing={10}
            templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
          >
            {/* <MenuItemCard title='Movies' icon={<Icon as={BiSolidMoviePlay} color='white' />} onClick={() => navigate('/book/movies')} /> */}
            {/* <MenuItemCard title='Beauty Salon' icon={<Icon as={GiLipstick} color='white' />} onClick={() => navigate('/book/beauty-salon')} /> */}
            {/* <MenuItemCard title='Fitness Center' icon={<Icon as={FaDumbbell} color='white' />} onClick={() => navigate('/book/fitness-centre')} /> */}
            {/* <MenuItemCard title='Party Hall' icon={<Icon as={BiSolidParty} color='white' />} onClick={() => navigate('/book/party-hall')} /> */}
          </SimpleGrid>
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
