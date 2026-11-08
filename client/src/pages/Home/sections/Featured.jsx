import { useEffect, useState } from 'react';
import api from '../../../services/api.js';
import ProductCard from '../../Menu/components/ProductCard.jsx';
export default function Featured() {
  const [items, setItems] = useState([]);
  useEffect(() => { api.get('/products').then((r) => setItems(r.data.slice(0, 4))).catch(() => {}); }, []);
  if (!items.length) return null;
  return (
    <section className="container-x pb-14">
      <h2 className="mb-6 text-3xl font-extrabold">Ən yeni məhsullar</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{items.map((p) => <ProductCard key={p._id} product={p} />)}</div>
    </section>
  );
}
