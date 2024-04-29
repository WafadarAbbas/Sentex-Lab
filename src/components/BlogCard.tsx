import React from "react";
import { Link } from "react-router-dom";
import { Grid, Box, Typography, Divider } from "@mui/material";

interface ArticleCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const BlogCard: React.FC<ArticleCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <Grid container>
      <Grid item xs={12} sm={5} mt={3} className="flex justify-center sm:justify-center items-center">
        <Link to={link}>
        <Box >
        <img
          src={imageUrl}
          alt="Your Image"
          className="rounded-lg"
          style={{
            height: "100%", // Set height to 100% to ensure it fills its container
            width: "90%",
            transition: "transform .3s ease-out",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.transform = "scale(1.1)";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
        />
        </Box>
      
        </Link>
      </Grid>
      <Grid item xs={12} sm={7} mt={3}>
        <Link to={link}>
          <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
            <Typography variant="h5" style={{ fontWeight: 'bold' }}>{title}</Typography>
            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />
            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
              {description}
            </Typography>
          </Box>
        </Link>
      </Grid>
    </Grid>
  );
};

export default BlogCard;
