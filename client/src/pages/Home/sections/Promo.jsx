import ProtectedAction from '../../../components/ProtectedAction.jsx';
export default function Promo() {
  return (
    <section className="container-x">
      <div className="flex flex-col items-center justify-between gap-4 rounded-3xl bg-ink p-10 text-white md:flex-row">
        <div><h2 className="text-3xl font-extrabold">Ailə combosu</h2><p className="mt-2 text-white/80">Dörd nəfərlik toyuq, qəlyanaltı və içki bir qiymətə.</p></div>
        <ProtectedAction><span className="btn">Kampaniyadan yararlan</span></ProtectedAction>
      </div>
    </section>
  );
}
