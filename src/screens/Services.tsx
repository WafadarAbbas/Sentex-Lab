import React, { useEffect } from 'react';
import TopAppBar from '../components/TopAppBar';
import { Grid, Typography, Box, Divider } from '@mui/material';
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';
import HoverCard from '../components/HoverCard';
import ScrollToTop from 'react-scroll-to-top';





const Services: React.FC = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (

    <div>
      <TopAppBar />


      <Box sx={{ p: 2 }}>

        <Grid container spacing={2} marginTop={5} marginBottom={5}>


          <Grid item xs={12} sm={6}>
            <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
              <div data-aos="fade-up"
                data-aos-duration="1000">
                <Typography variant="h4" style={{ fontWeight: 'bold' }}>What We Offer</Typography>

              </div>
              <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px' }} />

              <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px', textAlign: 'justify' }}>
                We are a Blockchain company helping all kinds of enterprises implement the latest technologies by using innovative strategies to enhance their productivity and accelerate their growth so that they can make a name for themselves in the digital landscape. We offer a variety of services to cater to your business needs. From Blockchain services and solutions, Artificial Intelligence, Software Development, to Digital Marketing services, we’ve got you covered. Whether it’s a startup or an enterprise, we offer services that fit your company’s needs.  </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} className="flex justify-center sm:justify-end" data-aos="fade-right" data-aos-duration="1000">
            <img src={require('../data/Services.png')} alt="Your Image" className="w-half max-w-500 h-auto" />
          </Grid>

        </Grid>

      </Box>


      <Box

        sx={{
          backgroundImage: `url(${require('../data/background.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          width: '100%',
          height: 'auto', // Set the height as per your requirement
        }}
      >
        <div data-aos="fade-up"
          data-aos-duration="1000">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>Our Services</Typography>

        </div>


        <Typography variant="body1" style={{ marginTop: '10px', marginBottom: '20px' }}>
          In addition to Blockchain technology development, we provide a wide range of services to meet your business needs effectively. Our expertise extends to custom Web3 services, Artificial Intelligence, Staff Augmentation, UI/UX Design, and Digital Marketing. By leveraging these services, we can help your business generate leads and drive sales.
        </Typography>

        <Grid container spacing={2}>



          {/* <Grid item xs={12} lg={4} md={6}>
     
            <HoverCard 
               image={require('../data/Card_Block.png')}
               heading="Blockchain Development"
               description="We offer a variety of blockchain development services and solutions ranging from smart contracts to DeFi wallets and decentralized exchanges."
             />
          </Grid> */}


          <Grid item xs={12} lg={4} md={6}>
            <HoverCard
              image={require('../data/Card_MetaVerse.png')}
              heading="Metaverse"
              description="Metaverse is a multidimensional digital space that lies beyond the world we live in. It’s a collection of all possible versions of a place or object, along with our perception of ownership and rights over them."
            />

          </Grid>
          <Grid item xs={12} lg={4} md={6}>


            <HoverCard
              image={require('../data/Card_NFTS.png')}
              heading="NFTs"
              description="NFTs stands for Non-Fungible Tokens. Non fungible token is a term that is used to describe things having unique identity managed via blockchain."
            />


          </Grid>
          <Grid item xs={12} lg={4} md={6}>

            <HoverCard
              image={require('../data/Card_Artifical_Intelligence.png')}
              heading="Artificial Intelligence"
              description="Artificial intelligence is the future. Take your business to the next level as we develop AI applications for various industries from healthcare & forecasting."
            />


          </Grid>
          <Grid item xs={12} lg={4} md={6}>

            <HoverCard
              image={require('../data/Card_Staff-Augmentation.png')}
              heading="Staff Augmentation"
              description="Staff augmentation is an outsourcing strategy that helps you find the right people for the job at hand and hence achieve greater productivity."
            />


          </Grid>
          <Grid item xs={12} lg={4} md={6}>
            <HoverCard
              image={require('../data/Card_Mobile_App_Development.png')}
              heading="Mobile App Development"
              description="We offer high-end mobile app development services ranging from custom iOS, Android apps, React Native app and Flutter app development."
            />
          </Grid>

          <Grid item xs={12} lg={4} md={6}>
            <HoverCard
              image={require('../data/Card_Digital_Marketing.png')}
              heading="Digital Marketing"
              description="We offer Digital Marketing services that help your business with lead generation, making sales and increased ROI."
            />
          </Grid>

          <Grid item xs={12} lg={4} md={6}>
            <HoverCard
              image={require('../data/Card_UX_Design.png')}
              heading="UX Design"
              description="We aim to deliver ultra-modern & user centric web & mobile application designs for your business needs."
            />
          </Grid>

        </Grid>

      </Box>



      <Box sx={{ m: { xs: 3, lg: 10 } }} display="flex" justifyContent="center" alignItems="center">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <img src={require('../data/Group.png')} alt="Your Image" style={{ width: '100%', maxWidth: '600px', height: 'auto' }} />
          </Grid>
          <Grid item xs={12} sm={6} display="flex" flexDirection="column" justifyContent="center">
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
            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '1px', marginBottom: '25px' }} />
            <Typography variant="body1" color={'grey'} textAlign={'justify'}>
              As a blockchain development company, we make use of top-notch solutions to digitally transform your business and take it to new heights. Transforming your Web3 ideas into tangible reality is our expertise. We are committed to delivering quality solutions at every stage of the process. With a deep understanding of blockchain-based software development, we are dedicated to providing innovative solutions tailored to your specific business requirements.
            </Typography>
          </Grid>
        </Grid>
      </Box>



      <Footer />
      <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
    </div>

  );
};

export default Services;
