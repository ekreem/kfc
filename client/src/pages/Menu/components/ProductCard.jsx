import ProtectedAction from '../../../components/ProtectedAction.jsx';
export default function ProductCard({ product }) {
  const addToCart = () => alert('Səbət sistemi tezliklə əlavə olunacaq'); // növbəti mərhələ
  return (
    <ProtectedAction onAuthed={addToCart} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:shadow-xl">
      <img src={product.image} alt={product.name} className="h-44 w-full object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-bold">{product.name}</h3>
        <p className="mt-1 line-clamp-2 min-h-[2.5rem] text-sm text-gray-500">{product.description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-xl font-extrabold text-brand">{product.price.toFixed(2)} ₼</span>
          <span className="btn !px-4 !py-1.5 text-sm">Səbətə at</span>
        </div>
      </div>
    </ProtectedAction>
  );
}
