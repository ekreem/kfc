import { Link } from 'react-router-dom';
import ProtectedAction from '../../../components/ProtectedAction.jsx';
export default function Hero() {
  return (
    <section className="bg-brand text-white">
      <div className="container-x grid items-center gap-8 py-14 md:grid-cols-2">
        <div>
          <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">Qızardılmış, qıtır-qıtır, dərhal.</h1>
          <p className="mt-4 max-w-md text-lg text-white/90">Hər gün təzə hazırlanan toyuq və burgerlər. Menyuya bax, hesab aç, sifariş ver.</p>
          <div className="mt-8 flex gap-3">
            <Link to="/menu" className="inline-flex rounded-full bg-white px-6 py-2.5 font-bold text-brand hover:bg-cream">Menyuya bax</Link>
            <ProtectedAction><span className="btn-outline !border-white !text-white hover:!bg-white hover:!text-brand">İndi sifariş et</span></ProtectedAction>
          </div>
        </div>
        <img src="https://picsum.photos/seed/friedchicken/700/480" alt="Qızardılmış toyuq" className="rounded-3xl shadow-2xl" />
      </div>
    </section>
  );
}
