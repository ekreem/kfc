export default function UsersTable({ users }) {
  return (
    <div className="overflow-x-auto rounded-2xl border">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50"><tr><th className="p-3">Ad</th><th>Email</th><th>Telefon</th><th>Rol</th><th>Qeydiyyat</th></tr></thead>
        <tbody>
          {users.map((u) => (
            <tr key={u._id} className="border-t">
              <td className="p-3 font-bold">{u.name}</td><td>{u.email}</td><td>{u.phone}</td><td>{u.role}</td>
              <td>{new Date(u.createdAt).toLocaleDateString('az-AZ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
