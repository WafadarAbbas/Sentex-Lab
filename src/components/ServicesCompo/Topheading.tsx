import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Box, Typography, Divider, Button } from '@mui/material';

interface TopheadingProps {
  imageSrc: string;
  heading: string;
  typo1: string;
  typo2?: string;
  buttonText?: string;
  stroke?: string; // New prop for stroke color
}

const Topheading: React.FC<TopheadingProps> = ({ imageSrc, heading, typo1, typo2, buttonText, stroke }) => {
  return (
    <Box>
      <header style={{ position: 'relative', minHeight: '700px', background: '#000000' }}>
        <svg id="svg" xmlns="http://www.w3.org/2000/svg" viewBox="-300 0 950 270" style={{ position: 'absolute', bottom: '0', width: '100%', height: 'auto' }}>
          <path d="M-314,267 C100,394 400,80 712,250" fill="none" stroke={stroke || "white"} strokeWidth="150" strokeLinecap="round" />
          {/* Use stroke color from props, default to white if not provided */}
        </svg>
        <Grid container spacing={2}>
          {/* Grid Item with Text */}
          <Grid item xs={12} sm={7}>
            <Box ml={{ xs: 5, lg: 10 }} mr={{ xs: 5, lg: 15 }} mt={{ xs: 10, lg: 20 }}>
              <Typography color="white" fontSize={30} fontWeight={'bolder'} data-aos="fade-right" data-aos-duration="1000">
                {heading}
              </Typography>
              <Divider orientation="horizontal" sx={{ bgcolor: 'white', height: 6, width: 70, marginTop: '2px', marginBottom: '25px' }} />
              <Typography color="white" mb={2} textAlign={'justify'}>{typo1}</Typography>
              <Typography color="white" textAlign={'justify'}>{typo2}</Typography>
              <Link to="/contactus" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" style={{ marginTop: '30px' }}>
                  {buttonText}
                </Button>
              </Link>
            </Box>
          </Grid>
          {/* Grid Item with Image */}
          <Grid item xs={11} sm={5} className="flex justify-center sm:justify-center overflow-hidden" data-aos="fade-left 1s forward" data-aos-duration="1000">
            <img src={imageSrc} alt="Your Image" className="w-half max-w-500 h-full mt-16 mb-28" />
          </Grid>
        </Grid>
      </header>
    </Box>
  );
};

export default Topheading;
