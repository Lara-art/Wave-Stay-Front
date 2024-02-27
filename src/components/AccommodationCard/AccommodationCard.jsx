import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { addFavoriteAccommodation } from '../../services/accommodationService'


function AccommodationCard({info, favorite=false}) {
  const handleClick = () => {
    if (!favorite) {
      addFavoriteAccommodation(info.id)
    } else {
      // removeFromFavorite(info.id)
    }
  }
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="160"
            width="300"
            image= {info.imageURL}
            alt="fotodelacasa"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {info.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" onClick={handleClick}>{favorite ? 'Remove' : 'Add Favorite'}  
          </Button>
        </CardActions>
      </Card>
    );
  }
export default AccommodationCard