import { useEffect, useState } from 'react';
import api from '../../services/api.js';
import ProductForm from './components/ProductForm.jsx';
import ProductTable from './components/ProductTable.jsx';
import UsersTable from './components/UsersTable.jsx';
export default function Admin() {
  const [tab, setTab] = useState('products');
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const load = () => { api.get('/products').then((r) => setProducts(r.data)); api.get('/users').then((r) => setUsers(r.data)); };
  useEffect(load, []);
  const remove = async (id) => { if (confirm('Məhsul silinsin?')) { await api.delete(`/products/${id}`); load(); } };
  const tabCls = (t) => `rounded-full px-5 py-2 font-bold ${tab === t ? 'bg-brand text-white' : 'bg-cream'}`;
  return (
    <section className="container-x py-10">
      <h1 className="mb-6 text-4xl font-extrabold">Admin panel</h1>
      <div className="mb-6 flex gap-2">
        <button className={tabCls('products')} onClick={() => setTab('products')}>Məhsullar ({products.length})</button>
        <button className={tabCls('users')} onClick={() => setTab('users')}>İstifadəçilər ({users.length})</button>
      </div>
      {tab === 'products' ? <><ProductForm onCreated={load} /><ProductTable products={products} onDelete={remove} /></> : <UsersTable users={users} />}
    </section>
  );
}
