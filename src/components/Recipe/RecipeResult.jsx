import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Button from '@mui/material/Button';
import 'App.css';

const RecipeResult = ({ title, description, carbohydrates, calories, image, id }) => {
    return (
        <div>
            <p>{title}</p>
            <img src={image} alt=""></img>
            <p>Details: {description}</p>
            <p>glucides: {carbohydrates}g</p>
            <p>calories: {calories}kcal</p>
        </div>
    );
};

export default RecipeResult;
