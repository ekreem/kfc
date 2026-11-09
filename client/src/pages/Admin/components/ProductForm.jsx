import { useEffect, useState } from 'react';
import api, { errMsg } from '../../../services/api.js';
import { CATEGORIES } from '../../Menu/components/CategoryTabs.jsx';

const empty = { name: '', description: '', price: '', category: CATEGORIES[0] };

export default function ProductForm({ editing, onDone, onCancel }) {
  const [form, setForm] = useState(empty);
  const [file, setFile] = useState(null);
  const [fileKey, setFileKey] = useState(0);
  const [error, setError] = useState('');

  useEffect(() => {
    setForm(editing
      ? { name: editing.name, description: editing.description || '', price: editing.price, category: editing.category }
      : empty);
    setFile(null); setFileKey((k) => k + 1); setError('');
  }, [editing]);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!editing && !file) return setError('Şəkil seçin');
    const fd = new FormData();
    Object.entries(form).forEach(([k, v]) => fd.append(k, v));
    if (file) fd.append('image', file);
    try {
      if (editing) await api.put(`/products/${editing._id}`, fd);
      else await api.post('/products', fd);
      setForm(empty); setFile(null); setFileKey((k) => k + 1); setError('');
      onDone();
    } catch (err) { setError(errMsg(err)); }
  };

  return (
    <form onSubmit={submit} className="mb-8 grid gap-3 rounded-2xl bg-cream p-6 md:grid-cols-2">
      <h2 className="text-xl font-bold md:col-span-2">{editing ? `Redaktə: ${editing.name}` : 'Yeni məhsul əlavə et'}</h2>
      {error && <p className="text-sm text-red-700 md:col-span-2">{error}</p>}
      <input className="input" placeholder="Ad" required value={form.name} onChange={set('name')} />
      <input className="input" type="number" step="0.01" min="0" placeholder="Qiymət (₼)" required value={form.price} onChange={set('price')} />
      <select className="input" value={form.category} onChange={set('category')}>
        {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
      </select>
      <div>
        <input key={fileKey} className="input bg-white" type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
        {editing && <p className="mt-1 text-xs text-gray-500">Şəkli dəyişmək istəmirsənsə, boş burax.</p>}
      </div>
      <textarea className="input md:col-span-2" placeholder="Təsvir" value={form.description} onChange={set('description')} />
      <div className="flex gap-3 md:col-span-2">
        <button className="btn flex-1">{editing ? 'Yadda saxla' : 'Əlavə et'}</button>
        {editing && <button type="button" onClick={onCancel} className="btn-outline">Ləğv et</button>}
      </div>
    </form>
  );
}