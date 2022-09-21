import { useState /*useEffect, useRef*/ } from 'react';

const API_BASE_URL = 'https://api.edamam.com';
const API_RECIPE_SEARCH_URL = '/api/recipes/v2?type=public';
const API_ID = process.env.REACT_APP_EDEMAM_RECIPES_API_ID;
const API_KEY = process.env.REACT_APP_EDEMAM_RECIPES_API_KEY;

const SearchRecipe = () => {
    const [searchInput, setSearchInput] = useState('');

    const fetchEdemamRecipeAPI = async (recipeToSearch) => {
        try {
            const response = await fetch(`${API_BASE_URL}${API_RECIPE_SEARCH_URL}&q=${recipeToSearch}&app_id=${API_ID}&app_key=${API_KEY}`, {
                mode: 'cors',
                // credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    //   Accept: 'application/json',
                    Origin: 'http://localhost:3000',
                    // },
                },
            });
            const data = await response.json();
            console.log('data type =', typeof data); // SHOULD BE A COMMENT
            console.log(data);
            console.log(data.hits[0].recipe);
        } catch (error) {
            console.error('Response error:', error.message);
        }
        /* 
      Attention cependant : si une requête HTTP aboutit sur une réponse avec un code 404 Not Found ou même 500 Internal Server Error, la fonction fetch() ne va pas considérer qu'il s'agit d'une erreur ! En effet, l'API a bien répondu quelque chose, donc de son point de vue tout a fonctionné. Le catch ne sera déclenché que si la requête n'aboutit pas (par exemple s'il n'y a pas de réseau), ou si le décodage JSON a échoué car les données sont mal formatées (problème qui arrive plus souvent qu'on ne le croit).
      */
    };

    const handleRecipeSearchFormSubmit = (e) => {
        e.preventDefault();

        alert(`your input : ${searchInput}`); // SHOULD BE A COMMENT

        fetchEdemamRecipeAPI(searchInput);
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
