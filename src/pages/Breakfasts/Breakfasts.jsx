import { useState, useEffect } from 'react';
import axios from 'api/axios';

const dev_backend_url = 'http://localhost:3001';
const production_backend_url = 'https://repoback.herokuapp.com';
const URL = dev_backend_url + '/breakfast';

const Breakfast = () => {
    const [breakfastRecipes, setBreakfastRecipes] = useState([]);

    useEffect(() => {
        axios.get(URL).then((resp) => setBreakfastRecipes(resp.data.data));
        // eslint-disable-next-line
    }, []);

    console.log(breakfastRecipes);
    return <div>Breakfast page</div>;
};

export default Breakfast;
