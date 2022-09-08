import { Editable, Flex, EditablePreview, EditableInput, useEditableControls, ButtonGroup, IconButton } from '@chakra-ui/react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Icons } from '../assets/icons'
import { useToast } from '../hooks/useToast'
import { UserDataPut } from '../interfaces'
import { queryPutUser } from '../services/users'

interface EditableFormProps {
  id: string
  age: number
}

export const EditableForm = (props: EditableFormProps) => {
  const { id, age } = props

  const { mutate: putUser } = queryPutUser(id)
  const { toastSuccess, toastError } = useToast()
  const { register, handleSubmit } = useForm<UserDataPut>()

  const onSubmit: SubmitHandler<UserDataPut> = data => {
    const userData = {
      age: data.age
    }

    // ! Fazer validação se é a mesma idade nao precisa atualizar

    putUser(userData, {
      onSuccess: () => toastSuccess({ description: 'User updated' }),
      onError: () => toastError({ description: 'Error on update user, try again later' })
    })
  }

  const EditableControls = () => {
    const { isEditing, getSubmitButtonProps, getCancelButtonProps, getEditButtonProps } = useEditableControls()

    return isEditing ? (
      <ButtonGroup justifyContent='center' size='sm'>
        <IconButton aria-label='Submit' icon={<Icons.Check />} {...getSubmitButtonProps()} />
        <IconButton aria-label='Cancel' icon={<Icons.Cancel />} {...getCancelButtonProps()} />
      </ButtonGroup>
    ) : <IconButton aria-label='Update' size='sm' icon={<Icons.Pencil />} {...getEditButtonProps()} />
  }

  // ! Está funcionando mas a tipagem solicita que seja String o que faz que se limite a somente um input.. devo resolver isso

  return (
    <Editable
      as='form'
      onSubmit={handleSubmit(onSubmit)}
      defaultValue={String(age)}
      px={2}
      isPreviewFocusable={false}
    >
      <Flex justify='space-between'>
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
