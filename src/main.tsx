import { ChakraProvider } from '@chakra-ui/react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { theme } from './styles/theme'
import { ToastProvider } from './hooks/useToast'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './services/queryClient'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient} >
    <ChakraProvider theme={theme} >
      <ToastProvider>
        <App />
      </ToastProvider>
    </ChakraProvider>

    <ReactQueryDevtools />
  </QueryClientProvider>
)
