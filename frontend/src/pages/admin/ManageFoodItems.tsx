import { Container, Flex, Heading, SimpleGrid, useDisclosure, Card, CardBody, Image, Button, CardFooter, Stack, Text, useToast } from "@chakra-ui/react"
import FloatingAddButton from '../../components/FloatingAddButton'
import AddFoodModal from "../../components/AddFoodModal"
import { Dispatch, useEffect, useState } from "react"
import axios from "../../utils/axiosInstance"
import SpinnerScreen from "../../components/SpinnerScreen"
import EditFoodModal from "../../components/EditFoodModal"


const ManageFoodItems = () => {
  const addFoodModel = useDisclosure()

  type DataType = {
    _id: string,
    name: string,
    description: string,
    price: string,
    imgURL: string
  }

  const [data, setData] = useState<DataType[]>([])
  const [loading, setLoading] = useState(true)
  const [update, setUpdate] = useState(false)

  // Add useEffect to fetch data
  useEffect(() => {
    setLoading(true)
    axios.get('/api/foods')
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.error(err)
      })
      .finally(() => {
        setLoading(false)
        setUpdate(false)
      })
  }, [update])


  return (
    <Container h='90%' maxW='5xl' p='5rem'>
      <Heading mb='3rem' as='h1'>Manage Food</Heading>
      {loading && <SpinnerScreen />}
      {(data.length === 0) ? (
        <Flex justifyContent='center' alignItems='center' h='100%'>
          <Heading as='h2' color='gray.500'>No items</Heading>
        </Flex>
      ) : (
        <SimpleGrid justifyContent='center' spacing={10} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>

          {data.map(item => (
            <ItemCard key={item._id} id={item._id} imgSrc={item.imgURL} title={item.name} descr={item.description} price={item.price} setUpdate={setUpdate} />
          ))}

        </SimpleGrid>
      )}
      <AddFoodModal isOpen={addFoodModel.isOpen} onClose={addFoodModel.onClose} setUpdate={setUpdate} />
      <FloatingAddButton onClick={addFoodModel.onOpen} />
    </Container >
  )
}

type PropsType = {
  id: string,
  imgSrc: string,
  imgAlt?: string,
  title: string,
  descr: string,
  price: string,
  setUpdate: Dispatch<React.SetStateAction<boolean>>
}

const ItemCard = ({ id, imgSrc, imgAlt = 'img', title, descr, price, setUpdate }: PropsType) => {
  const toast = useToast()
  const editFoodModel = useDisclosure()

  const deleteButtonHandler = (id: string) => {
    console.log(id)

    axios.delete(`/api/foods/${id}`)
      .then(res => {
        console.log(res.data)
        toast({
          title: 'Item deleted successfully',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
      })
      .catch(err => {
        toast({
          title: 'Error deleting item',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
        console.error(err)
      })
      .finally(() => {
        setUpdate(true)

      })
  }

  return (
    <Card maxW='100%'>
      <CardBody>
        <Image
          src={imgSrc}
          alt={imgAlt}
          borderRadius='md'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>{title}</Heading>
          <Text>
            {descr}
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            {`₹${price}`}
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>

        <Flex width='100%' gap={2} justifyContent='right'>
          <Button variant='solid'
            colorScheme='yellow' size='md'
            onClick={() => {
              editFoodModel.onOpen()
            }}>
            Edit
          </Button>
          <Button variant='solid'
            colorScheme='red' size='md'
            onClick={() => deleteButtonHandler(id)}>
            Delete
          </Button>
        </Flex>
      </CardFooter>
      <EditFoodModal isOpen={editFoodModel.isOpen} onClose={editFoodModel.onClose} setUpdate={setUpdate} id={id} name={title} description={descr} price={price} />
    </Card>
  )
}

export default ManageFoodItems
