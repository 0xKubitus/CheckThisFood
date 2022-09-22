import * as React from 'react';
import { styled } from '@mui/material/styles';
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
import paella from 'assets/images/paella.jpg'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
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
        title="Shrimp and Chorizo Paella"
        
      />
      <CardMedia
        component="img"
        height="194"
        image={paella}
        alt="Paella dish"
      />
      <CardContent> 
        <Typography variant="body2" color="text.secondary"> 
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like. 
        </Typography>
      </CardContent>
      
      <CardActions sx={{ justifyContent: 'space-between'}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
          
        </IconButton>
        <Button variant="contained" href="#text-buttons">Voir</Button>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
  
        
      
      </CardActions>
      
    </Card>
  );
}


export default RecipeReviewCard