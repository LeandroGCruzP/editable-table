import { Table as ChakraTable, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, EditablePreview, Editable, EditableInput, Flex } from '@chakra-ui/react'
import { queryGetUsers } from '../../services/users'
import { CustomControls } from '../CustomControls'
import { Menu } from '../Menu'
import { ModalNewUser } from '../Modal'
import { PopoverForm } from '../PopoverForm'
import { TableError } from './TableError'
import { TableSkeleton } from './TableSkeleton'
import { FormatDate } from '../../utils/FormatDate'

export const Table = () => {
  const { data, isLoading, isError } = queryGetUsers()

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
                <PopoverForm name={user.name} email={user.email} />
              </Td>
              <Td>
                <Editable px={2} defaultValue={String(user.age)} isPreviewFocusable={false}>
                  <Flex justify='space-between'>
                    <EditablePreview />
                    <EditableInput type='number' maxLength={2} minLength={1} pl={2} w='50px' mr={2}/>
                    <CustomControls />
                  </Flex>
                </Editable>
              </Td>
              <Td>{user.is_admin ? 'Admin' : 'Employer'}</Td>
              <Td>{FormatDate(user.created_at)}</Td>
              <Td>
                <Menu />
              </Td>
            </Tr>
          ))}
        </Tbody>

        <TableCaption>Table by friends 😄</TableCaption>
      </ChakraTable>
    </TableContainer>
  )
}
