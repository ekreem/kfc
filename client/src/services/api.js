import axios from 'axios';
const api = axios.create({ baseURL: '/api', withCredentials: true });
export const errMsg = (e) => e.response?.data?.message || 'Xəta baş verdi';
export default api;
