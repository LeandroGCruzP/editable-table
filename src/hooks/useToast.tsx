import { CreateToastFnReturn, useToast as useToastChakra } from '@chakra-ui/react'
import { createContext, ReactNode, useContext } from 'react'

interface ToastContextData {
	toastError: CreateToastFnReturn
	toastInfo: CreateToastFnReturn
	toastSuccess: CreateToastFnReturn
}

interface ToastProviderProps {
	children: ReactNode
}

export const ToastContext = createContext({} as ToastContextData)

export function ToastProvider({ children }: ToastProviderProps) {
	const toastError = useToastChakra({
		title: 'An error ocurred',
		position: 'top-right',
		duration: 2000,
		isClosable: true,
		status: 'error',
	})
	const toastInfo = useToastChakra({
		title: 'Operation refused',
		position: 'top-right',
		duration: 2000,
		isClosable: true,
		status: 'info',
	})
	const toastSuccess = useToastChakra({
		title: 'Operation performed',
		position: 'top-right',
		duration: 2000,
		isClosable: true,
		status: 'success',
	})

	return (
		<ToastContext.Provider value={{ toastError, toastInfo, toastSuccess }}>{children}</ToastContext.Provider>
	)
}

export const useToast = () => useContext(ToastContext)
