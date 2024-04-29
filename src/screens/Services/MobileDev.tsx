import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import Footer from '../../components/footer';
import { Grid,  Typography, Box,  Divider  } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";


import Topheading from '../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../components/ServicesCompo/ServicesCard';
 
import BackgroundDiv from '../../components/ServicesCompo/backgroundDiv';
import ScrollToTop from 'react-scroll-to-top';















const MobileDev: React.FC = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    setIsVisible(true);
  }, []); // Trigger the fade-in animation when the component mounts


  const [isSmallScreen, setIsSmallScreen] = React.useState(false);

  // Function to update the screen size state
  const handleResize = () => {
    setIsSmallScreen(window.innerWidth < 600); // Example threshold for small screen
  };

  // Add event listener to handle window resize
  React.useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize(); // Initial call to set the initial screen size
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <TopAppBar />

      <Topheading
        imageSrc={require('../../data/MobileBackground.png')}
        heading="MOBILE APP DEVELOPMENT SERVICES BY SENTEX LAB"
        typo1="Sentex is a mobile app development firm that specializes in creating high-performance, feature-packed, and resilient mobile applications for both iOS and Android platforms."
        typo2="With proficiency in developing cross-platform applications, the company ensures compatibility across various operating systems."

        buttonText="Get Free Consultancy" />






      <Box sx={{ m: { xs: 2, lg: 10 } }}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>How Can Sentex Lab Help You? </Typography>
          <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
        </div>
        <Typography mb={2} color={'grey'}>
          Since we have the expertise in both native and cross-platform technologies, we always keep a balance between the price, quality, and requirements of the client so that we can offer the best solution to their specific problems. We aim to deliver applications without glitches, bugs and to provide a stellar user experience with our design strategy to engage large audiences.
        </Typography>
        <Typography mb={5} color={'grey'}>We are one of the top mobile app development company in the USA that are dedicated to delivering maximum output to the clients in both iOS and Android technology. We offer cost-effective solutions that make us a profitable choice for clients. Hire us to build apps that stand out.</Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={6}>
            <ServicesCard
              backgroundColor="#ffff"
              title="iOS App Development"
              description="We build futuristic iOS applications in both Swift and Objective-C as per the requirements of our clients."
              image={require('../../icons/Ios.png')}
              link="/Ios"
              descriptionColor='grey'
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ServicesCard
              backgroundColor="#ffff"
              title="Android App Development"
              description="Our mobile application development team is equipped with the complete knowledge and expertise on Android app development."
              image={require('../../icons/android.png')}
              descriptionColor='grey'
              link="/Android"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ServicesCard
              backgroundColor="#ffff"
              descriptionColor='grey'
              title="Flutter Development"
              description="Sentex Lab is a leading flutter app development company aiming to empower businesses across the globe with flutter applications."
              image={require('../../icons/flutter.png')}
              link="/Flutter"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <ServicesCard
              backgroundColor="#ffff"
              title="React Native"
              descriptionColor='grey'
              description="Empower your applications through user-friendly, responsive, and compelling UI/UX designs. We have a team of expert React Native developers."
              image={require('../../icons/react.png')}
              link="/Native"
            />
          </Grid>



        </Grid>
      </Box>


      <BackgroundDiv
        typoText="Creating applications that deliver value"
        buttonText="Talk to Our Experts"
      />




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
              data-aos-duration="500"
            >
              Best Cross Platform Mobile App Development Services
            </Typography>
            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, marginTop: '2px', marginBottom: '15px' }} />
            <Typography variant="body1" textAlign={'justify'} color={'grey'} data-aos="fade-right"
              data-aos-duration="1000">
              We aim to develop scalable mobile applications for our customers. There is a margin in the architecture of the application for future addition of features and protocols. Just because an app has been fully built doesn’t mean the process of feature addition ends. We develop mobile apps that have the capability of additional features being added into them. If you want to add more features in the future due to the competitive nature of the market then we will enable you to do so easily. Our objective is to deliver the best performance with scalable apps. It helps us build state of the art mobile app development services for our clients.
              Sentex Lab boasts a seasoned web development team, renowned for crafting bespoke web applications that align seamlessly with your business objectives. Our skilled developers prioritize our clients' visions, ensuring websites resonate with their target audiences.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor={'#e9e8e8'} pt={10} pb={5}>
        <Box sx={{ m: { xs: 2, lg: 10 } }} display="flex" justifyContent="center" alignItems="center" >
          <Grid container spacing={2}>

            <Grid item xs={12} lg={12} display="flex" flexDirection="column" justifyContent="center">
              <Typography
                variant="h4"
                style={{
                  fontWeight: 'bold',
                  marginBottom: '10px',
                }}
                data-aos="fade-right"
                data-aos-duration="500"
              >
                Drive Fascinating User Experiences
              </Typography>
              <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, marginTop: '2px', marginBottom: '15px' }} />
              <Typography variant="body1" textAlign={'justify'} color={'grey'} data-aos="fade-right"
                data-aos-duration="1000">
                We take an approach that puts the concern of the user first at Sentex Lab. Our software development process provides the best user experience and remarkable interfaces. The primary concern while designing or developing a software application is the way users interact with it. Considering it the most valuable aspect of development, we strategically put our main focus on it. The idea behind an engaging user experience is to retain the user on your app and make them purchase your product. We believe in providing the best user experience keeping in mind the varying skill set of the users. The mobile apps we develop are user-friendly, catering to all kinds of users. Let us help you build apps that stand out in the competitive landscape.
              </Typography>
            </Grid>
          </Grid>
        </Box>

      </Box>

      <Box sx={{ m: { xs: 2, lg: 10 } }}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>FAQ </Typography>
          <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
        </div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ServiceAccordion heading="We Build Native And Cross-Platform Applications" description='We are offering mobile app development services in both domains, iOS and Android. Our experienced team of mobile app developers are competent in developing both native and cross-platform applications for your business. OptimusFox develops mobile apps that has a wide array of features.' />
          </Grid>
          <Grid item xs={12} >
            <ServiceAccordion heading="Mobile App Development Services For Scalable Results" description='Our highly skilled mobile application development team develops system architectures that guarantee optimal working of the mobile applications. App development is done by high performing teams that use the latest software development frameworks. Following the latest technology trends, we build apps with excellent performance.' />
          </Grid>
          <Grid item xs={12}>
            <ServiceAccordion heading="We Guarantee Data Security" description='Security is a primary concern for users. As such, security is a major factor that we never compromise on when it comes to the apps we develop. As a mobile application development company, Optimus Fox ensures security at every level of  the development process right from the beginning to the last step. With lots of data in the Cloud as well as data centers of Google facility, people are concerned about their personal data. We are aware of these growing concerns and hence put our primary focus on the security of your data. We provide applications that are highly secure. ' />
          </Grid>

        </Grid>
      </Box>




      {/* <Box
                sx={{
                    backgroundImage: `url(${illustration})`, // Use the imported image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '100px', // Set the height of the box
                    color: 'white', // Text color
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '10px'
                }}
            >

            </Box> */}
      <Footer />
      <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
    </div>
  );
}

export default MobileDev;