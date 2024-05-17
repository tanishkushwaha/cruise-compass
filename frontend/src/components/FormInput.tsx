import { FormControl, FormLabel, Input, FormErrorMessage } from "@chakra-ui/react"
import { CSSProperties } from "react";

type Props = {
  label: string;
  name: string;
  type?: string;
  value?: string;
  placeholder?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  error?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
  style?: CSSProperties,
  accept?: string
}

const FormInput = ({ label, name, type = 'text', value, placeholder, onChange, error = false, errorMessage = 'This field is required.', isRequired = false, style, accept }: Props) => {
  return (
    <FormControl isInvalid={error} isRequired={isRequired}>
      <FormLabel>{label}</FormLabel>
      <Input type={type} name={name} value={value} placeholder={placeholder} onChange={onChange} accept={accept} style={style} />
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export default FormInput