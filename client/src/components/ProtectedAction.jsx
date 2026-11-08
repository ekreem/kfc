import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext.jsx';
// Əsas navbardan kənar hər kliklənən element bununla bükülür: login yoxdursa -> /login
export default function ProtectedAction({ children, onAuthed, className = '' }) {
  const { user } = useAuth();
  const nav = useNavigate();
  const loc = useLocation();
  const handle = (e) => {
    e.preventDefault(); e.stopPropagation();
    if (!user) nav('/login', { state: { from: loc.pathname } });
    else onAuthed?.();
  };
  return <div onClickCapture={handle} className={`cursor-pointer ${className}`}>{children}</div>;
}
