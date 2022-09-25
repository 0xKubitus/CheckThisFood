import { Link } from 'react-router-dom';
import * as React from 'react';
import { useAtomValue } from 'jotai';
import { isUserLogged } from 'atoms/userStatus';
import './Navbar.css';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Divider from '@mui/material/Divider';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled, alpha } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';
import LoggedOut from 'pages/Sign/LoggedOut';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logonoletters from 'assets/images/logonoletters.png'

const StyledMenu = styled((props) => (
    <Menu
        elevation={0}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiPaper-root': {
        borderRadius: 6,
        marginTop: theme.spacing(1),
        minWidth: 200,
        color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
        boxShadow: 'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
        '& .MuiMenu-list': {
            padding: '4px 0',
        },
        '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
                fontSize: 18,
                color: theme.palette.text.secondary,
                marginRight: theme.spacing(1.5),
            },
            '&:active': {
                backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
            },
        },
    },
}));

const Navbar = () => {
    const userStatus = useAtomValue(isUserLogged);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav className="navbar-main">
            <img style={{width:'auto', height:'70px'}}src={logonoletters} alt="logo"></img>
            <h1 style={{fontSize:'50px', color:'#054a29'}}>CHECK THIS FOOD</h1>
            <Button
                style={{ backgroundColor: '#2f4050', height:"40px" }}
                id="demo-customized-button"
                aria-controls={open ? 'demo-customized-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="contained"
                disableElevation
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon/>}>
                    <AccountCircleIcon fontSize="small" sx={{ mr: 2 }}  /> 
                Mon compte
            </Button>

            <StyledMenu
                id="demo-customized-menu"
                MenuListProps={{
                    'aria-labelledby': 'demo-customized-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}>
                {!userStatus ? (
                    <div>
                        <MenuItem onClick={handleClose} disableRipple>
                            <HowToRegIcon />

                            <Link to="/signup" className="navbar-first-link" style={{ color: '#2f4050' }}>
                                S'inscrire
                            </Link>
                        </MenuItem>

                        <MenuItem onClick={handleClose} disableRipple>
                            <VpnKeyIcon />

                            <Link to="/login" className="navbar-second-link" style={{ color: '#2f4050' }}>
                                Se connecter
                            </Link>
                        </MenuItem>
                    </div>
                ) : (
                    <div>
                        <MenuItem onClick={handleClose} disableRipple>
                            <AddIcon />

                            <Link to="/recette" className="navbar-second-link" style={{ color: '#2f4050' }}>
                                Ajouter une recette
                            </Link>
                        </MenuItem>

                        <Divider sx={{ my: 0.5 }} />

                        <MenuItem onClick={handleClose} disableRipple>
                            <LogoutIcon 
                            />
                        <LoggedOut />
                            
                            
                        </MenuItem>
                    </div>
                )}
            </StyledMenu>
        </nav>
    );
};

export default Navbar;
