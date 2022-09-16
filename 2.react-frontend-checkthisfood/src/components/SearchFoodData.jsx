import { useState, useEffect, useRef } from 'react';
import axios from 'api/axios';

const API_ACCESS_URL = 'https://oauth.fatsecret.com/connect/token/';
const clientID = process.env.REACT_APP_FATSECRET_CLIENT_ID;
const clientSecret = process.env.REACT_APP_FATSECRET_CLIENT_SECRET;

const SearchFoodData = () => {
    const [searchInput, setSearchInput] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();

    const fetchAPIaccessToken = async (e) => {
        // try {
        //     const response = await axios.post({
        //         auth: {
        //             user: clientID,
        //             password: clientSecret,
        //         },
        //         headers: { 'content-type': 'application/x-www-form-urlencoded' },
        //         form: {
        //             grant_type: 'client_credentials',
        //             scope: 'localization premier',
        //         },
        //     });
        // } catch (err) {
        //     if (!err?.response) {
        //         setErrMsg('No Server Response');
        //     }
        //     errRef.current.focus();
        // }

        let headers = new Headers();

        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Accept', 'application/json');
        headers.append('Origin', 'https://4a26-2a01-e0a-ab0-25c0-2a5');

        fetch(API_ACCESS_URL, {
            mode: 'no-cors',
            credentials: 'include',
            method: 'POST',
            headers: headers,
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
            .catch((error) => console.log(error.message));
    };

    const handleSearchFoodSubmit = (e) => {
        e.preventDefault();
        alert(`your input : ${searchInput}`); // SHOULD BE A COMMENT

        fetchAPIaccessToken();
    };

    return (
        <section className="search-food-data">
            <p
                ref={errRef}
                className={errMsg ? 'errmsg' : 'offscreen'}
                aria-live="assertive">
                {errMsg}
            </p>

            <form onSubmit={handleSearchFoodSubmit}>
                <label>Rechercher les apports d'un aliment :</label>
                <input
                    type="text"
                    value={searchInput}
                    name="search-food-data-input"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button>Rechercher</button>
            </form>
        </section>
    );
};

export default SearchFoodData;
