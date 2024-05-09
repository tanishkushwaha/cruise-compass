import { IconButton } from "@chakra-ui/react"
import { AddIcon } from "@chakra-ui/icons"


const FloatingAddButton = ({ onClick }: { onClick: React.MouseEventHandler<HTMLButtonElement> }) => {
  return (
    <IconButton
      pos='fixed'
      bottom='30px'
      right='30px'
      isRound={true}
      variant='solid'
      colorScheme='teal'
      aria-label='Done'
      fontSize='20px'
      icon={<AddIcon />}
      size='xl'
      onClick={onClick}
    />
  )
}

export default FloatingAddButton