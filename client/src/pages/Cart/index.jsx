import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import CartItem from './components/CartItem.jsx';

export default function Cart() {
  const { items, total, count, clear } = useCart();

  if (!items.length) {
    return (
      <section className="container-x py-20 text-center">
        <p className="text-6xl">🛒</p>
        <h1 className="mt-4 text-3xl font-extrabold">Səbətin boşdur</h1>
        <p className="mt-2 text-gray-500">Menyudan istədiyin məhsulu seç.</p>
        <Link to="/menu" className="btn mt-6">Menyuya get</Link>
      </section>
    );
  }

  return (
    <section className="container-x py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-4xl font-extrabold">Səbət ({count})</h1>
        <button onClick={() => confirm('Səbət təmizlənsin?') && clear()} className="text-sm font-bold text-red-600 hover:underline">Səbəti təmizlə</button>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {items.map((item) => <CartItem key={item._id} item={item} />)}
        </div>
        <aside className="h-fit rounded-2xl bg-cream p-6">
          <h2 className="text-xl font-bold">Sifariş xülasəsi</h2>
          <div className="mt-4 flex justify-between text-gray-600"><span>Məhsul sayı</span><span>{count}</span></div>
          <div className="mt-2 flex justify-between border-t pt-4 text-xl font-extrabold"><span>Cəmi</span><span className="text-brand">{total.toFixed(2)} ₼</span></div>
          <button disabled className="btn mt-6 w-full">Ödəniş tezliklə</button>
        </aside>
      </div>
    </section>
  );
}