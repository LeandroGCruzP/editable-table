import { useEditableControls, Input, ButtonGroup, IconButton, Flex, Editable, EditablePreview } from '@chakra-ui/react'
import { Icons } from '../assets/icons'

export function CustomControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls()

    if(isEditing) {
      return <ButtonGroup justifyContent='center' size='sm'>
        <IconButton aria-label='Button to accept change' icon={<Icons.Check />} {...getSubmitButtonProps()} />
        <IconButton aria-label='Button to discart change' icon={<Icons.Cancel />} {...getCancelButtonProps()} />
      </ButtonGroup>
    }

    return (
      <Flex justifyContent='center'>
        <IconButton aria-label='Button to update field' size='sm' icon={<Icons.Pencil />} {...getEditButtonProps()} />
      </Flex>
    )
  }