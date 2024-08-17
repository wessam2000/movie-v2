import { Grid } from "@mui/material";
import Card from "../../components/Card";
import { useEffect, useState } from "react";
import { FetchSerise } from "../../controllers/MovieController";

const SeriessPage = () => {

    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            const data = await FetchSerise();
            setSeries(data);
            console.log(data);
            
        }

        fetchdata();
    },[]);
    return(
        <Grid container spacing={2} sx={{ padding: "20px" }}> 
            {series.map((serie) => (
                <Grid item lg={3} xs={12} sm={6} md={4}  xl={3}  key={serie.id}>
                    <Card type={"serie"} item={serie} />
                </Grid>
            ))}
        </Grid>
    )
};

export default SeriessPage;
