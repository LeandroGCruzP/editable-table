import { CreateToastFnReturn, useToast as useToastChakra } from '@chakra-ui/react'
import { createContext, ReactNode, useContext } from 'react'

interface ToastContextData {
	toastError: CreateToastFnReturn
	toastSuccess: CreateToastFnReturn
}

interface ToastProviderProps {
	children: ReactNode
}

export const ToastContext = createContext({} as ToastContextData)

export function ToastProvider({ children }: ToastProviderProps) {
	const toastError = useToastChakra({
		title: 'Um erro ocorreu',
		position: 'top-right',
		duration: 2000,
		isClosable: true,
		status: 'error',
	})
	const toastSuccess = useToastChakra({
		title: 'Operação realizada',
		position: 'top-right',
		duration: 2000,
		isClosable: true,
		status: 'success',
	})

	return (
		<ToastContext.Provider value={{ toastError, toastSuccess }}>{children}</ToastContext.Provider>
	)
}

export const useToast = () => useContext(ToastContext)
