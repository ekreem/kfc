import ProtectedAction from '../../components/ProtectedAction.jsx';
export default function Contact() {
  return (
    <section className="container-x grid gap-10 py-12 md:grid-cols-2">
      <div>
        <h1 className="text-4xl font-extrabold">Əlaqə</h1>
        <ul className="mt-6 space-y-3 text-gray-700"><li>📍 Bakı, Nizami küçəsi 10</li><li>📞 +994 12 000 00 00</li><li>✉️ info@crispyhouse.az</li><li>🕘 Hər gün 10:00 – 23:00</li></ul>
      </div>
      <div className="space-y-3 rounded-2xl bg-cream p-6">
        <input className="input" placeholder="Adınız" /><input className="input" placeholder="Email" />
        <textarea className="input h-28" placeholder="Mesajınız" />
        <ProtectedAction><span className="btn">Göndər</span></ProtectedAction>
      </div>
    </section>
  );
}
