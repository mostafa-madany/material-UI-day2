import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";

const MainSection = () => {
  return (
    <Container sx={{ textAlign: "center", padding: "50px 0" }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Boost your building process with Minimal
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: "20px" }}>
        The starting point for your next project is based on MUI.
      </Typography>
      <Typography variant="body1" sx={{ marginBottom: "40px" }}>
        Easy customization helps you build apps faster and better.
      </Typography>
      <Typography variant="h6" sx={{ marginBottom: "20px" }}>
        160+ Happy customers
      </Typography>
      <Box>
        <Button variant="contained" color="primary" sx={{ margin: "10px" }}>
          Live preview
        </Button>
        <Button variant="contained" color="secondary" sx={{ margin: "10px" }}>
          Figma preview
        </Button>
        <Button variant="outlined" color="primary" sx={{ margin: "10px" }}>
          Get free version
        </Button>
      </Box>
    </Container>
  );
};

export default MainSection;
