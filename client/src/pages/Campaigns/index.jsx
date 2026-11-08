import ProtectedAction from '../../components/ProtectedAction.jsx';
const list = [['Tələbə günü', 'Hər çərşənbə xüsusi combo qiymətə.'], ['Ailə paketi', '8 parça toyuq və 2 böyük içki.'], ['Gecə endirimi', 'Saat 22:00-dan sonra hər burger üçün hədiyyə içki.']];
export default function Campaigns() {
  return (
    <section className="container-x py-10">
      <h1 className="mb-8 text-4xl font-extrabold">Kampaniyalar</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {list.map(([t, d], i) => (
          <ProtectedAction key={t} className="overflow-hidden rounded-2xl bg-cream transition hover:shadow-xl">
            <img src={`https://picsum.photos/seed/promo${i}/600/360`} alt={t} className="h-48 w-full object-cover" />
            <div className="p-5"><h3 className="text-xl font-bold">{t}</h3><p className="mt-2 text-gray-600">{d}</p></div>
          </ProtectedAction>
        ))}
      </div>
    </section>
  );
}
