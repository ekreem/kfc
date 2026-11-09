import { useCart } from '../../../context/CartContext.jsx';

export default function CartItem({ item }) {
  const { setQty, remove } = useCart();
  const btn = 'flex h-8 w-8 items-center justify-center rounded-full bg-white font-bold shadow hover:bg-gray-100';
  return (
    <div className="flex items-center gap-4 rounded-2xl border p-4">
      <div className="flex h-20 w-24 shrink-0 items-center justify-center rounded-lg bg-orange-50">
        <img src={`/api/products/${item._id}/image`} alt={item.name} className="h-full w-full object-contain" />
      </div>
      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-sm text-gray-500">{item.price.toFixed(2)} ₼</p>
        <div className="mt-2 flex items-center gap-3">
          <button className={btn} onClick={() => setQty(item._id, item.quantity - 1)} aria-label="Azalt">−</button>
          <span className="w-6 text-center font-bold">{item.quantity}</span>
          <button className={btn} onClick={() => setQty(item._id, item.quantity + 1)} aria-label="Artır">+</button>
        </div>
      </div>
      <div className="text-right">
        <p className="font-extrabold text-brand">{(item.price * item.quantity).toFixed(2)} ₼</p>
        <button onClick={() => remove(item._id)} className="mt-2 text-sm font-bold text-red-600 hover:underline">Sil</button>
      </div>
    </div>
  );
}