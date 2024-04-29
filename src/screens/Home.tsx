import React, { useEffect } from 'react';
import TopAppBar from '../components/TopAppBar';
import { Grid, Card, CardContent, Typography, Box, Button, Hidden } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './style.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Particles from './particles';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import CustomCard from '../components/CustomCard';
import Design from '../components/Design';
import { FloatingWhatsApp } from 'react-floating-whatsapp2';
import ScrollToTop from "react-scroll-to-top";








const Home: React.FC = () => {

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
    <Box >
      <TopAppBar />

      <div className="w-full  bg-black  bg-no-repeat bg-center bg-cover relative overflow-hidden pb-20">



        <Grid container spacing={2} >
          {/* Grid Item with Text */}
          <Grid item xs={12} sm={7}>
            <Box ml={{ xs: 5, lg: 10 }} mr={{ xs: 5, lg: 15 }} mt={{ xs: 10, lg: 20 }}>
              <Typography color="white">Unlocking the Power of Technology</Typography>
              <Typography color="white" fontSize={30} fontWeight={'bolder'} textAlign={'justify'} data-aos="fade-right" data-aos-duration="1000">
                Sentax Lab is a leading software house specializing in the development and delivery of innovative web and mobile applications
              </Typography>
              <Link to="/services" style={{ textDecoration: 'none' }}>
                <Button variant="contained" color="primary" style={{ marginTop: '30px' }}>
                  Talk to Our Experts
                </Button>
              </Link>
            </Box>
          </Grid>
          {/* Grid Item with Image */}
          <Grid item xs={12} sm={5} className="flex justify-center sm:justify-end overflow-hidden  " data-aos-duration="1000" >
            <img src={require('../data/Illustration.png')} alt="Your Image" className="w-half max-w-500 h-auto mt-16" />

          </Grid>
        </Grid>

        <div className="w-full h-screen absolute top-0 left-0">
          <Design />
        </div>
      </div>

      <Box sx={{ m: { xs: 3, lg: 10 }  }} >
        <div data-aos="fade-up"
          data-aos-duration="1000">
          <Typography variant="h4" style={{ fontWeight: 'bold' }}>Our Services</Typography>

        </div>


        <Typography variant="body1" style={{ marginTop: '10px', marginBottom: '20px', textAlign: 'justify' }}>
          With a team of highly skilled developers, designers, and project managers, we strive to deliver cutting-edge technology solutions that empower businesses to thrive in the digital era. We provide a wide range of services to meet your business needs effectively. Our expertise extends to custom Web3 services, Artificial Intelligence, Staff Augmentation, UI/UX Design, and Digital Marketing. By leveraging these services, we can help your business generate leads and drive sales.
        </Typography>

        <Grid container spacing={2}>





          <Grid item xs={12} sm={4}>

            <CustomCard
              backgroundColor="#0693e3"
              title="Web Development"
              description="We create dynamic, responsive, and visually appealing websites tailored to meet our clients' specific requirements. Our web development services encompass front-end and back-end development, e-commerce platforms, content management systems (CMS), and custom web applications/"
              image={require('../data/Card_MetaVerse.png')} />
          </Grid>



          <Grid item xs={12} sm={4}>


            <CustomCard
              backgroundColor="#0693e3"
              title="Artificial Intelligence"
              description="Artificial intelligence is the future. Take your business to the next level as we develop AI applications for various industries from healthcare & forecasting."
              image={require('../data/Card_Artifical_Intelligence.png')} />

          </Grid>
          <Grid item xs={12} sm={4}>


            <CustomCard
              backgroundColor="#0693e3"
              title="Staff Augmentation"
              description="Staff augmentation is an outsourcing strategy that helps you find the right people for the job at hand and hence achieve greater productivity."
              image={require('../data/Card_Staff-Augmentation.png')} />



          </Grid>
          <Grid item xs={12} sm={4}>


            <CustomCard
              backgroundColor="#0693e3"
              title="Mobile App Development"
              image={require('../data/Card_Mobile_App_Development.png')} description="We offer high-end mobile app development services ranging from custom iOS, Android apps, React Native app and Flutter app development."
            />
          </Grid>
        </Grid>
      </Box>

      <Box sx={{ m: { xs: 3, lg: 10 }  }} display="flex" justifyContent="center" alignItems="center">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} display="flex" justifyContent="center">
            <img src={require('../data/Group.png')} alt="Your Image" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
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
            <Typography variant="body1" textAlign={'justify'}>
              Expert Team: Our team comprises talented professionals with diverse skill sets and industry experience. They bring expertise in various programming languages, frameworks, and design principles to create customized software solutions.
            </Typography>
          </Grid>
        </Grid>
      </Box>

      {/* -------------------------------------------- */}

      <Box sx={{ background: 'black', display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
        <Grid m={8}>
          <div data-aos="fade-up"
            data-aos-duration="1000">
            <Typography variant="h4" style={{ fontWeight: 'bold', color: 'white' }}>Software Development Outsourcing</Typography>
          </div>

          <Grid container spacing={2} style={{ marginTop: '40px' }}>
            <Grid item xs={12} sm={1} className="text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box display="flex" justifyContent="center" mb={5}>
                <img src={require('../data/On-Shore.png')} alt="Icon" style={{ width: '80px', height: '80px' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} style={{ color: 'white' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}
                data-aos="fade-right"
                data-aos-duration="1000"
              >Onshore Or Local Outsourcing</Typography>
              <Typography variant="body1" textAlign={'justify'}>
                Onshore outsourcing enables ease of communication, significant cost savings, and effective quality control.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={1} style={{ marginTop: '40px' }}>
            <Grid item xs={12} sm={1} className="text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box display="flex" justifyContent="center" mb={5}>
                <img src={require('../data/Off_Shore.png')} alt="Icon" style={{ width: '80px', height: '80px' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} style={{ color: 'white' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}
                data-aos="fade-right"
                data-aos-duration="2000"
              >Off-Shore Outsourcing</Typography>
              <Typography variant="body1" textAlign={'justify'}>
                Offshore outsourcing enables more efficiency by allowing skilled resources to work on your projects leaving the menial tasks to third parties while you focus on the core of the business and what really matters.
              </Typography>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{ marginTop: '40px' }}>
            <Grid item xs={12} sm={1} className="text-center" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Box display="flex" justifyContent="center" mb={5}>
                <img src={require('../data/Hyperledger.png')} alt="Icon" style={{ width: '80px', height: '80px' }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={8} style={{ color: 'white' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold', marginTop: '10px', marginBottom: '10px' }}
                data-aos="fade-right"
                data-aos-duration="1000"
              >Hybrid Outsourcing</Typography>


              <Typography variant="body1" textAlign={'justify'} >
                Hybrid outsourcing offers a blend of both onshore and offshore outsourcing offering greater flexibility, lower costs and a single source of contact and management so that everything can be managed effectively.
              </Typography>
            </Grid>
          </Grid>

        </Grid>
        <Grid item xs={12} sm={4} className="flex justify-center sm:justify-end" data-aos="fade-right" data-aos-duration="1000">
          <img src={require('../data/box.png')} alt="Your Image" className="w-full max-w-500 h-auto" />
        </Grid>

      </Box>


      <Box sx={{ m: { xs: 3, lg: 10 } }}>
        <div data-aos="fade-up"
          data-aos-duration="1000">
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px' }}>Our Process</Typography>

        </div>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="body1" style={{}}>The stages we go through when we take on a project.</Typography>
          </Grid>
        </Grid>
      </Box>


      <Box sx={{ m: { xs: 5, lg: 10 } }} >
        <Grid container spacing={5} sx={{ marginLeft: { xs: '0px', lg: '40px' } }}>

          <Grid item xs={10} sm={2}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2} textAlign={'center'}>
                <Typography mb={3} fontSize={20} color={'grey'}>Planning</Typography>
                <div className="shape-outer hexagon">
                  <div className="shape-inner hexagon">
                    <span className="text" style={{ fontSize: '20px' }}>01</span>
                  </div>
                </div>
              </Grid>


              {!isSmallScreen && (
                <Grid item sx={{ marginLeft: 6 }}>
                  <img
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="102"
                    src="https://optimusfox.com/wp-content/uploads/2024/01/Group-798.svg"
                    alt=""
                  />
                </Grid>
              )}
            </Grid>
          </Grid>


          <Grid item xs={10} sm={2}>
            <Grid container spacing={3} direction="column" alignItems="center">
              {!isSmallScreen && (
                <Grid item sx={{ marginLeft: 6, marginTop: 17 }} >
                  <img
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="122"
                    src="https://optimusfox.com/wp-content/uploads/2024/01/Group-799@2x.png"
                    alt=""
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2} textAlign={'center'}>

                <div className="shape-outer hexagon">
                  <div className="shape-inner hexagon">
                    <span className="text" style={{ fontSize: 20 }}>02</span>
                  </div>
                </div>
                <Typography mt={3} fontSize={18} color={'grey'}>Initial Meeting and Proposal</Typography>
              </Grid>
            </Grid>
          </Grid>


          <Grid item xs={10} sm={2}>
            <Grid container spacing={1} direction="column" alignItems="center" >
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2} textAlign={'center'}>
                <Typography mb={3} fontSize={17} color={'grey'}>Design and Development</Typography>
                <div className="shape-outer hexagon">
                  <div className="shape-inner hexagon">
                    <span className="text" style={{ fontSize: 20 }}>03</span>
                  </div>
                </div>

              </Grid >


              {!isSmallScreen && (
                <Grid item sx={{ marginLeft: 6 }}  >
                  <img
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="102"
                    src="https://optimusfox.com/wp-content/uploads/2024/01/Group-798.svg"
                    alt=""
                  />
                </Grid>
              )}
            </Grid>
          </Grid>


          <Grid item xs={12} sm={2}>
            <Grid container spacing={3} direction="column" alignItems="center">
              {!isSmallScreen && (
                <Grid item sx={{ marginLeft: 6, marginTop: 17 }} >
                  <img
                    loading="lazy"
                    decoding="async"
                    width="100"
                    height="122"
                    src="https://optimusfox.com/wp-content/uploads/2024/01/Group-799@2x.png"
                    alt=""
                  />
                </Grid>
              )}
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2} textAlign={'center'}>

                <div className="shape-outer hexagon">
                  <div className="shape-inner hexagon">
                    <span className="text" style={{ fontSize: 20 }}>04</span>
                  </div>
                </div>
                <Typography mt={3} fontSize={17} color={'grey'}>Go Live</Typography>
              </Grid>
            </Grid>
          </Grid>



          <Grid item xs={12} sm={2}>
            <Grid container spacing={1} direction="column" alignItems="center">
              <Grid item xs={12} sm={6} md={4} lg={3} mb={2} textAlign={'center'}>
                <Typography mb={3} fontSize={17} color={'grey'} >Marketing for Lead Generation</Typography>
                <div className="shape-outer hexagon">
                  <div className="shape-inner hexagon">
                    <span className="text" style={{ fontSize: 20 }} >05</span>
                  </div>
                </div>

              </Grid>

            </Grid>
          </Grid>



        </Grid>
      </Box>


      <Box mt={20} mb={20} ml={10} mr={10} >
        <div data-aos="fade-up"
          data-aos-duration="1000">
          <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px' }}>The Technologies We Work With</Typography>

        </div>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="body1" style={{}}>We use the latest technological solutions to offer you premium, high value services.</Typography>
          </Grid>
        </Grid>
      </Box>




      <Box sx={{ bgcolor: 'black', p: 2 }}>
        <Grid container spacing={2} alignItems="center">
         
          <Grid item xs={12} sm={6}>
            <div data-aos="fade-right" data-aos-duration="1000">
              <Typography variant="h4" style={{ fontWeight: 'bold', color: 'white', marginBottom: '10px', padding: '25px', marginTop: '10px' }}>
                The Technologies We Work With
              </Typography>
            </div>
          </Grid>
        
          <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" color="primary">
              Talk to Our Experts
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box  sx={{ m: { xs: 3, lg: 10 }  }}>
  <Grid container spacing={2} alignItems="center" justifyContent="center">
    {/* Text */}
    <Grid item xs={12} sm={6}>
      <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Web Development
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px', marginBottom: '30px', textAlign: 'justify' }}>
        We create dynamic, responsive, and visually appealing websites tailored to meet our clients' specific requirements. Our web development services encompass front-end and back-end development, e-commerce platforms, content management systems (CMS), and custom web applications
      </Typography>
      <Grid container spacing={2}>
        {/* Icon Grid */}
        <Grid item xs={4}>
          <img src={require('.././icons/react.png')} alt="Image 1" style={{ width: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={4}>
          <img src={require('.././icons/Node.png')} alt="Image 2" style={{ width: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={4}>
          <img src={require('.././icons/laravel.png')} alt="Image 3" style={{ width: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={4}>
          <img src={require('.././icons/wordpress.png')} alt="Image 4" style={{ width: '50%', height: 'auto' }} />
        </Grid>
        <Grid item xs={4}>
          <img src={require('.././icons/django.png')} alt="Image 5" style={{ width: '50%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Grid>

    <Grid item xs={12} sm={6} className="flex justify-center  ">
      <img
        src={require('../data/Web.png')}
        alt="Your Image"
        style={{
          maxWidth: '50%', // Ensure the image doesn't exceed the container width
          height: 'auto',
          marginBottom:'80px',    
        }}
      />
    </Grid>
  </Grid>
</Box>




      <Box sx={{ m: { xs: 3, lg: 10 }  }}>
  <Grid container spacing={2} alignItems="center" justifyContent="center">
    {/* Image */}
    <Grid item xs={12} sm={6} md={6} lg={6} className="flex justify-center  ">
      <img
        src={require('../data/mobile.png')}
        alt="Your Image"
        style={{
          maxWidth: '50%', // Ensure the image doesn't exceed the container width
          height: 'auto',    // Allow the image's height to adjust based on its width
        }}
      />
    </Grid>

    {/* Text */}
    <Grid item xs={12} sm={6} md={6} lg={6}>
      <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        Mobile App Development
      </Typography>
      <Typography variant="body1" style={{ marginTop: '10px', marginBottom: '30px', textAlign: 'justify' }}>
        Mobile App Development: We build high-performance, user-friendly mobile applications for iOS and Android platforms. Whether it's a native app, hybrid app, or cross-platform app, our team leverages the latest frameworks and technologies to create engaging mobile experiences.
      </Typography>
      <Grid container spacing={2}>
        {/* Icon Grid */}
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <img src={require('.././icons/flutter.png')} alt="Image 1" style={{ width: '60%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <img src={require('.././icons/android.png')} alt="Image 2" style={{ width: '60%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <img src={require('.././icons/Ios.png')} alt="Image 3" style={{ width: '60%', height: 'auto' }} />
        </Grid>
        <Grid item xs={6} sm={3} md={3} lg={3}>
          <img src={require('.././icons/react.png')} alt="Image 4" style={{ width: '60%', height: 'auto' }} />
        </Grid>
      </Grid>
    </Grid>
  </Grid>
</Box>



      <Footer />
     
      <div style={{ display: "flex", flexDirection: "column" }}>
  <FloatingWhatsApp
    phoneNumber="+923066400081"
    accountName="Sentex Lab"
    avatar={require('../data/logo.png')}
    chatMessage='Hello from Sentex Lab! 🤝 How can we assist you today'
  
  />
  <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
</div>


    </Box>


  );
}

export default Home;

