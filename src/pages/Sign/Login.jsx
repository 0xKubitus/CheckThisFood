import { useRef, useState, useEffect } from 'react';
import { useAtom } from 'jotai';
import { isUserLogged } from 'atoms/userStatus';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Sign.css';
import { useNavigate } from 'react-router-dom';

import axios from 'api/axios';
const LOGIN_URL = '/users/sign_in';


const Login = () => {
    const [status, setStatus] = useAtom(isUserLogged);
    const navigate = useNavigate();

    const [user, setUser] = useState('');
    const [userEmail, setEmail] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const userRef = useRef(); // to be able to set the focus on it
    const errRef = useRef(); // to be able to set the focus on it (for better accessibility like screen-reader)

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user, pwd); // SHOULD BE A COMMENT

        try {
            // eslint-disable-next-line no-unused-vars
            const response = await axios.post(
                LOGIN_URL,
                JSON.stringify({
                    user: {
                        email: userEmail,
                        password: pwd,
                    },
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true, // probablement à enlever car ça me faisait une erreur CORS avec le SignUp
                    
                    
                })
               
               
            );
            // console.log(JSON.stringify(response?.data)); // SHOULD BE A COMMENT
            // console.log(JSON.stringify(response)); // SHOULD BE A COMMENT
            // const accessToken = response?.data?.accessToken;
            // console.log(accessToken);

            setStatus(true);
            // setIsLogged({ userIsLogged: true });
            // setAuth({ user, pwd, userEmail, accessToken });
            setUser(user);
            setEmail(userEmail);
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No server response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username/Email or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login failed');
            }
            errRef.current.focus();
        }
        navigate('/')
    };

    return (
        <>
            {success ? (
                <section>
                    <h1>Connecté !</h1>
                    <button>Go to Home</button>
                </section>
            ) : !status ? (
                <section>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>LOGIN</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Nom d'utilisateur</label>
                        <br />
                        <TextField variant="outlined" size="small" type="text" id="username" ref={userRef} autoComplete="off" onChange={(e) => setUser(e.target.value)} value={user} required />
                        <br />
                        <br />
                        <label htmlFor="password">Mot de passe</label>
                        <br />
                        <TextField variant="outlined" size="small" type="password" id="password" onChange={(e) => setPwd(e.target.value)} value={pwd} required />
                        <br />
                        <br />
                        <Button variant="outlined" onClick={handleSubmit}>Login</Button>
                    </form>
                    <p>
                    <br />
                        Pas encore inscrit ?
                        <br />
                        <span className="line">
                            {/* put router link here */}
                            <Link to='/signup' style={{ textDecoration: 'none' }}>
                            <Button variant="outlined">S'inscrire</Button>
                            </Link>
                        </span>
                    </p>
                </section>
            ) : (
                <section>
                    <h1>You are already logged in!</h1>
                    <button>Go to Home</button>
                </section>
            )}
        </>
    );
};

export default Login;
