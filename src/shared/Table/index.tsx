import { Table as ChakraTable, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import { queryUsers } from '../../services/users'
import { TableError } from './TableError'
import { Menu } from '../Menu'
import { PopoverForm } from '../PopoverForm'
import { TableSkeleton } from './TableSkeleton'

export const Table = () => {
  const { list: { data, isLoading, isError } } = queryUsers()

  if(isLoading) {
    return <TableSkeleton />
  }

  if(!isError) {
    return <TableError />
  }

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
          {data?.data?.map(user => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>
                <PopoverForm name={user.name} email={user.email} />
              </Td>
              <Td>{user.age}</Td>
              <Td>{user.is_admin ? 'Admin' : 'Employer'}</Td>
              <Td>{user.created_at}</Td>
              <Td>
                <Menu />
              </Td>
            </Tr>
        ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}
