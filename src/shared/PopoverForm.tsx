import { Button, ButtonGroup, Flex, IconButton, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text, useDisclosure } from '@chakra-ui/react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Icons } from '../assets/icons'
import { Input } from './Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { UpdateUserNameEmailSchema } from '../utils/validateSchema/users/UpdateUserNameEmailSchema'
import { queryPutUser } from '../services/users'
import { useToast } from '../hooks/useToast'

interface PopoverFormProps {
  id: string
  name: string
  email: string
  onFetch: () => void
}

interface UserSchema {
  name: string
  email: string
}

export const PopoverForm = (props: PopoverFormProps) => {
  const { id, name, email, onFetch } = props
  const { onOpen, onClose, isOpen } = useDisclosure()
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<UserSchema>({
    resolver: yupResolver(UpdateUserNameEmailSchema())
  })

  const { toastSuccess, toastError } = useToast()
  const { mutate: putUser } = queryPutUser(id)

  const onSubmit: SubmitHandler<UserSchema> = data => {
    const userData = {
      name: data.name,
      email: data.email
    }

    putUser(userData, {
      onSuccess: () => {
        toastSuccess({ description: 'User updated' })

        onFetch()
      },
      onError: () => toastError({ description: 'Error on update user, try again later' })
    })

    onClose()
  }

  return (
    <Flex justify='space-between' >
      <Flex flexDir='column' >
        <Text>{name}</Text>
        <Text fontSize='xs'>{email}</Text>
      </Flex>

      <Popover
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        placement='right'
        closeOnBlur={true}
      >
        <PopoverTrigger>
          <IconButton aria-label='Button to edit field' size='sm' icon={<Icons.Pencil />} />
        </PopoverTrigger>

        <PopoverContent p={5}>
          <PopoverArrow />
          <PopoverCloseButton />

          <Stack as='form' onSubmit={handleSubmit(onSubmit)} spacing={4}>
            <Input
              id='name'
              label='Name'
              error={errors.name}
              defaultValue={name}
              {...register('name')}
            />

            <Input
              type='email'
              id='email'
              label='Email'
              error={errors.email}
              defaultValue={email}
              {...register('email')}
            />

            <ButtonGroup display='flex' justifyContent='flex-end'>
              <Button variant='outline' isLoading={isSubmitting} onClick={onClose}>Cancel</Button>
              <Button type='submit' colorScheme='teal' isDisabled={false} isLoading={isSubmitting}>Save</Button>
            </ButtonGroup>
          </Stack>
        </PopoverContent>
      </Popover>
    </Flex>
  )
}
