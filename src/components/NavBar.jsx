import { AppBar, Toolbar,Typography ,Button } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar =()=>{

    return(
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }} component="div">Movie App</Typography>
                <Button color="inherit" component={Link} to="/">Movie</Button>
                <Button color="inherit" component={Link} to="Actors">Actors</Button>
                <Button color="inherit" component={Link} to="TvShow">TvSows</Button>
                <Button color="inherit" component={Link} to="Series">Series</Button>
            </Toolbar>
        </AppBar>
    )
}
export default NavBar