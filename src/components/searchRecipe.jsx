import { useState /*useEffect, useRef*/ } from 'react';
import RecipeResult from 'components/RecipeResult';

const API_BASE_URL = 'https://api.edamam.com';
const API_RECIPE_SEARCH_URL = '/api/recipes/v2?type=public';
const API_ID = process.env.REACT_APP_EDEMAM_RECIPE_API_ID;
const API_KEY = process.env.REACT_APP_EDEMAM_RECIPE_API_KEY;

const SearchRecipe = () => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResult, setSearchResult] = useState(null);

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
            if (response.status === 200) {
                const data = await response.json();
                console.log('data = ', data); // SHOULD BE A COMMENT
                console.log('data type =', typeof data); // SHOULD BE A COMMENT
                console.log('1ere recette = ', data.hits[0].recipe); // SHOULD BE A COMMENT

                setSearchResult(data);
            } else if (response.status === 404) {
                console.log('Error 404 - Not Found');
            } else if (response.status === 500) {
                console.log('Error 500 - Internal Server Error');
            }
        } catch (error) {
            console.error('Response error:', error.message);
        }
    };

    const handleRecipeSearchFormSubmit = (e) => {
        e.preventDefault();

        alert(`your input : ${searchInput}`); // SHOULD BE A COMMENT

        fetchEdemamRecipeAPI(searchInput);
    };

    return (
        <>
            {searchResult === null ? (
                <section className="search-food-data">
                    <form onSubmit={handleRecipeSearchFormSubmit}>
                        <label>Rechercher les apports d'un aliment :</label>
                        <input type="text" value={searchInput} name="search-food-data-input" onChange={(e) => setSearchInput(e.target.value)} />
                        <button>Rechercher</button>
                    </form>
                </section>
            ) : (
                <>
                    <section>
                        {searchResult.hits.map((item) => (
                            <>
                                <RecipeResult
                                    title={item.recipe.label}
                                    image={item.recipe.image}
                                    description={item.recipe.ingredientLines}
                                    carbohydrates={item.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(2)}
                                    calories={item.recipe.totalNutrients.CHOCDF.quantity.toFixed(2)}
                                />
                                <br />
                            </>
                        ))}

                        {/* <h1>{searchResult.food.label} - Détails</h1>
                        <img src={searchResult.food.image} alt="search-result" />
                        <p>Pour une unité (ou une portion) :</p>
                        <p>Calories = {searchResult.food.nutrients.ENERC_KCAL}kcal</p>
                        <p>Proteines = {searchResult.food.nutrients.PROCNT}g</p>
                        <p>Lipides = {searchResult.food.nutrients.FAT}g</p>
                        <p>Glucides = {searchResult.food.nutrients.CHOCDF}g</p>
                        <p>Fibres = {searchResult.food.nutrients.FIBTG}g</p> */}
                    </section>

                    <section className="search-food-data">
                        <form onSubmit={handleRecipeSearchFormSubmit}>
                            <label>Rechercher les apports d'un aliment :</label>
                            <input type="text" value={searchInput} name="search-food-data-input" onChange={(e) => setSearchInput(e.target.value)} />
                            <button>Rechercher</button>
                        </form>
                    </section>
                </>
            )}
        </>
    );
};

export default SearchRecipe;
