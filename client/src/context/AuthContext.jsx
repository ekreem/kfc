import { createContext, useContext, useEffect, useState } from 'react';
import api from '../services/api.js';
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => { api.get('/auth/me').then((r) => setUser(r.data)).catch(() => {}).finally(() => setLoading(false)); }, []);
  const login = async (data) => setUser((await api.post('/auth/login', data)).data);
  const register = async (data) => setUser((await api.post('/auth/register', data)).data);
  const logout = async () => { await api.post('/auth/logout'); setUser(null); };
  return <AuthContext.Provider value={{ user, loading, login, register, logout }}>{children}</AuthContext.Provider>;
}
