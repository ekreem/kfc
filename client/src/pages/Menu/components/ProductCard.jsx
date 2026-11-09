import { useState } from 'react';
import ProtectedAction from '../../../components/ProtectedAction.jsx';
import { useCart } from '../../../context/CartContext.jsx';

export default function ProductCard({ product }) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  const addToCart = () => {
    add(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1200);
  };

  return (
    <ProtectedAction onAuthed={addToCart} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-xl">
      <div className="flex h-44 items-center justify-center bg-orange-50">
        <img src={`/api/products/${product._id}/image`} alt={product.name} className="h-full w-full object-contain object-center" />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-gray-500">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-extrabold text-brand">{product.price.toFixed(2)} ₼</span>
          <span className={`btn !px-4 !py-1.5 text-sm ${added ? '!bg-green-600' : ''}`}>
            {added ? 'Əlavə olundu ✓' : 'Səbətə at'}
          </span>
        </div>
      </div>
    </ProtectedAction>
  );
}