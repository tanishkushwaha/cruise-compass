import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import MenuItemCard from "../../components/MenuItemCard";
import { useNavigate } from "react-router";

const Management = () => {
  const navigate = useNavigate();

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>
        Bookings
      </Heading>
      <SimpleGrid
        spacing={10}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      >
        <MenuItemCard
          title='Movies'
          onClick={() => {
            navigate("/management/movie-bookings");
          }}
        />
        <MenuItemCard
          title='Beauty Salon'
          onClick={() => {
            navigate("/management/salon-bookings");
          }}
        />
        <MenuItemCard
          title='Fitness Centre'
          onClick={() => {
            navigate("/management/fitness-center-bookings");
          }}
        />
        <MenuItemCard
          title='Party Hall'
          onClick={() => {
            navigate("/management/party-hall-bookings");
          }}
        />
      </SimpleGrid>
    </Container>
  );
};

export default Management;
