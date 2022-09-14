import LoginBtn from './LoginBtn';
import SignUpBtn from './SignUpBtn';

const Navbar = () => {
    return (
        <nav className="navbar-main">
            <LoginBtn />
            <SignUpBtn />
        </nav>
    );
};

export default Navbar;
