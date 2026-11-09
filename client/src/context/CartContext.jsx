import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext.jsx';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export function CartProvider({ children }) {
  const { user } = useAuth();
  const key = user ? `cart_${user._id}` : null;
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (!key) return setItems([]);
    try { setItems(JSON.parse(localStorage.getItem(key)) || []); } catch { setItems([]); }
  }, [key]);

  const update = (fn) => setItems((prev) => {
    const next = fn(prev);
    if (key) localStorage.setItem(key, JSON.stringify(next));
    return next;
  });

  const add = (p) => update((prev) =>
    prev.some((i) => i._id === p._id)
      ? prev.map((i) => (i._id === p._id ? { ...i, quantity: i.quantity + 1 } : i))
      : [...prev, { _id: p._id, name: p.name, price: p.price, category: p.category, quantity: 1 }]
  );
  const setQty = (id, q) => update((prev) =>
    q < 1 ? prev.filter((i) => i._id !== id) : prev.map((i) => (i._id === id ? { ...i, quantity: q } : i))
  );
  const remove = (id) => update((prev) => prev.filter((i) => i._id !== id));
  const clear = () => update(() => []);

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const total = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{ items, count, total, add, setQty, remove, clear }}>
      {children}
    </CartContext.Provider>
  );
}