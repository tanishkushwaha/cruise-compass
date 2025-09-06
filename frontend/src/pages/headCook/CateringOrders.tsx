import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import MenuItemCard from "../../components/MenuItemCard";

const CateringOrders = () => {
  // const navigate = useNavigate()

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>
        Catering
      </Heading>
      <SimpleGrid
        spacing={10}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      >
        {/* <MenuItemCard title='Food' onClick={() => { navigate('/orders/catering/food') }} />
        <MenuItemCard title='Snacks' onClick={() => { navigate('/orders/catering/snacks') }} />
        <MenuItemCard title='Beverages' onClick={() => { navigate('/orders/catering/beverages') }} /> */}
      </SimpleGrid>
    </Container>
  );
};

export default CateringOrders;
