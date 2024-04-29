import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import Footer from '../../components/footer';
import { Grid,  Typography, Box,   Divider  } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";


import Topheading from '../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../components/ServicesCompo/ServicesCard';
 
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import BackgroundDiv from '../../components/ServicesCompo/backgroundDiv';
import ScrollToTop from 'react-scroll-to-top';


const WebDev: React.FC = () => {

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
        imageSrc={require('../../data/WebBackground.png')}
        heading="WEB DEVELOPMENT SERVICES"
        typo1="Sentex Lab provides exceptional web development services to help businesses worldwide establish a powerful online presence."
        typo2="In the digital era, a captivating website is paramount for brand success, converting visitors into loyal customers. Elevate your brand awareness and unlock new opportunities with our."
        buttonText="Talk To Our Experts"
      />
      <Box bgcolor={'#eaeaea'} pb={5} pt={2}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={11}>
            <Box m={2} p={2}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Why Invest in Web Development?</Typography>
                <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8 }}>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 40, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>It helps build credibility in your brand. A good website serves as the starting point for any potential customer to take your brand seriously. When a customer is looking to work with you, they will first go over your website to get to know your business and all it offers. Therefore, it becomes crucial to invest in web development to build a positive image of your brand and give it credibility.</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 40, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>If you want to retain prospective customers, it is important to build a website that is easy-to-use, easy to navigate, and offers a good user experience. This is what helps retain customers in the long run, and customer retention is extremely important to a business. Websites also help companies establish a unique identity and set themselves apart from their competitors.</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 40, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>An online presence helps your brand become more accessible to clients from all across the globe. Now people from all over the world can have access to your brand and easily contact you should there be any queries. You could lose a large chunk of your customer base if you are not investing in an established website. A website helps people from all over the world to discover your brand and its services.</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 40, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>If your website meets all the requirements of the Google search algorithm, then your website can easily get ranked at the top of the search results granting enhanced visibility for your brand. Your potential customers will easily be able to find you this way.</Typography>
                </Box>
              </div>

            </Box>

          </Grid>
        </Grid>
      </Box>


      <BackgroundDiv
        typoText="Attract leads to your website and enhance ROI"
        buttonText="Talk to Our Experts"
      />

      <Box sx={{ m: { xs: 2, lg: 10 } }}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Custom Web Development Services</Typography>
          <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
        </div>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard
              backgroundColor="#ffff"
              title="WordPress"
              description="The majority of the websites around the globe are powered by WordPress. We offer effective WordPress development services for the most effective digital experiences"
              descriptionColor='grey'
              image={require('../../icons/wordpress.png')}
              link="/Wordpress"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard
              backgroundColor="#ffff"
              title="React"
              descriptionColor='grey'
              description="The majority of the websites around the globe are powered by WordPress. We offer effective WordPress development services for the most effective digital experiences"
              image={require('../../icons/react.png')}
              link="/React"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard
              backgroundColor="#ffff"
              title="JavaScript"
              descriptionColor='grey'
              description="The majority of the websites around the globe are powered by WordPress. We offer effective WordPress development services for the most effective digital experiences"
              image={require('../../icons/Node.png')}
              link="/Node"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard
              backgroundColor="#ffff"
              title="Laravel"
              descriptionColor='grey'
              description="The majority of the websites around the globe are powered by WordPress. We offer effective WordPress development services for the most effective digital experiences"
              image={require('../../icons/laravel.png')}
              link="/Laravel"
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <ServicesCard
              backgroundColor="#ffff"
              title="Node"
              descriptionColor='grey'
              description="The majority of the websites around the globe are powered by WordPress. We offer effective WordPress development services for the most effective digital experiences"
              image={require('../../icons/react.png')}
              link="/Node"
            />
          </Grid>


        </Grid>
      </Box>



      <Box sx={{ m: { xs: 2, lg: 10 } }}>
        <div data-aos="fade-up" data-aos-duration="1000">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>FAQ </Typography>
          <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
        </div>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <ServiceAccordion heading="What are web development services?" description="They are all activities used to develop websites for hosting on the internet. Web development services can range from developing static pages to full-fledged web applications." />
          </Grid>
          <Grid item xs={12} >
            <ServiceAccordion heading="What is included in website development?" description="It includes all development tasks from client-side/server-side scripting, network security configuration, content management system (CMS) development, and eCommerce development." />
          </Grid>
          <Grid item xs={12}>
            <ServiceAccordion heading="What is the cost of building a website?" description="Website development costs depend on the type of project. The costs primarily depend from company to company. Consult with our web development team and get an estimate of the exact rates depending on your requirements and specifications." />
          </Grid>
          <Grid item xs={12} >
            <ServiceAccordion heading="What are the main types of web development?" description="The main types of web development include front-end development, back-end development, and full-stack web development." />
          </Grid>
        </Grid>
      </Box>


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


      <Footer />
      <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
    </div>
  );
}

export default WebDev;