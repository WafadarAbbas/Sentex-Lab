import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';
import { RoundedCorner } from '@mui/icons-material';

interface CardProps {
  backgroundColor?: string;
 
  title?: string;
  description?: string;
  image?: string;
}

const CustomCard: React.FC<CardProps> = ({ backgroundColor = '#0693e3', title, description, image }) => {
  return (
    <Card
      sx={{
        backgroundColor,
        height : '450px',
  
        color: 'white',
        '&:hover': { backgroundColor: 'black' },
        '&:active': { backgroundColor: 'black' },
      }}
    >
      <CardContent>
        <Box display="flex" justifyContent="center" mb={5}>
        <img src={image} alt="Icon" style={{ width: '100px', height: '100px' }} />
        </Box>
        <Typography style={{fontSize: '20px', flex:'wrap'}}  fontWeight={'bold'} align="center" mb={2}>{title}</Typography>
        <Typography variant="body1" align="center">{description}</Typography>
      </CardContent>
      <Box display="flex" justifyContent="center" mb={2}>
        <Link to={'/'}>
        Read More <ArrowForwardIcon />
        </Link>
      </Box>
    </Card>
  );
};

export default CustomCard;
