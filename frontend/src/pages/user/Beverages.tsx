import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import OrderItemCard from "../../components/OrderItemCard";

const Beverages = () => {
  interface BeverageType {
    name: string;
    descr: string;
    imgUrl: string;
    price: string;
  }

  const [data, setData] = useState<BeverageType[]>([]);

  // Add useEffect to fetch data
  useEffect(() => {
    // TODO: Cleanup
    // Dummy data
    setData([
      {
        name: "Coca Cola",
        descr: "Served Cold",
        imgUrl:
          "https://www.coca-cola.com/content/dam/onexp/us/en/brands/coca-cola-original/en_coca-cola-original-taste-20-oz_750x750_v1.jpg",
        price: "$5",
      },
      {
        name: "Pepperoni Pizza",
        descr: "Pizza topped with pepperoni slices.",
        imgUrl:
          "https://images.ctfassets.net/6jpeaipefazr/7pAssrDIiauLbPpBRuxxRf/5a4f533fa9cbd16c4f3c386849fbb07f/P14-5000328462622.jpg?w=1080&h=1080",
        price: "$6",
      },
      {
        name: "Hawaiian Pizza",
        descr: "Pizza topped with ham and pineapple.",
        imgUrl:
          "https://images.ctfassets.net/6jpeaipefazr/7pAssrDIiauLbPpBRuxxRf/5a4f533fa9cbd16c4f3c386849fbb07f/P14-5000328462622.jpg?w=1080&h=1080",
        price: "$8",
      },
      {
        name: "Veggie Supreme Pizza",
        descr: "Pizza loaded with assorted vegetables.",
        imgUrl:
          "https://images.ctfassets.net/6jpeaipefazr/7pAssrDIiauLbPpBRuxxRf/5a4f533fa9cbd16c4f3c386849fbb07f/P14-5000328462622.jpg?w=1080&h=1080",
        price: "$8",
      },
    ]);
  }, []);

  return (
    <Container maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>
        Beverages
      </Heading>
      <SimpleGrid
        justifyContent='center'
        spacing={10}
        templateColumns='repeat(auto-fill, minmax(200px, 1fr))'
      >
        {data.map((snack) => (
          <OrderItemCard
            imgSrc={snack.imgUrl}
            title={snack.name}
            description={snack.descr}
            price={snack.price}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Beverages;
