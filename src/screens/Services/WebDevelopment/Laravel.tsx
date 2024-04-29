import React, { useEffect } from 'react';
import TopAppBar from '../../../components/TopAppBar';
import Footer from '../../../components/footer';
import { Grid,   Typography, Box,   Divider  } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../style.css';

import Topheading from '../../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../../components/ServicesCompo/ServicesCard';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import HexaShape from '../../../components/ServicesCompo/HexaShape';
import BackgroundDiv from '../../../components/ServicesCompo/backgroundDiv';
import ServiceForm from '../../../components/ServicesCompo/ServiceForm';
import ScrollToTop from 'react-scroll-to-top';


const Laravel: React.FC = () => {

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
        imageSrc={require('../../../data/Illustration.png')}
        heading="LARAVEL DEVELOPMENT SERVICES COMPANY"
        typo1="With the utilization of the Laravel development framework, we craft PHP web applications that are both scalable and durable, enriched with cutting-edge functionalities."
        typo2='Laravel, an open-source PHP framework, empowers us to create stunning and feature-packed websites of any scale, catering to diverse requirements.                '
        buttonText="Get Free Consultation"
        stroke="#f7f7f7"
      />

      <Box bgcolor={'#f7f7f7'} pb={5} pt={2}>

        <Grid container justifyContent="center">
          <Grid item xs={12} md={11}>
            <Box m={2} p={2}>
              <div data-aos="fade-up" data-aos-duration="1000">
                <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Benefits of Laravel Framework</Typography>
                <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', marginBottom: 8, marginTop: 20 }}>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>Allow speedy development that makes application launch faster</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>Comes with pre-installed Libraries</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>Provides threats by having high-class security</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>MVC support increases performance</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>Easy unit testing</Typography>
                </Box>
                <Box sx={{ display: 'flex', marginBottom: 2 }}>
                  <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                  <Typography sx={{ flexGrow: 1, color: 'grey' }}>Tools, templates, and libraries for easy development</Typography>
                </Box>
              </div>



            </Box>

          </Grid>

        </Grid>
        <BackgroundDiv
          typoText='Achieve fast development and efficiency with Laravel Development'
          buttonText='Talk to our Expert'
        />
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
              Best Larval Development Company
            </Typography>
            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, marginTop: '2px', marginBottom: '15px' }} />
            <Typography variant="body1" textAlign={'justify'} color={'grey'}>
              Sentex Lab Pakistan is a leading Laravel development company in Pakistan. Our skilled Laravel developers are dedicated to delivering high-quality web and mobile applications tailored to your needs. Whether you require a simple CMS or a complex solution, our team has the expertise to bring your vision to life. Backed by years of industry experience, we specialize in crafting innovative and professional web applications that leave a lasting impression. Partner with Sentex Lab Pakistan for cutting-edge Laravel development services that elevate your brand and drive business growth.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
        <Box sx={{ m: { xs: 3, lg: 10 } }}>
          <div data-aos="fade-right" data-aos-duration="1000">
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Laravel Development Services</Typography>
            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
          </div>
          <Grid container spacing={2} >
            <Grid item lg={6} xs={12}>
              <ServicesCard
                backgroundColor="#ffff"
                title="Our Laravel Development Services"
                description="We can develop solid web applications in the PHP framework. We can deliver web solutions for multiple sectors, like health, insurance, cargo, e-commerce, and others."
                descriptionColor='grey'
                showArrow={false}
              />

            </Grid>
            <Grid item lg={6} xs={12}>
              <ServicesCard
                backgroundColor="#ffff"
                title="Maintenance & Support Services"
                description="To allow the best performance of web apps, Sentex Lab provides maintenance and support services to its clients."
              />

            </Grid>
            <Grid item lg={6} xs={12}>
              <ServicesCard
                backgroundColor="#ffff"
                title="E-Commerce Development Solutions"
                description="Sentex Lab brings exclusive e-commerce solutions through PHP web development services. This enables you to enhance your traffic which will increase your sales and revenue. Our experts make attractive websites and applications by using high-quality UI designs."

                descriptionColor='grey'
                showArrow={false}
              // image={require('../../data/apple.png')}
              />
            </Grid>
            <Grid item lg={6} xs={12}>
              <ServicesCard
                backgroundColor="#ffff"
                title="Migration to Laravel Solutions"
                description="Our high talent team brings Laravel data migration services. They will help migrate your data from one Laravel platform to another. This offers a huge opportunity to upgrade your web to enjoy the latest functionalities and improve the user experience."

                descriptionColor='grey'
                showArrow={false}

              />
            </Grid>


          </Grid>
        </Box>
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
              Custom Laravel Development Solutions at Sentex Lab
            </Typography>
            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, marginBottom: '15px' }} />
            <Typography variant="body1" textAlign={'justify'} color={'grey'}>
              We deliver excellent custom Laravel development services according to industry standard. Our expert team has the ability to do customizations in your current applications and others. We can develop websites like e-commerce, ERP, and CRM solutions.<br /><br />

              Our creative and professional Laravel developers create the most appealing designs. They can integrate built-in features that bring top-notch user experiences. In short, our customized Laravel development services will help you get an appropriate and functional website best suited for your business.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ m: { xs: 2, lg: 10 } }}>
        <Grid container spacing={2} >
          <Grid item lg={4} xs={12}>
            <ServicesCard
              backgroundColor="#ffff"
              title="Rent Applications Development"
              description="We can deliver web Laravel-based applications for homes, equipment, and car renting."
              descriptionColor='grey'
              showArrow={false}
            />
          </Grid>
          <Grid item lg={4} xs={12}>
            <ServicesCard
              backgroundColor="#ffff"
              title="Laravel Enterprise Solutions"
              description="If you have a large business, we offer Laravel Enterprise development services specifically catered for you. This enables you to engage with more audiences as well as handle your sales."
              descriptionColor='grey'
              showArrow={false}
            />
          </Grid>
          <Grid item lg={4} xs={12}>
            <ServicesCard
              backgroundColor="#ffff"
              title="Rent Applications Development"
              description="We can deliver web Laravel-based applications for homes, equipment, and car renting."

              descriptionColor='grey'
              showArrow={false}
            // image={require('../../data/apple.png')}
            />
          </Grid>
          <Grid item lg={4} xs={12}>
            <ServicesCard
              backgroundColor="#ffff"
              title="B2B/B2C App Development"
              description="We deliver Laravel-based business-to-business (B2B) and business-to-consumer (B2C) solutions for your business. We offer flexible and scalable solutions optimized for multiple devices and platforms."
              descriptionColor='grey'
              showArrow={false}
            // image={require('../../data/apple.png')}
            />
          </Grid>


        </Grid>
      </Box>






      <Box bgcolor={'#f7f7f7'} pb={2} pt={2}>
        <Box sx={{ m: { xs: 2, lg: 15 } }}>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Typography variant="h4" style={{ fontWeight: 'bold' }}>Our Development Process </Typography>
            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
          </div>
          <Typography variant='body1' color={'grey'} mb={5} >In order to make things easier for the client. Our laravel developer follows a step-by-step process that is listed below:</Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 1" imageUrl={require('../../../data/notebook.png')} Description='Understand the project' />
            </Grid>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 2" imageUrl={require('../../../icons/Define.png')} Description='Define the Project Scope' />
            </Grid>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 3" imageUrl={require('../../../icons/UiUx.png')} Description='Design the project UI/UX' />
            </Grid>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 4" imageUrl={require('../../../icons/project.png')} Description='Project development' />
            </Grid>
          </Grid>
          <Divider />
          <Grid container spacing={3} mt={5}>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 5" imageUrl={require('../../../icons/project.png')} Description='Project testing' />
            </Grid>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 6" imageUrl={require('../../../icons/Feedback.png')} Description='Feedback and implementations' />
            </Grid>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 7" imageUrl={require('../../../icons/fullstack.png')} Description='Product Deployment' />
            </Grid>
            <Grid item xs={12} lg={3}>
              <HexaShape title="Step 8" imageUrl={require('../../../icons/Maintenance.png')} Description='Maintenance' />
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
            <ServiceAccordion
              heading="From where one can get software development services in the USA?"
              description="Sentex Lab is the best software development company if you look at the complete range of services that we offer and take a look at the expertise of our developers in different sectors."
            />
          </Grid>
          <Grid item xs={12} >
            <ServiceAccordion
              heading="How do you build any website for a client?"
              description="We build websites for customers on the basis of their required specifications. However, we follow the following roadmap: Brainstorming, Wireframes, Design, Development, Delivery."
            />

          </Grid>
          <Grid item xs={12}>
            <ServiceAccordion
              heading="Does your company deliver SEO services when you build websites for clients?"
              description="Yes, we deliver SEO services as well."
            />

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

      <ServiceForm />


      <Footer />
      <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
    </div>
  );
}

export default Laravel;