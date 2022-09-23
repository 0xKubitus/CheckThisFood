import { useSetAtom } from 'jotai';
import { isUserLogged } from 'atoms/userStatus';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LoggedOut = () => {
    const setStatus = useSetAtom(isUserLogged);
    const navigate = useNavigate();

    const handleLogout = () => {
        setStatus(false);
        navigate('/');
        alert("Déconnecté avec succès")
    };

    return (
        <Link to="/" onClick={handleLogout} className="navbar-second-link" style={{ color: '#2f4050' }}>
        Se déconnecter
    </Link>
    
    )
    
};

export default LoggedOut;
