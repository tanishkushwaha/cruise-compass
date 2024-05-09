import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack } from "@chakra-ui/react"
import FormInput from "./FormInput"
import { useState } from "react"

interface AddDishModalProps {
  isOpen: boolean,
  onClose: () => void
}

interface FormData {
  dishName: string,
  descr: string,
  price: string,
}


const AddDishModal = ({ isOpen, onClose }: AddDishModalProps) => {

  const [data, setData] = useState<FormData>({
    dishName: '',
    descr: '',
    price: ''
  })

  const resetData = () => {
    setData({
      dishName: '',
      descr: '',
      price: ''
    })
  }

  const [inputErrors, setInputErrors] = useState({
    dishName: false,
    descr: false,
    price: false
  })

  const resetErrors = () => {
    setInputErrors({
      dishName: false,
      descr: false,
      price: false
    })
  }

  const handleChange = (e: any) => {
    resetErrors()

    const { name, value } = e.target
    setData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    let formValid = true

    for (const field in data) {
      if (!data[field as keyof FormData]) {
        setInputErrors(prevStates => ({
          ...prevStates,
          [field]: true
        }))

        formValid = false
      }
    }

    if (!formValid) return

    // Send the data to the backend

    console.log(data);

  }

  const handleModalClose = () => {
    onClose()
    resetData()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Dish</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction='column' gap={5}>
            <FormInput label="Enter Dish Name" name="dishName" value={data.dishName} onChange={handleChange} error={inputErrors.dishName} />
            <FormInput label="Enter Description" name="descr" value={data.descr} onChange={handleChange} error={inputErrors.descr} />
            <FormInput label="Enter Price" name="price" value={data.price} onChange={handleChange} error={inputErrors.price} />
            <FormInput type="file" accept="image/png, image/jpeg" label="Upload Picture" name="picture" />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit}>Add</Button>
          <Button variant='ghost' onClick={handleModalClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )
}

export default AddDishModal