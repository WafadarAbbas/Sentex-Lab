import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const scrollToTop = () => {
  setTimeout(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page after a short delay
  }, 100); // Adjust the delay as needed
};

interface CardProps {
  backgroundColor?: string;
  title?: string;
  description?: string;
  descriptionColor?: string;
  image?: string;
  showArrow?: boolean;
  link?: string;
}

const ServicesCard: React.FC<CardProps> = ({ backgroundColor = '#0693e3', title, description, descriptionColor, image, showArrow = true, link }) => {
  return (
    <Card
      sx={{
        backgroundColor,
        height: '100%',
        color: 'black',
        boxShadow: 4,
      }}
    >
      <CardContent  >
        {image && (
          <Box display="flex" justifyContent="center" mb={2} mt={5}>
            <img src={image} alt="Service Image" style={{ width: '60px', height: '60px' }} />
          </Box>
        )}
        <Typography style={{ fontSize: '17px', flex: 'wrap' }} mt={2} fontWeight={'bold'} align="center" >{title}</Typography>
        <Typography variant="body1" align="center" p={3} color={descriptionColor}>{description}</Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" mb={2}>
        {showArrow && (
          <Link onClick={scrollToTop} to={link || ''} style={{ textDecoration: 'none' }}> {/* Use the provided link prop or an empty string */}
            Read More <ArrowForwardIcon />
          </Link>
        )}
      </Box>
    </Card>
  );
};

export default ServicesCard;



