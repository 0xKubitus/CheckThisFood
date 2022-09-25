import { useState, useEffect, useRef } from 'react';

const API_BASE_URL = 'https://api.edamam.com';
const API_RECIPE_SEARCH_URL = '/api/food-database/v2/parser?';
const API_ID = process.env.REACT_APP_EDEMAM_FOOD_API_ID;
const API_KEY = process.env.REACT_APP_EDEMAM_FOOD_API_KEY;

const SearchFoodData = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState(null);

    const fetchGetEdemamFoodAPI = async (foodToSearch) => {
        try {
            const response = await fetch(`${API_BASE_URL}${API_RECIPE_SEARCH_URL}&app_id=${API_ID}&app_key=${API_KEY}&ingr=${foodToSearch}&nutrition-type=cooking`, {
                mode: 'cors',
                // credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    //   Accept: 'application/json',
                    Origin: 'http://localhost:3000',
                    // },
                },
            });
            if (response.status === 200) {
                const data = await response.json();
                // console.log('data type =', typeof data); // SHOULD BE A COMMENT
                console.log('data = ', data); // SHOULD BE A COMMENT
                console.log('nutriments du 1er resultat de la recherche = ', data.hints[0].food.nutrients); // SHOULD BE A COMMENT

                setSearchResult(data.hints[0]);
            } else if (response.status === 404) {
                console.log('Error 404 - Not Found');
            } else if (response.status === 500) {
                console.log('Error 500 - Internal Server Error');
            }
        } catch (error) {
            console.error('Response error:', error.message);
        }
    };

    const handleFoodSearchFormSubmit = (e) => {
        e.preventDefault();

        alert(`your input : ${searchInput}`); // SHOULD BE A COMMENT

        fetchGetEdemamFoodAPI(searchInput);
    };

    return (
        <>
            {searchResult === null ? (
                <section className="search-food-data">
                    <form onSubmit={handleFoodSearchFormSubmit}>
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
            ) : (
                <>
                    <section>
                        <h1>{searchResult.food.label} - Détails</h1>
                        <img
                            src={searchResult.food.image}
                            alt="search-result"
                        />
                        <p>Pour une unité (ou une portion) :</p>
                        <p>Calories = {searchResult.food.nutrients.ENERC_KCAL}kcal</p>
                        <p>Proteines = {searchResult.food.nutrients.PROCNT}g</p>
                        <p>Lipides = {searchResult.food.nutrients.FAT}g</p>
                        <p>Glucides = {searchResult.food.nutrients.CHOCDF}g</p>
                        <p>Fibres = {searchResult.food.nutrients.FIBTG}g</p>
                    </section>

                    <section className="search-food-data">
                        <form onSubmit={handleFoodSearchFormSubmit}>
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
                </>
            )}
        </>
    );
};

export default SearchFoodData;
