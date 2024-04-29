import React from 'react';
import { Box, Grid, Typography, Divider } from '@mui/material';

const WhyChoose: React.FC = () => {
  return (
    <Box sx={{ m: { xs: 2, lg: 10 } }} display="flex" justifyContent="center" alignItems="center">
      <Grid container spacing={2}>
        <Grid item xs={12} lg={12} display="flex" flexDirection="column" justifyContent="center">
          <Typography
            variant="h4"
            style={{
              fontWeight: 'bold',
              marginBottom: '10px',
            }}
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            Why Choose Sentex Lab?
          </Typography>
          <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, marginTop: '2px', marginBottom: '15px' }} />
          <Typography variant="body1" textAlign={'justify'} color={'grey'}>
            Expert Team: Our team comprises talented professionals with diverse skill sets and industry experience. They bring expertise in various programming languages, frameworks, and design principles to create customized software solutions.<br /><br />
            By continuously enhancing our skill set, we cultivate expertise in cutting-edge technologies that empower you to craft exceptional websites. From conceptualization to final delivery, our process is meticulously professional and transparent. Our aim is to deliver unparalleled customer experiences.<br /><br />

            At Sentex Lab, our adept team specializes in delivering top-notch custom web development services. We are adept in JavaScript, PHP, NodeJs, ReactJs, Magento, WordPress, and more. By incorporating the latest technologies, we empower your business and elevate your brand identity. <br /><br /> Let's collaborate to create remarkable websites.

            To meet the demands of the contemporary market, you require sophisticated custom website development solutions tailored to your specific needs.

            Sentex Lab boasts a seasoned web development team, renowned for crafting bespoke web applications that align seamlessly with your business objectives. Our skilled developers prioritize our clients' visions, ensuring websites resonate with their target audiences.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default WhyChoose;
