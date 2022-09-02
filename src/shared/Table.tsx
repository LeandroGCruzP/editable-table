import { Table as ChakraTable, TableCaption, TableContainer, Tbody, Td, Text, Th, Thead, Tr } from '@chakra-ui/react'
import React from 'react'
import { users } from '../mock/tableDados'
import { Menu } from './Menu'

export const Table = () => {
  return (
    <TableContainer minWidth={850} >
      <ChakraTable variant='simple'>
        <TableCaption>Table by friends</TableCaption>

        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Age</Th>
            <Th>Admin</Th>
            <Th>Created</Th>
            <Th />
          </Tr>
        </Thead>

        <Tbody>
          {users?.map(user => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>
                <Text>{user.name}</Text>
                <Text fontSize='xs' color='whiteAlpha.600' >{user.email}</Text>
              </Td>
              <Td>{user.age}</Td>
              <Td>{user.is_admin ? 'Admin' : 'Employer'}</Td>
              <Td>{user.created_at}</Td>
              <Td> <Menu /> </Td>
            </Tr>
          ))}
        </Tbody>
      </ChakraTable>
    </TableContainer>
  )
}
