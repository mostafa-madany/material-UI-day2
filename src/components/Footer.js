import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

function Footer() {
  return (
    <Box
      sx={{ backgroundColor: "#f5f5f5", padding: "20px", textAlign: "center" }}
    >
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          About Us
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Support 24/7
        </Link>
        <Link href="#" color="inherit" sx={{ mx: 2 }}>
          Privacy Policy
        </Link>
      </Box>
      <Typography variant="body2" color="text.secondary">
        © 2013 Vacation Rentals
      </Typography>
    </Box>
  );
}

export default Footer;
