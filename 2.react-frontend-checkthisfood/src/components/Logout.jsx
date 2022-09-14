import { Link } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { isUserLogged } from 'atoms/userStatus';

const Logout = () => {
    const setStatus = useSetAtom(isUserLogged);

    const handleLogout = () => {
        setStatus(false);
    };

    return (
        <Link to="/logout" onClick={handleLogout}>
            Déconnexion
        </Link>
    );
};

export default Logout;
