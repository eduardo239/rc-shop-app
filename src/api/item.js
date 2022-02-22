import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3002/api',
});
export const createNewItem = (payload) =>
  api.post(`/create-new-product`, payload);
// TODO:
export const getUserById = (uid) => api.get(`/user/${uid}`);
export const getAllUsers = () => api.get(`/users`);
export const deleteUser = (id) => api.delete(`/user/delete/${id}`);
export const updateUser = (id, payload) => api.put(`/update/${id}`, payload);

const apiItem = {
  createNewItem,
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
};

export default apiItem;
