import { Table as ChakraTable, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, EditablePreview, Editable, EditableInput, Flex } from '@chakra-ui/react'
import { queryGetUsers } from '../../services/users'
import { Menu } from '../Menu'
import { ModalNewUser } from '../Modal'
import { PopoverForm } from '../PopoverForm'
import { TableError } from './TableError'
import { TableSkeleton } from './TableSkeleton'
import { FormatDate } from '../../utils/FormatDate'
import { EditableForm } from '../EditableForm'

export const Table = () => {
  const { data, isLoading, isError, refetch } = queryGetUsers()

  if(isLoading) {
    return <TableSkeleton />
  }

  if(isError) {
    return <TableError />
  }

  return (
    <TableContainer minWidth={850} >
      <ChakraTable variant='simple'>
        <Thead>
          <Tr>
            <Th minW='50px'>ID</Th>
            <Th minW='250px'>User</Th>
            <Th minW='200px'>Age</Th>
            <Th minW='100px'>Admin</Th>
            <Th minW='250px'>Created</Th>
            <Th minW='50px'>
              <ModalNewUser/>
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {data?.data?.map(user => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>
                <PopoverForm id={user.id} name={user.name} email={user.email} onFetch={refetch} />
              </Td>
              <Td>
                <EditableForm age={String(user.age)} />
              </Td>
              <Td>{user.is_admin ? 'Admin' : 'Employer'}</Td>
              <Td>{FormatDate(user.created_at)}</Td>
              <Td>
                <Menu />
              </Td>
            </Tr>
          ))}
        </Tbody>

        <TableCaption>Table by friends</TableCaption>
      </ChakraTable>
    </TableContainer>
  )
}
