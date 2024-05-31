import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack, useToast } from "@chakra-ui/react"
import FormInput from "./FormInput"
import { ChangeEvent, Dispatch, useState } from "react"
import axios from "../utils/axiosInstance"

type PropsType = {
  isOpen: boolean;
  onClose: () => void;
  id: string;
  setUpdate?: Dispatch<React.SetStateAction<boolean>>;
  name: string;
  description: string;
  price: string;
}

type InputDataType = {
  name: string,
  description: string,
  price: string
}


const EditBeverageModal = ({ isOpen, onClose, id, setUpdate, name, description, price }: PropsType) => {
  const toast = useToast()
  const [loading, setLoading] = useState(false)
  const [inputData, setInputData] = useState<InputDataType>({
    name,
    description,
    price,
  })
  const [imgFile, setImageFile] = useState<File | null>(null)

  const [inputErrors, setInputErrors] = useState({
    name: false,
    description: false,
    price: false,
    imgFile: false,
  })

  const resetErrors = () => {
    setInputErrors({
      name: false,
      description: false,
      price: false,
      imgFile: false
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    resetErrors()

    const { name, value } = e.target
    setInputData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    resetErrors()
    setImageFile(e.target.files![0])
  }

  const handleSubmit = () => {
    let formValid = true

    for (const field in inputData) {
      if (!inputData[field as keyof InputDataType]) {
        setInputErrors(prevStates => ({
          ...prevStates,
          [field]: true
        }))

        formValid = false
      }

      if (!imgFile) {
        setInputErrors(prevStates => ({
          ...prevStates,
          imgFile: true
        }))

        formValid = false
      }
    }

    if (!formValid) return

    // Send the inputData to the backend
    const formData = new FormData()
    formData.append('name', inputData.name)
    formData.append('description', inputData.description)
    formData.append('price', inputData.price)
    formData.append('imgFile', imgFile!)

    console.log(formData)
    console.log(imgFile)

    setLoading(true)
    axios.put(`/api/beverages/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        toast({
          title: 'Beverage item updated successfully!',
          status: 'success',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
        console.log(res.data)
      })
      .catch(err => {
        toast({
          title: 'Error updating beverage item',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top-right'
        })
        console.log(err)
      })
      .finally(() => {
        handleModalClose()
        setUpdate!(true)
        setLoading(false)
      })
  }

  const handleModalClose = () => {
    onClose()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Beverage</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction='column' gap={5}>
            <FormInput label="Enter Beverage Name" name="name" value={inputData.name} onChange={handleChange} error={inputErrors.name} />
            <FormInput label="Enter Description" name="description" value={inputData.description} onChange={handleChange} error={inputErrors.description} />
            <FormInput label="Enter Price" name="price" value={inputData.price} onChange={handleChange} error={inputErrors.price} />
            <FormInput type="file" accept="image/png, image/jpeg" label="Upload Picture (square preffered)" name="image" onChange={handleFileChange} error={inputErrors.imgFile} />
          </Stack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit} isLoading={loading}>Update</Button>
          <Button variant='outline' colorScheme='blue' onClick={handleModalClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default EditBeverageModal