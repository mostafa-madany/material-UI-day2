import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import cardImage from "../asstes/1.jfif";

const cards = [
  {
    title: "Type 1",
    image: cardImage,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "$500",
  },
  {
    title: "Type 2",
    image: cardImage,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "$600",
  },
  {
    title: "Type 3",
    image: cardImage,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    price: "$700",
  },
];

function CardSection() {
  return (
    <Grid container spacing={4} sx={{ padding: "40px" }}>
      {cards.map((card, index) => (
        <Grid item xs={12} md={4} key={index}>
          <Card sx={{ textAlign: "center" }}>
            <CardMedia
              component="img"
              image={card.image}
              alt={card.title}
              sx={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                margin: "0 auto",
                marginTop: "20px",
              }}
            />
            <CardContent>
              <Typography variant="h5">{card.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {card.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                sx={{ marginTop: "20px" }}
              >
                Book Now @ {card.price}
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default CardSection;
