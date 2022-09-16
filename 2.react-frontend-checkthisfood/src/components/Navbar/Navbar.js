import { Link } from 'react-router-dom';
import { useAtomValue } from 'jotai';
import { isUserLogged } from 'atoms/userStatus';
import LogoutBtn from './LogoutBtn';
import "./Navbar.css";

const Navbar = () => {
    const userStatus = useAtomValue(isUserLogged);

    return (
        <nav className='navbar-main'>
            {!userStatus ? (
                <span>
                    <Link to ="/signup" className='navbar-first-link'>

                    S'inscrire
                    </Link>
                    <Link to ="/login" className='navbar-second-link'>
                        Se connecter
                    </Link>
                </span>
            ) : (
                <span>
                    <LogoutBtn />
                </span>
            )}
        </nav>
    );

};


export default Navbar;