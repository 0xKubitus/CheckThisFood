import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import './Sign.css';
import axios from 'api/axios';

const REGISTER_URL = '/users'; // <- here, we are defining a suffix for axios to use in HTTP request for signup (it is devise route for method users/registrations#create)

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; // NO USE FOR MY RAILS API BOILERPLATE (because no username)
const EMAIL_REGEX = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const SignUp = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [validName, setValidName] = useState(false); // NO USE FOR MY RAILS API BOILERPLATE (because no username) ... BUT THIS TUTORIAL https://www.youtube.com/watch?v=3MA6kS2xpNA&t=38s EXPLAINS HOW TO ADD USERNAME TO DEVISE
    const [userFocus, setUserFocus] = useState(false);

    const [userEmail, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [pwd, setPwd] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [pwdConfirm, setPwdConfirm] = useState('');
    const [validPwdConfirm, setValidPwdConfirm] = useState(false);
    const [pwdConfirmFocus, setPwdConfirmFocus] = useState(false);

    const [success, setSuccess] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        const result = USER_REGEX.test(user);
        // console.log(result);
        // console.log(user);
        setValidName(result);
    }, [user]);

    useEffect(() => {
        const result = EMAIL_REGEX.test(userEmail);
        // console.log(result);
        // console.log(userEmail);
        setValidEmail(result);
    }, [userEmail]);

    useEffect(() => {
        const result = PWD_REGEX.test(pwd);
        // console.log(result);
        // console.log(pwd);
        setValidPwd(result);
        const match = pwd === pwdConfirm;
        setValidPwdConfirm(match);
    }, [pwd, pwdConfirm]);

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd, pwdConfirm]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(user);
        const v2 = PWD_REGEX.test(pwd);
        const v3 = EMAIL_REGEX.test(userEmail);
        if (!v1 || !v2 || !v3) {
            setErrMsg('Invalid Entry');
            return;
        }
        // console.log('user, pwd =>', user, pwd); // SHOULD BE A COMMENT
        // setSuccess(true); // SHOULD BE A COMMENT
        try {
            const response = await axios.post(
                REGISTER_URL,
                JSON.stringify({
                    user: {
                        email: userEmail,
                        password: pwd,
                    },
                }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    // withCredentials: true, // strangely, it brings a CORS error despite being in the tutorial I was following...
                }
            );
            console.log(response.data);
            console.log(response.accessToken);
            console.log(JSON.stringify(response));
            setSuccess(true);

            // this would be a good place to clear the input fields out of the form (by setting their state back to empty strings), but it's completely optionnal
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username already taken');
            } else {
                setErrMsg('Registration failed');
            }
            errRef.current.focus();
        }
    };

    return (
        <>
            {/* replace Sign Up button below by a router link: */}
            {success ? (
                <section>
                    <h1>Inscrit avec succès!</h1>
                    <button>Sign Up</button>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>INSCRIPTION</h1>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                           Nom d'utilisateur 
                            <span className={validName ? 'valid' : 'hide'}>
                              
                            </span>
                            <span className={validName || !user ? 'hide' : 'invalid'}>
                                
                            </span>
                        </label>
                        <br />

                        <TextField variant="outlined" size="small" 
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="on"
                            onChange={(e) => setUser(e.target.value)}
                            required
                            aria-invalid={validName ? 'false' : 'true'}
                            aria-describedby="usernamenote"
                            onFocus={() => setUserFocus(true)}
                            onBlur={() => setUserFocus(false)}
                        />

                        <p id="usernamenote" className={userFocus && user && !validName ? 'instructions' : 'offscreen'}>
                            
                            <i>4 à 24 caractères.
                          
                            Doit commencer par une lettre.
                          
                            Lettres, nombres, underscores, tirets autorisés</i>
                        </p>
                        <br />

                        <label htmlFor="userEmail">
                            Email
                            <span className={validEmail ? 'valid' : 'hide'}>
                                
                            </span>
                            <span className={validEmail || !userEmail ? 'hide' : 'invalid'}>
                                
                            </span>
                        </label>
                        <br />
                        <TextField variant="outlined" size="small" 
                            type="text"
                            id="email"
                            ref={userRef}
                            autocomplete="on"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            aria-invalid={validEmail ? 'false' : 'true'}
                            aria-describedby="emailnote"
                            onFocus={() => setEmailFocus(true)}
                            onBlur={() => setEmailFocus(false)}
                        />

                        <p id="emailnote" className={emailFocus && userEmail && !validEmail ? 'instructions' : 'offscreen'}>
                            
                           
                            
                            <i>Un compte par email autorisé</i>
                        </p>
                        <br />

                        <label htmlFor="password">
                            Mot de passe
                            <span className={validPwd ? 'valid' : 'hide'}>
                                
                            </span>
                            <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                             
                            </span>
                        </label>
                        <br />

                        <TextField variant="outlined" size="small" 
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            required
                            aria-invalid={validPwd ? 'false' : 'true'}
                            aria-describedby="pwdnote"
                            onFocus={() => setPwdFocus(true)}
                            onBlur={() => setPwdFocus(false)}
                        />
                        <p id="pwdnote" className={pwdFocus && !validPwd ? 'instructions' : 'offscreen'}>
                            
                            <i>8 à 24 caractères.
                           
                           Doit contenir une majuscule, minuscule, un nombre et un caractère spécial : 
                            

                             <span aria-label="exlamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span></i>
                        </p>

                        <br />
                        <label htmlFor="confirm_pwd">
                            Confirmez votre mot de passe :
                            <span className={validPwdConfirm && pwdConfirm ? 'valid' : 'hide'}>
                                
                            </span>
                            <span className={validPwdConfirm || !pwdConfirm ? 'hide' : 'invalid'}>
                                
                            </span>
                        </label>
                        <br />
                        <TextField variant="outlined" size="small" 
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setPwdConfirm(e.target.value)}
                            required
                            aria-invalid={validPwdConfirm ? 'false' : 'true'}
                            aria-describedby="confirmnote"
                            onFocus={() => setPwdConfirmFocus(true)}
                            onBlur={() => setPwdConfirmFocus(false)}
                        />
                        <p id="confirmnote" className={pwdConfirmFocus && !validPwdConfirm ? 'instructions' : 'offscreen'}>
                            
                            <i>Doit correspondre au mot de passe défini</i>
                           
                        </p>
                        <br />
                        <Button variant="outlined" onClick={handleSubmit} disabled={!validName || !validPwd || !validPwdConfirm ? true : false}>Inscription</Button>
                    </form>
                    <p>
                    <br />
                        Déjà inscrit ?
                        <br />
                        <span className="line">
                           
                            
                            <Link to='/login' style = {{ textDecoration: 'none' }}>
                            <Button variant="outlined">Se connecter</Button>
                            </Link>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default SignUp;
