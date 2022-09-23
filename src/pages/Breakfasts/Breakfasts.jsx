import { useState, useEffect } from 'react';
import axios from 'api/axios';
import Recipes from 'components/Recipes';

// const dev_backend_url = 'http://localhost:3001';

const URL = `${process.env.REACT_APP_BASE_URL}/breakfast`;

const Breakfast = () => {
    const [breakfastRecipes, setBreakfastRecipes] = useState([]);

    useEffect(() => {
        axios.get(URL).then((resp) => setBreakfastRecipes(resp.data.data));
    }, []);

    console.log(breakfastRecipes); // SHOULD BE A COMMENT
    return (
        <div>
            {breakfastRecipes.map((item) => (
                <Recipes title={item.attributes.title} description={item.attributes.description} carbohydrates={item.attributes.carbohydrates} calories={item.attributes.calories} image={item.attributes.image_url} id={item.id} />
            ))}
        </div>
    );
};

export default Breakfast;
