import {Card as MUICard , CardContent, CardMedia, Typography} from '@mui/material'; 
import { Link } from 'react-router-dom';

const Card =({item ,type})=>{

    return(
    <Link style={{textDecoration:"none"}} to={`/${type}/${item.id}`}>
        <MUICard sx={{ Height: 600 }}>
            <CardMedia
                component="img"
                sx={{ height: 500 }}
                image={item.image || `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                alt={item.title || item.name}
            />
            <CardContent sx={{ height: 100 }}>
                <Typography gutterBottom variant='h5'component="div">Title : {item.title || item.name}</Typography>
                <Typography  variant="p" color="text.secondary">Rateing : {item.vote_average || item.popularity}</Typography>
            </CardContent>
        </MUICard>
        </Link>
    )
};
export default Card;