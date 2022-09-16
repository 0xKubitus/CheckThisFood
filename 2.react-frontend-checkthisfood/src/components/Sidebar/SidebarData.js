import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BakeryDiningIcon from '@mui/icons-material/BakeryDining';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import BrunchDiningIcon from '@mui/icons-material/BrunchDining';

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
        title: 'Recherche',
        link: '/searchfood',
    },
];
