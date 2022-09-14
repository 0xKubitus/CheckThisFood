import { Link } from 'react-router-dom';

import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';

const Navbar = () => {
    return (
        <nav className="navbar-main">
            <Link to="/">Home</Link>
            <SignUpBtn />
            <LoginBtn />
        </nav>
    );
};

export default Navbar;
