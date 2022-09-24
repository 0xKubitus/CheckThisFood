import React from 'react';
import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import './Newrecipe.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

const NewRecipe = () => {
    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [carbohydrates, setCarbohydrates] = useState();
    const [calories, setCalories] = useState();
    const [image_url, setImage] = useState();
    const [categories, setCategories] = useState();

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handleSugarChange = (e) => {
        setCarbohydrates(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategories(e.target.value);
    };

    const handleCalorieChange = (e) => {
        setCalories(e.target.value);
    };

    const handleImageChange = (e) => {
        setImage(e.target.value);
    };
    const handleSubmit = (e) => {
        const data = { title, description, carbohydrates, calories, image_url, categories };

        fetch("http://localhost:3001/recipes", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    };

    return (
        <div>
            {' '}
            <h1>AJOUTER UNE RECETTE</h1>
            <br />
            <br />
            <Box sx={{ flexGrow: 1, mt: 5 }}>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={2} sx={{ height: '100%', border: 0.5, pb: 5, pt: 4, borderColor: '#2f4050', borderRadius: 1 }}>
                        <Grid item xs={8}>
                            <label>Titre</label>
                            <br />
                            <label htmlFor="titre"></label>
                            <br />
                            <TextField sx={{ width: '80%' }} className="textarea" type="text" required value={title} onChange={handleTitleChange} placeholder="titre de la recette"></TextField>
                            <br />
                            <br />
                            <label>Description</label>
                            <label htmlFor="description"></label>
                            <br />
                            <br />
                            <TextField sx={{ width: '80%', height: '200' }} className="textarea" multiline={true} maxRows={20} type="text" required value={description} onChange={handleDescriptionChange} placeholder="Description"></TextField>
                            <br /> <br />
                        </Grid>
                        <Grid item xs={4}>
                            <label>Catégorie</label>
                            <label htmlFor="categories"></label>
                            <br />
                            <br />

                            <Select sx={{ width: '70%' }} size="small" onChange={handleCategoryChange} label="catégorie">
                                <option required value={categories}></option>
                                <MenuItem required value={categories} value='["breakfast"]'>
                                    Petit-dejeuner
                                </MenuItem>
                                <MenuItem required value={categories} value='["lunch/dinner"]'>
                                    Déjeuner / Dîner
                                </MenuItem>
                                <MenuItem required value={categories} value='["snack"]'>
                                    Snack
                                </MenuItem>
                            </Select>
                            <br />
                            <br />

                            <label>Glucides</label>
                            <label htmlFor="glucides"></label>
                            <br />
                            <br />
                            <TextField sx={{ width: '70%' }} size="small" type="number" required value={carbohydrates} onChange={handleSugarChange}></TextField>
                            <br />
                            <br />

                            <label>Calories</label>
                            <label htmlFor="calories"></label>
                            <br />
                            <br />
                            <TextField sx={{ width: '70%' }} size="small" type="number" required value={calories} onChange={handleCalorieChange}></TextField>

                            <br />
                            <br />
                            <label>Lien Image URL</label>
                            <br />
                            <br />
                            <label htmlFor="image"></label>
                            <TextField sx={{ width: '70%' }} size="small" type="text" className="" required value={image_url} onChange={handleImageChange}></TextField>
                            <br />
                            <br />
                            <br />
                            <Button style={{ backgroundColor: '#2f4050' }} sx={{ width: '70%' }} variant="contained" type="submit" value="poster recette">
                                Sauvegarder <DataSaverOnIcon sx={{ ml: 2 }} />
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Box>
        </div>
    );
};

export default NewRecipe;
