import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
import { useCart } from '../context/CartContext.jsx';

const links = [
  ['/', 'Ana səhifə'],
  ['/menu', 'Menyu'],
  ['/kampaniyalar', 'Kampaniyalar'],
  ['/haqqimizda', 'Haqqımızda'],
  ['/elaqe', 'Əlaqə'],
];

export default function Navbar() {
  const { user, logout } = useAuth();
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  const cls = ({ isActive }) => `font-bold transition hover:text-brand ${isActive ? 'text-brand' : ''}`;

  return (
    <header className="sticky top-0 z-50 border-b-4 border-brand bg-white">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-2xl font-extrabold text-brand">Crispy House</Link>
        <nav className={`${open ? 'flex' : 'hidden'} absolute left-0 top-16 w-full flex-col gap-4 bg-white p-4 shadow md:static md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:p-0 md:shadow-none`}>
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === '/'} className={cls} onClick={() => setOpen(false)}>{label}</NavLink>
          ))}

          {user && (
            <NavLink to="/cart" className={cls} onClick={() => setOpen(false)}>
              🛒 Səbət
              {count > 0 && <span className="ml-1 rounded-full bg-brand px-2 py-0.5 text-xs text-white">{count}</span>}
            </NavLink>
          )}

          {user?.role === 'admin' && <NavLink to="/admin" className={cls}>Admin</NavLink>}

          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm">{user.name}</span>
              <button onClick={logout} className="btn-outline !py-1.5">Çıxış</button>
            </div>
          ) : (
            <Link to="/login" className="btn" onClick={() => setOpen(false)}>Daxil ol / Qeydiyyat</Link>
          )}
        </nav>
        <button className="text-3xl md:hidden" onClick={() => setOpen(!open)} aria-label="Menyu">☰</button>
      </div>
    </header>
  );
}