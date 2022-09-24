import { useState, useEffect } from 'react';
import axios from 'api/axios';
import Recipes from 'components/Recipes';
import { Grid } from '@mui/material';

const dev_backend_url = 'http://localhost:3001';
const prod_backend_url = 'https://repoback.herokuapp.com/';

const URL = `${dev_backend_url}/meals`;

//const URL = `${process.env.REACT_APP_BASE_URL}/meals`;

const Meals = () => {
    const [mealsRecipes, setMealsRecipes] = useState([]);

    useEffect(() => {
        axios.get(URL).then((resp) => setMealsRecipes(resp.data.data));
    }, []);

    console.log(mealsRecipes); // SHOULD BE A COMMENT
    return (
        <div>
            <Grid container sx={{ justifyContent: 'center', padding: '5px' }}>
                {mealsRecipes.map((item) => (
                    <Recipes title={item.attributes.title} description={item.attributes.description} carbohydrates={item.attributes.carbohydrates} calories={item.attributes.calories} image={item.attributes.image_url} id={item.id} />
                ))}
            </Grid>
        </div>
    );
};

export default Meals;
