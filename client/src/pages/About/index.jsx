export default function About() {
  return (
    <section className="container-x grid items-center gap-10 py-12 md:grid-cols-2">
     <img src="/about/kitchen.jpg" alt="Mətbəx" className="rounded-3xl" />
      <div>
        <h1 className="text-4xl font-extrabold">Haqqımızda</h1>
        <p className="mt-4 text-gray-600">Crispy House 2015-ci ildən təzə və keyfiyyətli fast food təqdim edir. Hər gün təzə məhsullardan, sərt keyfiyyət qaydaları ilə hazırlayırıq.</p>
        <p className="mt-3 text-gray-600">Məqsədimiz hər qonağa sürətli, dadlı və əlçatan xidmət göstərməkdir.</p>
      </div>
    </section>
  );
}
