import { FormControl, FormLabel, FormErrorMessage, Select } from "@chakra-ui/react"

type Props = {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  error?: boolean;
  errorMessage?: string;
  isRequired?: boolean;
  value?: string;
}

const FormSelectRole = ({ onChange, error = false, errorMessage = 'Select an option.', isRequired = false, value }: Props) => {
  return (
    <FormControl isInvalid={error} isRequired={isRequired}>
      <FormLabel>Select Role</FormLabel>
      <Select onChange={onChange} value={value}>
        <option value='USER'>User</option>
        <option value='MANAGER'>Manager</option>
        <option value='SUPERVISOR'>Supervisor</option>
        <option value='HEAD_COOK'>Head Cook</option>
        <option value='ADMIN'>Admin</option>
      </Select>
      <FormErrorMessage>{errorMessage}</FormErrorMessage>
    </FormControl>
  )
}

export default FormSelectRole