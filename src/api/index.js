import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api-user',
});
export const createNewUser = (payload) => api.post(`/create-new-user`, payload);
export const getUserById = (uid) => api.get(`/user/${uid}`);
export const getAllUsers = () => api.get(`/users`);
export const deleteUser = (id) => api.delete(`/delete-user/${id}`);
export const getUserByUsername = (username) => api.get(`/username/${username}`);
export const updateUser = (id, payload) =>
  api.put(`/update-user/${id}`, payload);

const apis = {
  createNewUser,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  getUserByUsername,
};

export default apis;
