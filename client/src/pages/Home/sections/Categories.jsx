import { Link } from 'react-router-dom';
const cats = ['Burger', 'Toyuq', 'Combo', 'Qəlyanaltı', 'İçki', 'Desert'];
export default function Categories() {
  return (
    <section className="container-x py-14">
      <h2 className="mb-6 text-3xl font-extrabold">Nə yemək istəyirsən?</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-6">
        {cats.map((c) => (
          <Link key={c} to={`/menu?category=${encodeURIComponent(c)}`} className="overflow-hidden rounded-2xl bg-cream text-center font-bold transition hover:-translate-y-1 hover:shadow-lg">
            <img src={`https://picsum.photos/seed/${encodeURIComponent(c)}/300/200`} alt={c} className="h-24 w-full object-cover" />
            <p className="py-3">{c}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
