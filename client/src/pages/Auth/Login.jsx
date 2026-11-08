import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { errMsg } from '../../services/api.js';
export default function Login() {
  const { login } = useAuth();
  const nav = useNavigate();
  const from = useLocation().state?.from || '/';
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    try { await login(form); nav(from, { replace: true }); } catch (err) { setError(errMsg(err)); }
  };
  return (
    <div className="container-x flex justify-center py-16">
      <form onSubmit={submit} className="w-full max-w-md space-y-4 rounded-2xl border p-8 shadow-lg">
        <h1 className="text-3xl font-extrabold">Daxil ol</h1>
        {error && <p className="rounded bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        <input className="input" type="email" placeholder="Email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        <input className="input" type="password" placeholder="Şifrə" required value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} />
        <button className="btn w-full">Daxil ol</button>
        <p className="text-center text-sm">Hesabın yoxdur? <Link to="/register" className="font-bold text-brand">Qeydiyyatdan keç</Link></p>
      </form>
    </div>
  );
}
