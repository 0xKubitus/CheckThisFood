import { useState, useEffect, useRef } from 'react';
import axios from 'api/axios';

const API_ACCESS_URL = 'https://oauth.fatsecret.com/connect/token';

const SearchFoodData = () => {
    const [searchInput, setSearchInput] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const errRef = useRef();

//    fetchAPIaccessToken = async (e) => {
//         try {
//             const response = await axios.post();
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             }
//             errRef.current.focus();
//         }
//     };

    const handleSearchFoodSubmit = (e) => {
        e.preventDefault();
        alert(`your input : ${searchInput}`); // SHOULD BE A COMMENT
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
