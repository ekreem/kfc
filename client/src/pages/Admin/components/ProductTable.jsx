export default function ProductTable({ products, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-2xl border">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50"><tr><th className="p-3">Şəkil</th><th>Ad</th><th>Kateqoriya</th><th>Qiymət</th><th></th></tr></thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-t">
              <td className="p-3"><img src={p.image} alt="" className="h-12 w-16 rounded object-cover" /></td>
              <td className="font-bold">{p.name}</td><td>{p.category}</td><td>{p.price.toFixed(2)} ₼</td>
              <td><button onClick={() => onDelete(p._id)} className="rounded-full bg-red-100 px-4 py-1 font-bold text-red-700 hover:bg-red-200">Sil</button></td>
            </tr>
          ))}
          {!products.length && <tr><td colSpan="5" className="p-6 text-center text-gray-500">Hələ məhsul yoxdur. Yuxarıdakı formdan əlavə edin.</td></tr>}
        </tbody>
      </table>
    </div>
  );
}
