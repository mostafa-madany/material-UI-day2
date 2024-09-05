import React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import beachImage from "../asstes/1.jfif";
function HeroSection() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${beachImage})`, // Replace with the actual URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
      }}
    >
      <Typography variant="h2">Best Vacation Rentals</Typography>
      <Typography variant="h6">Sed placerat fringilla quam</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 2 }}>
        Start Now!
      </Button>
    </Box>
  );
}

export default HeroSection;
