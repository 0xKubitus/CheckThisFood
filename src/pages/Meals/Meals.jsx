import { useState, useEffect } from 'react';
import axios from 'api/axios';
import Recipes from 'components/Recipes';

const dev_backend_url = 'http://localhost:3001';
const production_backend_url = 'https://repoback.herokuapp.com';
const URL = dev_backend_url + '/meals';

const Meals = () => {
    const [mealsRecipes, setMealsRecipes] = useState([]);

    useEffect(() => {
        axios.get(URL).then((resp) => setMealsRecipes(resp.data.data));
    }, []);

    console.log(mealsRecipes); // SHOULD BE A COMMENT
    return (
        <div>
            {mealsRecipes.map((item) => (
                <Recipes title={item.attributes.title} description={item.attributes.description} carbohydrates={item.attributes.carbohydrates} calories={item.attributes.calories} image={item.attributes.image_url} id={item.id} />
            ))}
        </div>
    );
};

export default Meals;
