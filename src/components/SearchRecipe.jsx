import { useState /*useEffect, useRef*/ } from 'react';

const API_BASE_URL = 'https://api.edamam.com';
const API_RECIPE_SEARCH_URL = '/api/recipes/v2?type=public';
const API_ID = process.env.REACT_APP_EDEMAM_RECIPES_API_ID;
const API_KEY = process.env.REACT_APP_EDEMAM_RECIPES_API_KEY;

const SearchRecipe = () => {
    const [searchInput, setSearchInput] = useState('');

    const handleRecipeSearchFormSubmit = (e) => {
        e.preventDefault();
        alert(`your input : ${searchInput}`); // SHOULD BE A COMMENT
    };

    return (
        <div>
            <form onSubmit={handleRecipeSearchFormSubmit}>
                <label>Rechercher une recette :</label>
                <input
                    type="text"
                    value={searchInput}
                    name="search-recipe-input"
                    onChange={(e) => setSearchInput(e.target.value)}
                />
                <button>Rechercher</button>
            </form>
        </div>
    );
};

export default SearchRecipe;
