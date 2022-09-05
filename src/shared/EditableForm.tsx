import { Editable, Flex, EditablePreview, EditableInput, useEditableControls, ButtonGroup, IconButton } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Icons } from '../assets/icons'
import { UpdateUserAgeSchema } from '../utils/validateSchema/users/UpdateUserAgeSchema'

interface EditableFormProps {
  age: string
}

interface UserSchema {
  age: string
}

export const EditableForm = (props: EditableFormProps) => {
  const { age } = props
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserSchema>({
    resolver: yupResolver(UpdateUserAgeSchema())
  })

  const onSubmit: SubmitHandler<UserSchema> = user => console.log('[USER]', user)

  function EditableControls() {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls()

    // TODO: Colocar onSubmit no botao

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton aria-label='Button to accept change' icon={<Icons.Check />} {...getSubmitButtonProps()} />
        <IconButton aria-label='Button to discart change' icon={<Icons.Cancel />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : (
      <Flex justifyContent='center'>
        <IconButton aria-label='Button to update field' size='sm' icon={<Icons.Pencil />} {...getEditButtonProps()} />
      </Flex>
    )
  }

  return (
    <Editable px={2} defaultValue={age} isPreviewFocusable={false}>
      <Flex onSubmit={handleSubmit(onSubmit)} justify='space-between'>
        <EditablePreview />
        <EditableInput
          type='number'
          pl={2}
          w='50px'
          mr={2}
          {...register('age')}
        />
        <EditableControls />
      </Flex>
    </Editable>
  )
}
