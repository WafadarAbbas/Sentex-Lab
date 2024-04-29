import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ArrowGridProps {
  items: string[];
}

const ArrowGrid: React.FC<ArrowGridProps> = ({ items }) => {
  return (
    <Grid container spacing={2} justifyContent="left" mt={3}>
      {items.map((item, index) => (
        <Grid key={index} item xs={12} sm={6}>
          <Box sx={{ display: 'flex' }}>
            <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
            <Typography sx={{ flexGrow: 1, color: 'grey' }}>{item}</Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ArrowGrid;

