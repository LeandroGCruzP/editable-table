import { FormControl, FormLabel, Input as ChakraInput, InputProps } from '@chakra-ui/react'
import React from 'react'

interface InputBaseProps extends InputProps {
  id: string
  label: string
}

const InputBase: React.ForwardRefRenderFunction<HTMLInputElement, InputBaseProps> = (props, ref) => {
  const { id, label, ...rest } = props

  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <ChakraInput id={id} ref={ref} {...rest} />
    </FormControl>
  )
}

export const Input = React.forwardRef(InputBase)
