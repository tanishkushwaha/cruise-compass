import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react"

interface FormTextFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
}


const FormTextField = ({ label, name, type = 'text', value, placeholder, onChange, error = false, errorMessage = 'This field is required.' }: FormTextFieldProps) => {
  return (
    <FormControl isInvalid={error} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export default FormTextField