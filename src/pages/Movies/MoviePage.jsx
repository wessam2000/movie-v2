import { Grid } from "@mui/material";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { FetchMoives } from "../../controllers/MovieController";

const MoviesPage = () => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const data = await FetchMoives();
            setMovies(data);
            console.log(data);
            
        }

        fetchdata();
    },[]);
    return(
        <Grid container spacing={2} sx={{ padding: "20px" }}> 
            {movies.map((movie) => (
                <Grid item lg={3} xs={12} sm={6} md={4}  xl={3}  key={movie.id}>
                    <Card type={"movie"} item={movie} />
                </Grid>
            ))}
        </Grid>
    )
};

export default MoviesPage;
