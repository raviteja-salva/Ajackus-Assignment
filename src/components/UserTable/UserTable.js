import React from 'react';
import { Table, Th, Td, Tr, ActionButton } from './UserTable.Style';

const UserTable = ({ users, onEdit, onDelete }) => (
  <Table>
    <thead>
      <tr>
        <Th>ID</Th>
        <Th>First Name</Th>
        <Th>Last Name</Th>
        <Th>Email</Th>
        <Th>Department</Th>
        <Th>Actions</Th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <Tr key={user.id}>
          <Td>{user.id}</Td>
          <Td>{user.firstName}</Td>
          <Td>{user.lastName}</Td>
          <Td>{user.email}</Td>
          <Td>{user.department}</Td>
          <Td>
            <ActionButton onClick={() => onEdit(user)}>
              Edit
            </ActionButton>
            <ActionButton variant="delete" onClick={() => onDelete(user.id)}>
              Delete
            </ActionButton>
          </Td>
        </Tr>
      ))}
    </tbody>
  </Table>
);

export default UserTable;