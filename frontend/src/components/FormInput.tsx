import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react"

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
  accept?: string
}

const FormInput = ({ label, name, type = 'text', value, placeholder, onChange, error = false, errorMessage = 'This field is required.', isRequired = false, accept }: FormInputProps) => {
  return (
    <FormControl isInvalid={error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} accept={accept} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export default FormInput