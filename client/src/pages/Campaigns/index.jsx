import ProtectedAction from '../../components/ProtectedAction.jsx';

const list = [
  { title: 'Tələbə günü', text: 'Hər çərşənbə xüsusi combo qiymətə.', image: '/campaigns/student.jpg' },
  { title: 'Ailə paketi', text: '8 parça toyuq və 2 böyük içki.', image: '/campaigns/family.jpg' },
  { title: 'Gecə endirimi', text: 'Saat 22:00-dan sonra hər burger üçün hədiyyə içki.', image: '/campaigns/night.jpg' },
];

export default function Campaigns() {
  return (
    <section className="container-x py-10">
      <h1 className="mb-8 text-4xl font-extrabold">Kampaniyalar</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {list.map((c) => (
          <ProtectedAction key={c.title} className="overflow-hidden rounded-2xl bg-cream transition hover:shadow-xl">
            <div className="flex h-48 items-center justify-center bg-orange-50">
  <img src={c.image} alt={c.title} className="h-full w-full object-contain object-center" />
</div>
            <div className="p-5">
              <h3 className="text-xl font-bold">{c.title}</h3>
              <p className="mt-2 text-gray-600">{c.text}</p>
            </div>
          </ProtectedAction>
        ))}
      </div>
    </section>
  );
}