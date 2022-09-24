import { useState, useEffect } from 'react';
import axios from 'api/axios';
import Recipes from 'components/Recipes';
import { Grid } from '@mui/material';

// const dev_backend_url = 'http://localhost:3001';

const URL = 'http://localhost:3001/breakfast';

//const URL = `${process.env.REACT_APP_BASE_URL}/snacks`;


const Snacks = () => {
    const [snacksRecipes, setSnacksRecipes] = useState([]);

    useEffect(() => {
        axios.get(URL).then((resp) => setSnacksRecipes(resp.data.data));
    }, []);

    console.log(snacksRecipes); // SHOULD BE A COMMENT
    return (
        <div>
            <Grid container sx={{ justifyContent: 'center', padding: '5px' }}>
            {snacksRecipes.map((item) => (
                <Recipes title={item.attributes.title} description={item.attributes.description} carbohydrates={item.attributes.carbohydrates} calories={item.attributes.calories} image={item.attributes.image_url} id={item.id} />
            ))}
            </Grid>
        </div>
    );
};

export default Snacks;
