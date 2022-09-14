import { Link } from 'react-router-dom';

import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';
import Logout from 'components/Logout';

const Navbar = () => {
    return (
        <nav className="navbar-main">
            <Link to="/" className="navbar-second-link">
                <h3>Home</h3>
            </Link>
            <SignUpBtn />
            <LoginBtn />
            <Logout />
        </nav>
    );
};

export default Navbar;
