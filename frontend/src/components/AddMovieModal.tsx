import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Stack } from "@chakra-ui/react"
import FormInput from "./FormInput"
import { useState } from "react"

type PropsType = {
  isOpen: boolean,
  onClose: () => void
}

type DataType = {
  movieName: string,
  language: string,
  rating: string,
}


const AddMovieModal = ({ isOpen, onClose }: PropsType) => {

  const [data, setData] = useState<DataType>({
    movieName: '',
    language: '',
    rating: ''
  })

  const resetData = () => {
    setData({
      movieName: '',
      language: '',
      rating: ''
    })
  }

  const [inputErrors, setInputErrors] = useState({
    movieName: false,
    language: false,
    rating: false
  })

  const resetErrors = () => {
    setInputErrors({
      movieName: false,
      language: false,
      rating: false
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
      if (!data[field as keyof DataType]) {
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
        <ModalHeader>Add Movie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack direction='column' gap={5}>
            <FormInput label="Enter Movie Name" name="movieName" value={data.movieName} onChange={handleChange} error={inputErrors.movieName} />
            <FormInput label="Enter Language" name="language" value={data.language} onChange={handleChange} error={inputErrors.language} />
            <FormInput label="Enter Rating" name="rating" value={data.rating} onChange={handleChange} error={inputErrors.rating} />
            <FormInput type="file" accept="image/png, image/jpeg" label="Upload Picture" name="picture" />
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

export default AddMovieModal