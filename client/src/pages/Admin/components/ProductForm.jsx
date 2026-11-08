import { useState } from 'react';
import api, { errMsg } from '../../../services/api.js';
import { CATEGORIES } from '../../Menu/components/CategoryTabs.jsx';
const empty = { name: '', description: '', price: '', category: CATEGORIES[0] };
export default function ProductForm({ onCreated }) {
  const [form, setForm] = useState(empty);
  const [file, setFile] = useState(null);
  const [error, setError] = useState('');
  const submit = async (e) => {
    e.preventDefault();
    if (!file) return setError('Şəkil seçin');
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    fd.append('image', file);
    const formEl = e.target;
    try { await api.post('/products', fd); setForm(empty); setFile(null); formEl.reset(); setError(''); onCreated(); }
    catch (err) { setError(errMsg(err)); }
  };
  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  return (
    <form onSubmit={submit} className="mb-8 grid gap-3 rounded-2xl bg-cream p-6 md:grid-cols-2">
      <h2 className="text-xl font-bold md:col-span-2">Yeni məhsul əlavə et</h2>
      {error && <p className="text-sm text-red-700 md:col-span-2">{error}</p>}
      <input className="input" placeholder="Ad" required value={form.name} onChange={set('name')} />
      <input className="input" type="number" step="0.01" min="0" placeholder="Qiymət (₼)" required value={form.price} onChange={set('price')} />
      <select className="input" value={form.category} onChange={set('category')}>{CATEGORIES.map((c) => <option key={c}>{c}</option>)}</select>
      <input className="input bg-white" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <textarea className="input md:col-span-2" placeholder="Təsvir" value={form.description} onChange={set('description')} />
      <button className="btn md:col-span-2">Əlavə et</button>
    </form>
  );
}
