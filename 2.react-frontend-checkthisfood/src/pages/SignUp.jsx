import { useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro';

import axios from '../api/axios';
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
                    <h1>Success!</h1>
                    <button>Sign Up</button>
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
                        {errMsg}
                    </p>
                    <h1>Register / Sign Up</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">
                            Username:
                            <span className={validName ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={solid('check')} />
                            </span>
                            <span className={validName || !user ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={solid('xmark')} />
                            </span>
                        </label>

                        <input
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
                            <FontAwesomeIcon icon={solid('circle-info')} />
                            4 to 24 characters.
                            <br />
                            Must begin with a letter.
                            <br />
                            Letters, numbers, underscores, hyphens allowed.
                        </p>

                        <label htmlFor="userEmail">
                            Email:
                            <span className={validEmail ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={solid('check')} />
                            </span>
                            <span className={validEmail || !userEmail ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={solid('xmark')} />
                            </span>
                        </label>
                        <input
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
                            <FontAwesomeIcon icon={solid('circle-info')} />
                            Must respect email adress standards.
                            <br />
                            (Only a single account is allowed per email adress)
                        </p>

                        <label htmlFor="password">
                            Password:
                            <span className={validPwd ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={solid('check')} />
                            </span>
                            <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={solid('xmark')} />
                            </span>
                        </label>

                        <input
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
                            <FontAwesomeIcon icon={solid('circle-info')} />
                            8 to 24 characters.
                            <br />
                            Must include uppercase and lowercase letters, a number and a special character.
                            <br />
                            Allowed special chars: <span aria-label="exlamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                        </p>

                        <label htmlFor="confirm_pwd">
                            Confirm Password:
                            <span className={validPwdConfirm && pwdConfirm ? 'valid' : 'hide'}>
                                <FontAwesomeIcon icon={solid('check')} />
                            </span>
                            <span className={validPwdConfirm || !pwdConfirm ? 'hide' : 'invalid'}>
                                <FontAwesomeIcon icon={solid('xmark')} />
                            </span>
                        </label>

                        <input
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
                            <FontAwesomeIcon icon={solid('circle-info')} />
                            Must match the first password input field.
                        </p>
                        <button disabled={!validName || !validPwd || !validPwdConfirm ? true : false}>Sign Up</button>
                    </form>
                    <p>
                        Already registered?
                        <br />
                        <span className="line">
                            {/* replace button by a router link here: */}
                            <button>Go to Login</button>
                        </span>
                    </p>
                </section>
            )}
        </>
    );
};

export default SignUp;
