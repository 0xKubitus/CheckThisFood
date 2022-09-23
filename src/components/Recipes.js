import React from 'react';
import {Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'api/axios';
import Home from '../pages/Home/Home';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { blue, blueGrey, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import paella from 'assets/images/paella.jpg';
import Button from '@mui/material/Button';
import 'App.css'

const Recipes = ({title, description, carbohydrates, calories, image, id}) => {



    return (

        <div style={{padding: '10px'}} className='cards'>
                    <Card sx={{ maxWidth: 345 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: blue[800] }} aria-label="recipe">
                        C
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton> /*à garder uniquement pour admin (et peut-être user qui a créé la recette)*/
                }
                title="Check this Food"
            />
            <CardMedia component="img" width="300" image={image} alt="image" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {title}
                </Typography>
            </CardContent>

            <CardActions sx={{ justifyContent: 'space-between' }}>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <Button variant="contained" href="#text-buttons">
                <Link to={`recipes/${id}`}>Voir</Link> 
                </Button>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>
                    </div>
                );}

export default Recipes;
