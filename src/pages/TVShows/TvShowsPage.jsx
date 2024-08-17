import { Grid } from "@mui/material";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { FetchTvShows } from "../../controllers/MovieController";

const TvShowsPage = () => {

    const [tvshows, setTvshows] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const data = await FetchTvShows();
            setTvshows(data);
            console.log(data);
            
        }

        fetchdata();
    },[]);
    return(
        <Grid container spacing={2} sx={{ padding: "20px" }}> 
            {tvshows.map((tvshow) => (
                <Grid item lg={3} xs={12} sm={6} md={4}  xl={3} key={tvshow.id}>
                    <Card type={"TvShow"}  item={tvshow} />
                </Grid>
            ))}
        </Grid>
    )
};

export default TvShowsPage;
