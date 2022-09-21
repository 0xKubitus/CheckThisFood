import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export const SidebarData = [
    {
        title: 'Accueil',
        icon: <HomeIcon />,
        link: '/',
    },

    {
        title: 'Mes Favoris',
        icon: <FavoriteIcon />,
        link: '/liked',
    },

    {
        title: 'Recettes',
        link: '/recipe',
    },

    {
        title: 'Petit-Déjeuner',
        icon: <BakeryDiningIcon />,
        link: '/breakfast',
    },

    {
        title: 'Déjeuner',
        icon: <RamenDiningIcon />,
        link: '/lunch',
    },

    {
        title: 'Dîner',
        icon: <BrunchDiningIcon />,
        link: '/diner',
    },
    {
        title: 'Recherche Recette',
        icon: <ManageSearchIcon />,
        link: '/search_recipe',
    },
    {
        title: 'Recherche Aliment',
        icon: <ManageSearchIcon />,
        link: '/search_food_data',
    },
];
