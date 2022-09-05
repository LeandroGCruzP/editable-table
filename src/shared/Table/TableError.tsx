import { Alert, AlertDescription, AlertIcon, AlertTitle, Box } from '@chakra-ui/react'

export function TableError() {
  return (
    <Alert status='warning'>
      <AlertIcon />

      <Box>
        <AlertTitle>Oh no!</AlertTitle>

        <AlertDescription>
          You haven't created any users yet. Create a user now!
        </AlertDescription>
      </Box>
    </Alert>
  )
}
