import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext.jsx';
import { errMsg } from '../../services/api.js';
const fields = [['name', 'Ad Soyad', 'text'], ['email', 'Email', 'email'], ['phone', 'Telefon (+994...)', 'tel'], ['password', 'Şifrə (min. 6 simvol)', 'password']];
export default function Register() {
  const { register } = useAuth();
  const nav = useNavigate();
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '' });
  const [error, setError] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    try { await register(form); nav('/'); } catch (err) { setError(errMsg(err)); }
  };
  return (
    <div className="container-x flex justify-center py-16">
      <form onSubmit={submit} className="w-full max-w-md space-y-4 rounded-2xl border p-8 shadow-lg">
        <h1 className="text-3xl font-extrabold">Qeydiyyat</h1>
        {error && <p className="rounded bg-red-50 p-3 text-sm text-red-700">{error}</p>}
        {fields.map(([k, ph, type]) => <input key={k} className="input" type={type} placeholder={ph} required value={form[k]} onChange={(e) => setForm({ ...form, [k]: e.target.value })} />)}
        <button className="btn w-full">Qeydiyyatdan keç</button>
        <p className="text-center text-sm">Hesabın var? <Link to="/login" className="font-bold text-brand">Daxil ol</Link></p>
      </form>
    </div>
  );
}
