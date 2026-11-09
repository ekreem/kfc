import { Link } from 'react-router-dom';
import { CATEGORIES } from '../../Menu/components/CategoryTabs.jsx';

// Yeni kateqoriya əlavə etsən, şəkil faylını public/categories qovluğuna at və buraya yaz
const FILES = {
  Sendviçlər: 'sendwich.jpg',
  Burger: 'burger.jpg',
  Toyuq: 'chicken.jpg',
  Combo: 'combo.jpg',
  Qəlyanaltı: 'snacks.jpg',
  İçki: 'drinks.jpg',
  Desert: 'dessert.jpg',
  Souslar: 'saus.jpg',
  Basketlər: 'basket6.jpg'
};

export default function Categories() {
  return (
    <section className="container-x py-14">
      <h2 className="mb-6 text-3xl font-extrabold">Nə yemək istəyirsən?</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {CATEGORIES.map((c) => (
          <Link
            key={c}
            to={`/menu?category=${encodeURIComponent(c)}`}
            className="overflow-hidden rounded-2xl bg-cream text-center font-bold transition hover:-translate-y-1 hover:shadow-lg"
          >
            {FILES[c] ? (
              <img
                src={`/categories/${FILES[c]}`}
                alt={c}
                className="h-24 w-full object-cover"
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
            ) : (
              <div className="flex h-24 items-center justify-center bg-orange-100 text-4xl">🍽️</div>
            )}
            <p className="py-3">{c}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}