import { Grid } from "@mui/material";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { FetchActors } from "../../controllers/MovieController";

const ActorsPage = () => {

    const [actors, setActors] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const data = await FetchActors();
            setActors(data);
            console.log(data);
            
        }

        fetchdata();
    },[]);
    return(
        <Grid container spacing={2} sx={{ padding: "20px" }}> 
            {actors.map((actor) => (
                <Grid item lg={3} xs={12} sm={6} md={4}  xl={3}  key={actor.id}>
                    <Card type={"actor"}  item={{ ...actor,image:`https://image.tmdb.org/t/p/w500${actor.profile_path}` }} />
                </Grid>
            ))}
        </Grid>
    )
};

export default ActorsPage;
