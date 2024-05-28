import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack } from "@chakra-ui/react"
import FormInput from "./FormInput"
import { ChangeEvent, useState } from "react"
import axios from "../utils/axiosInstance"

type PropsType = {
  isOpen: boolean,
  onClose: () => void
}

type InputDataType = {
  name: string,
  description: string,
  price: string
}


const AddFoodModal = ({ isOpen, onClose }: PropsType) => {

  const [inputData, setInputData] = useState<InputDataType>({
    name: '',
    description: '',
    price: '',
  })

  const [imgFile, setImageFile] = useState<File | null>(null)


  const resetData = () => {
    setInputData({
      name: '',
      description: '',
      price: '',
    })
    setImageFile(null)
  }

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

    axios.post('/api/foods', formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then(res => {
        console.log(res.data)

      })
      .catch(err => {
        console.log(err)

      })

  }

  const handleModalClose = () => {
    onClose()
    resetData()
  }

  return (
    <Modal isOpen={isOpen} onClose={handleModalClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Food</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction='column' gap={5}>
            <FormInput label="Enter Food Name" name="name" value={inputData.name} onChange={handleChange} error={inputErrors.name} />
            <FormInput label="Enter Description" name="description" value={inputData.description} onChange={handleChange} error={inputErrors.description} />
            <FormInput label="Enter Price" name="price" value={inputData.price} onChange={handleChange} error={inputErrors.price} />
            <FormInput type="file" accept="image/png, image/jpeg" label="Upload Picture" name="image" onChange={handleFileChange} error={inputErrors.imgFile} />
          </Stack>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme='blue' mr={3} onClick={handleSubmit}>Add</Button>
          <Button variant='outline' colorScheme='blue' onClick={handleModalClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>

  )
}

export default AddFoodModal