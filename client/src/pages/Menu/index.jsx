import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import api from '../../services/api.js';
import CategoryTabs from './components/CategoryTabs.jsx';
import ProductCard from './components/ProductCard.jsx';
export default function Menu() {
  const [params, setParams] = useSearchParams();
  const category = params.get('category') || '';
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    api.get('/products', { params: category ? { category } : {} }).then((r) => setProducts(r.data)).finally(() => setLoading(false));
  }, [category]);
  return (
    <section className="container-x py-10">
      <h1 className="mb-6 text-4xl font-extrabold">Menyu</h1>
      <CategoryTabs active={category} onChange={(c) => setParams(c ? { category: c } : {})} />
      {loading ? <p className="py-10">Yüklənir...</p> : products.length === 0 ? <p className="py-10 text-gray-500">Bu kateqoriyada hələ məhsul yoxdur.</p> : (
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{products.map((p) => <ProductCard key={p._id} product={p} />)}</div>
      )}
    </section>
  );
}
