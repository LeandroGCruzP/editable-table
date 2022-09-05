import { Button, ButtonGroup, Flex, IconButton, Popover, PopoverArrow, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { Icons } from '../assets/icons'
import { Input } from './Input'

interface PopoverFormProps {
  name: string
  email: string
}

export const PopoverForm = (props: PopoverFormProps) => {
  const { name, email } = props
  const { onOpen, onClose, isOpen } = useDisclosure()
  const firstFieldRef = React.useRef(null)

  return (
    <Flex justify='space-between' >
      <Flex flexDir='column' >
        <Text>{name}</Text>
        <Text fontSize='xs'>{email}</Text>
      </Flex>

      <Popover
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
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

          <Stack spacing={4}>
            <Input label='Name' id='name' ref={firstFieldRef} defaultValue={name} />
            <Input type='email' label='Email' id='email' defaultValue={email} />

            <ButtonGroup display='flex' justifyContent='flex-end'>
              <Button variant='outline' onClick={onClose}>Cancel</Button>
              <Button isDisabled colorScheme='teal'>Save</Button>
            </ButtonGroup>
          </Stack>
        </PopoverContent>
      </Popover>
    </Flex>
  )
}
