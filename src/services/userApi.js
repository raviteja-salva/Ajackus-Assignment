import axios from 'axios';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const userApi = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchUsersList = async (page, limit) => {
  try {
    const response = await userApi.get(`/users`, {
      params: {
        _page: page,
        _limit: limit,
      },
    });
    
    return response.data.map(user => ({
      id: user.id,
      firstName: user.name.split(' ')[0],
      lastName: user.name.split(' ')[1] || '',
      email: user.email,
      department: user.company.name,
    }));
  } catch (error) {
    throw new Error('Failed to fetch users');
  }
};

export const createUser = async (userData) => {
  try {
    const response = await userApi.post('/users', userData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create user');
  }
};

export const updateUser = async (userId, userData) => {
  try {
    const response = await userApi.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw new Error('Failed to update user');
  }
};

export const deleteUser = async (userId) => {
  try {
    await userApi.delete(`/users/${userId}`);
    return true;
  } catch (error) {
    throw new Error('Failed to delete user');
  }
};

export default {
  fetchUsersList,
  createUser,
  updateUser,
  deleteUser,
};