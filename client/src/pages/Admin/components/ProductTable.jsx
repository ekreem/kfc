export default function ProductTable({ products, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-2xl border">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50">
          <tr><th className="p-3">Şəkil</th><th>Ad</th><th>Kateqoriya</th><th>Qiymət</th><th></th></tr>
        </thead>
        <tbody>
          {products.map((p) => (
            <tr key={p._id} className="border-t">
              <td className="p-3">
                <img src={`/api/products/${p._id}/image?v=${new Date(p.updatedAt).getTime()}`} alt={p.name} className="h-12 w-16 rounded object-cover" />
              </td>
              <td className="font-bold">{p.name}</td>
              <td>{p.category}</td>
              <td>{p.price.toFixed(2)} ₼</td>
              <td className="space-x-2 whitespace-nowrap">
                <button onClick={() => onEdit(p)} className="rounded-full bg-blue-100 px-4 py-1 font-bold text-blue-700 hover:bg-blue-200">Redaktə</button>
                <button onClick={() => onDelete(p._id)} className="rounded-full bg-red-100 px-4 py-1 font-bold text-red-700 hover:bg-red-200">Sil</button>
              </td>
            </tr>
          ))}
          {!products.length && (
            <tr><td colSpan="5" className="p-6 text-center text-gray-500">Hələ məhsul yoxdur. Yuxarıdakı formdan əlavə edin.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}