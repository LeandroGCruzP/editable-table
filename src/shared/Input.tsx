import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps } from '@chakra-ui/react'
import React from 'react'
import { FieldError } from 'react-hook-form'

interface InputBaseProps extends InputProps {
  id: string
  label: string
  error?: FieldError
}

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (props, ref) => {
  const { id, label, error = null, ...rest } = props

  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={id}>{label}</FormLabel>

      <ChakraInput id={id} ref={ref} {...rest} />

      {!!error && <FormErrorMessage color='red.500'> {error.message} </FormErrorMessage>}
    </FormControl>
  )
}

export const Input = React.forwardRef(InputBase)
