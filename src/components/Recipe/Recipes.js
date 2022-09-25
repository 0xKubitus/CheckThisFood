import React from 'react';
import { Link, Navigate } from 'react-router-dom';
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

const Recipes = ({ title, description, carbohydrates, calories, image, id }) => {
    return (
        <div style={{ padding: '10px' }} className="cards">
            <Card sx={{ maxWidth: 345 }}>
                
                <CardMedia component="img" width="300" image={image} alt="image" />
                <CardContent>
                    <Typography variant="body1" color="text.primary">
                        {title}
                    </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: 'space-between' }}>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <Button variant="contained">
                        <Link to={`../recipes/${id}`}>Voir</Link>
                    </Button>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    );
};

export default Recipes;
