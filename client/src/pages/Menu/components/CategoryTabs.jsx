export const CATEGORIES = ['Burger', 'Toyuq', 'Combo', 'Qəlyanaltı', 'İçki', 'Desert'];
export default function CategoryTabs({ active, onChange }) {
  const tab = (c, label) => (
    <button key={label} onClick={() => onChange(c)} className={`whitespace-nowrap rounded-full px-5 py-2 font-bold transition ${active === c ? 'bg-brand text-white' : 'bg-cream hover:bg-orange-100'}`}>{label}</button>
  );
  return <div className="flex gap-2 overflow-x-auto pb-2">{tab('', 'Hamısı')}{CATEGORIES.map((c) => tab(c, c))}</div>;
}
