import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface CustomCardProps {
  image: string;
  heading: string;
  description: string;
}

const HoverCard: React.FC<CustomCardProps> = ({
  image,
  heading,
  description,
}) => {
  return (
    <Card
      sx={{
        backgroundColor: "transparent",
        height: "400px",
        color: "white",
        "&:hover": {
          backgroundColor: "#000000",
          transition: "background-color 0.1s ease-in-out",
        },
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="center" mb={2}>
          <img src={image} alt="Your Image" className="  w-1/5 max-w-300 h-auto" />
        </Box>
        <Typography variant="h6" align="center">
          {heading}
        </Typography>
        <Typography variant="body1" align="center">
          {description}
        </Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" mb={2}>
        Read More <ArrowForwardIcon />
      </Box>
    </Card>
  );
};

export default HoverCard;
