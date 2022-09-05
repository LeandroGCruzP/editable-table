import { Skeleton, Td, Tr, Table as ChakraTable, TableCaption, TableContainer, Tbody, Th, Thead } from '@chakra-ui/react'

export function TableSkeleton() {
  return (
    <TableContainer minWidth={850} >
      <ChakraTable variant='simple'>
        <TableCaption>Table by friends</TableCaption>

        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>User</Th>
            <Th>Age</Th>
            <Th>Admin</Th>
            <Th>Created</Th>
            <Th />
          </Tr>
        </Thead>

        <Tbody>
          <Tr>
            <Td>
              <Skeleton borderRadius={5} height='40px' />
            </Td>
            <Td>
              <Skeleton borderRadius={5} height='40px' />
            </Td>
            <Td>
              <Skeleton borderRadius={5} height='40px' />
            </Td>
            <Td>
              <Skeleton borderRadius={5} height='40px' />
            </Td>
            <Td>
              <Skeleton borderRadius={5} height='40px' />
            </Td>
            <Td>
              <Skeleton borderRadius={5} height='40px' />
            </Td>
          </Tr>
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}
