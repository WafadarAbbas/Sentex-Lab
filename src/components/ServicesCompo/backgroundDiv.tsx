import React from 'react';
import { Box, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import illustration from '../../data/background.jpg' // Replace with actual path to illustration image

interface Props {
  typoText: string;
  buttonText: string;
}

const BackgroundDiv: React.FC<Props> = ({ typoText, buttonText }) => {
  return (
    <Box sx={{ m: { xs: 2, lg: 10 } }}>
      <Box
        sx={{
          backgroundImage: `url(${illustration})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          minHeight: '100px', // Change height to minHeight to prevent content from overflowing
          color: 'white',
          p: 5,
        }}
      >
        <Grid container spacing={4}>
          <Grid item xs={12} sm={7}>
            <Typography variant="h5" textAlign="left" ml={2} fontWeight={700}>
              {typoText}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Link to="/contactus" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="primary">
                {buttonText}
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default BackgroundDiv;
