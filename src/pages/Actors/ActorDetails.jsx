import { useParams } from "react-router-dom";
import { FetchActorDetails } from "../../controllers/MovieController";
import { Card, CardContent, CardMedia, Typography,Container } from "@mui/material";
import { useEffect, useState } from "react";

const ActorDetails = () => {
    const {id} = useParams();
    const [moviedetails, setMoviedetails] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const data = await FetchActorDetails(id);
            setMoviedetails(data);
            console.log(`data from Actor details ${data}`);
        };

        fetchdata();
        },[ id ]);

    return(
        <Container  sx={{ padding: "20px",margin:"20px auto" }}>
            <Card sx={{ MaxHeight: 300 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 700 , width: 700 ,margin: "0 auto"  }}
                    image={`https://image.tmdb.org/t/p/w500/${ moviedetails.profile_path }`}
                    //image={item.image || `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="green iguana"
                />
                <CardContent sx={{ height: 200 }}>
                    <Typography gutterBottom variant="h3" component="div">
                        Name : {moviedetails.name}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Place of brith : {moviedetails.place_of_birth}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        Popularity : {moviedetails.popularity}
                    </Typography>
                        
                </CardContent>
            </Card>
        </Container>
    )
};
export default ActorDetails;

