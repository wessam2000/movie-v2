import { useParams, Link } from "react-router-dom";
import { FetchMovieDetails } from "../../controllers/MovieController";
import { Card, CardContent, CardMedia, Typography,Container } from "@mui/material";
import { useEffect, useState } from "react";

const MovieDetails = () => {
    const {id} = useParams();
    const [moviedetails, setMoviedetails] = useState({});

    useEffect(() => {
        const fetchdata = async () => {
            const data = await FetchMovieDetails(id);
            setMoviedetails(data);
            console.log(`data from movie details ${data}`);
        };

        fetchdata();
        },[ id ]);

    return(
        <Container  sx={{ padding: "20px",margin:"20px auto" }}>
            <Card sx={{ MaxHeight: 300 }}>
                <CardMedia
                    component="img"
                    sx={{ height: 700 , width: 700 ,margin: "0 auto"  }}
                    image={`https://image.tmdb.org/t/p/w500/${moviedetails.poster_path}`}
                    //image={item.image || `https://image.tmdb.org/t/p/w500${item.poster_path}`}
                    alt="green iguana"
                />
                <CardContent sx={{ height: "auto" }}>
                    <Typography gutterBottom variant="h3" component="div">
                        Title: {moviedetails.title}
                    </Typography>
                    <Typography variant="h5" color="text.secondary">
                        OverView: {moviedetails.overview}
                    </Typography>
                    <Typography variant="h4" >
                        Popularity : {moviedetails.popularity}
                    </Typography>
                    <Link to={moviedetails.homepage} style={{
                        backgroundColor: "#007bff",
                        color: "white",
                        padding: "10px 20px",
                        margin: "10px 0px",
                        textDecoration: "none",
                        borderRadius: "5px",
                        display: "inline-block"
                    }} >
                        Watch Now
                    </Link>
                </CardContent>
            </Card>
        </Container>
    )
};
export default MovieDetails;

