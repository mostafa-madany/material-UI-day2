import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  button: {
    marginLeft: "16px",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Minimal
          </Typography>
          <Button component={Link} to="/" color="inherit">
            Go to Task 1
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>

          <Button color="inherit">Home</Button>
          <Button color="inherit">Components</Button>
          <Button color="inherit">Pages</Button>
          <Button color="inherit">Docs</Button>
          <Button color="inherit">Sign in</Button>
          <Button color="inherit">Purchase</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
