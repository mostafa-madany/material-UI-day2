import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Vacation Rentals
        </Typography>

        <Button component={Link} to="/task2" color="inherit">
          Go to Task 2
        </Button>
        <Button component={Link} to="/login" color="inherit">
          Login
        </Button>

        <Button color="inherit">Home</Button>
        <Button color="inherit">Top Destinations</Button>
        <Button color="inherit">About Us</Button>
        <Button color="inherit">Book Tickets</Button>
        <Button color="inherit">Reservation</Button>
        <TextField variant="outlined" size="small" placeholder="Search" />
        <IconButton color="inherit">
          <SearchIcon />
        </IconButton>
        <Button color="inherit">Submit</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
