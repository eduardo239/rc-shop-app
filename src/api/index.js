import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api-user',
});
// http://localhost:3002/api-user/create-new-user
export const createNewUser = (payload) => api.post(`/create-new-user`, payload);
// TODO:
export const getAllUsers = () => api.get(`/user/all`);
export const deleteUser = (id) => api.delete(`/user/delete/${id}`);
export const updateUser = (id, payload) => api.put(`/update/${id}`, payload);
export const getUserById = (id) => api.get(`/user/${id}`);

const apis = {
  createNewUser,
  getAllUsers,
  updateUser,
  deleteUser,
};

export default apis;
