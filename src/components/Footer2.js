import React from "react";
import { Container, Typography, Box, Link } from "@mui/material";

const Footer2 = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        padding: "20px 0",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography variant="body2" color="textSecondary">
          © 2024 Minimal. All rights reserved.
        </Typography>
        <Box sx={{ marginTop: "10px" }}>
          <Link href="#" color="inherit" sx={{ margin: "0 10px" }}>
            Privacy Policy
          </Link>
          <Link href="#" color="inherit" sx={{ margin: "0 10px" }}>
            Terms of Service
          </Link>
          <Link href="#" color="inherit" sx={{ margin: "0 10px" }}>
            Contact Us
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer2;
