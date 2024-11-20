import React, { useState, useEffect } from 'react';
import { Container, Card, LoadingSpinner, ErrorMessage } from './UserManagement.Style';
import Header from '../Header/Header';
import UserForm from '../UserForm/UserForm';
import UserTable from '../UserTable/UserTable';
import Pagination from '../Pagination/Pagination';
import { fetchUsersList, createUser, updateUser, deleteUser } from '../../services/userApi';

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    department: ''
  });

  const usersPerPage = 5;

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  const fetchUsers = async () => {
    try {
      const data = await fetchUsersList(currentPage, usersPerPage);
      setUsers(data);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
      setLoading(false);
    }
  };

  const validateForm = () => {
    const { firstName, lastName, email, department } = formData;
    if (!firstName || !lastName || !email || !department) {
      setError('Please fill in all fields');
      return false;
    }
    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      if (editingUser) {
        await updateUser(editingUser.id, formData);
        setUsers(users.map(user => 
          user.id === editingUser.id ? { ...formData, id: user.id } : user
        ));
      } else {
        const data = await createUser(formData);
        setUsers([...users, { ...formData, id: data.id }]);
      }
      
      setShowForm(false);
      setEditingUser(null);
      setFormData({ firstName: '', lastName: '', email: '', department: '' });
      setError(null);
    } catch (err) {
      setError('Failed to save user. Please try again.');
    }
  };

  const handleDelete = async (userId) => {
    try {
      await deleteUser(userId);
      setUsers(users.filter(user => user.id !== userId));
    } catch (err) {
      setError('Failed to delete user. Please try again.');
    }
  };

  const handleEdit = (user) => {
    setEditingUser(user);
    setFormData({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      department: user.department
    });
    setShowForm(true);
    setError(null);
  };

  const handleAddUser = () => {
    setShowForm(true);
    setEditingUser(null);
    setFormData({ firstName: '', lastName: '', email: '', department: '' });
    setError(null);
  };

  return (
    <Container>
      <Card>
        <Header onAddUser={handleAddUser} />
        
        {error && <ErrorMessage>{error}</ErrorMessage>}

        {showForm && (
          <UserForm
            formData={formData}
            onChange={setFormData}
            onSubmit={handleSubmit}
            editingUser={editingUser}
          />
        )}

        {loading ? (
          <LoadingSpinner>Loading...</LoadingSpinner>
        ) : (
          <UserTable
            users={users}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}

        <Pagination
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          isNextDisabled={users.length < usersPerPage}
        />
      </Card>
    </Container>
  );
};

export default UserManagement;