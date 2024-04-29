import React, { useEffect } from 'react';
import TopAppBar from '../components/TopAppBar';
import { Grid, Box, Typography, Divider, Paper } from '@mui/material';
import './style.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FilterHdrIcon from '@mui/icons-material/FilterHdr';
import CrisisAlertIcon from '@mui/icons-material/CrisisAlert';
import Groups2Icon from '@mui/icons-material/Groups2';
import ScrollToTop from 'react-scroll-to-top';

const AboutUs: React.FC = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div>
            <TopAppBar />
            <Box sx={{ p: 2 }}>
                <Grid container spacing={2} marginTop={2}>
                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-end" data-aos="fade-right" data-aos-duration="1000">
                        <img src={require('../data/Team.png')} alt="Your Image" className="w-half max-w-500 h-auto" />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={{ xs: 'normal', lg: '55px' }}>
                            <Typography variant="h4" style={{ fontWeight: 'bold' }} data-aos="fade-up" data-aos-duration="1000">Why Choose Sentax Lab</Typography>
                            <Typography fontSize={{ xs: 18, sm: 24 }} fontFamily="bold">
                                We Are Technical Innovators
                            </Typography>
                            <Typography color="grey" marginTop={1}>
                                Sentax Lab is a leading software house specializing in the development and delivery of innovative web and mobile applications, as well as robust account system solutions. With a team of highly skilled developers, designers, and project managers, we strive to deliver cutting-edge technology solutions that empower businesses to thrive in the digital era.
                            </Typography>
                            <Grid container spacing={2} marginTop={2}>
                                {/* First Row */}

                                <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                                    <CheckCircleIcon style={{ color: '#0096FF', marginRight: '5px', fontSize: '2rem' }} />
                                    <Typography color="grey" >Data Analytics</Typography>
                                </Grid>
                                {/* Second Row */}
                                <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                                    <CheckCircleIcon style={{ color: '#0096FF', marginRight: '5px', fontSize: '2rem' }} />
                                    <Typography color="grey">IT Consultancy</Typography>
                                </Grid>
                                <Grid item xs={12} sm={6} md={6} style={{ display: 'flex', alignItems: 'center' }}>
                                    <CheckCircleIcon style={{ color: '#0096FF', marginRight: '5px', fontSize: '2rem' }} />
                                    <Typography color="grey">Data Security</Typography>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

            <Box sx={{ bgcolor: '#F1F1F1', p: 2 }}>
                <Box m={{ xs: 0, lg: 10 }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} lg={12} textAlign={'center'}>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Our Company Values </Typography>
                            </div>

                            <Typography variant="body1" style={{ marginTop: '5px', marginBottom: '40px' }}>
                                We have strong values which we abide by.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '550px', overflow: 'hidden' }}>
                                <FilterHdrIcon style={{ color: '#0096FF', fontSize: 100, marginBottom: '10px', }} />
                                <Typography variant="h6" gutterBottom fontSize={30} fontWeight={'bold'}>
                                    Vision
                                </Typography>
                                <Typography variant="body1" color="grey">
                                    At Sentex Lab, our mission is clear: to deliver unparalleled excellence through premium services that consistently exceed customer expectations. Through our relentless pursuit of innovation, we empower our clients to realize their business objectives, leveraging cutting-edge technologies to drive success and foster growth in an ever-evolving digital landscape.
                                </Typography>
                            </Paper>
                        </Grid>
                        {/* Second Paper */}
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '550px', overflow: 'hidden' }}>
                                <CrisisAlertIcon style={{ color: '#0096FF', fontSize: 100, marginBottom: '10px' }} />
                                <Typography variant="h6" gutterBottom fontSize={30} fontWeight={'bold'}>
                                    Values
                                </Typography>
                                <Typography variant="body1" color="grey">
                                    At Sentex Lab, our values are the cornerstone of our success. We pride ourselves on delivering innovative solutions that not only meet but exceed the expectations of our clients, fostering long-term partnerships built on trust and mutual respect. Our unwavering commitment to providing tailored blockchain technology solutions ensures that we consistently address the unique needs and objectives of each client, driving impactful results and sustainable growth.
                                </Typography>
                            </Paper>
                        </Grid>
                        {/* Third Paper */}
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={3} style={{ padding: '20px', textAlign: 'center', height: '550px', overflow: 'hidden' }}>
                                <Groups2Icon style={{ color: '#0096FF', fontSize: 100, marginBottom: '10px' }} />
                                <Typography variant="h6" gutterBottom fontSize={30} fontWeight={'bold'}>
                                    VISION
                                </Typography>
                                <Typography variant="body1" color="grey">
                                    At Sentex Lab, we envision a future where cutting-edge technological solutions seamlessly integrate into every facet of business operations. Our commitment lies in empowering enterprises to embrace the transformative potential of blockchain technology, revolutionizing their business processes and unlocking new opportunities for growth and innovation.
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* <Box sx={{ bgcolor: '#ffff', p: 2 }}>
                <Box m={{ xs: 0, lg: 10 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div data-aos="fade-up" data-aos-duration="1000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Our Team</Typography>
                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 10, width: 70, marginTop: '2px' }} />
                            <Typography variant="body1" style={{ marginTop: '10px', marginBottom: '20px' }}>
                                We have a team of enthusiastic professionals with years of experience in design, product development, marketing, technology and community building to set your business up for success.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={3} style={{ background: '#F8F7F7', padding: '20px', textAlign: 'center', height: '450px', overflow: 'hidden' }}>
                                <img src={require('../data/mem3.png')} alt="Your Image" className="w-full max-w-500 h-auto transition-transform duration-300 hover:scale-105" />
                                <Typography variant="h6" gutterBottom fontSize={30} fontWeight={'bold'} marginTop={5}>
                                    Mujab Popalzai
                                </Typography>
                                <Typography variant="body1" color="blue">
                                    Co-Founder & CEO
                                </Typography>
                            </Paper>
                        </Grid>
                       
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={3} style={{ background: '#F1F1F1', padding: '20px', textAlign: 'center', height: '450px', overflow: 'hidden' }}>
                                <img src={require('../data/mem2.png')} alt="Your Image" className="w-full max-w-500 h-auto transition-transform duration-300 hover:scale-105" />
                                <Typography variant="h6" gutterBottom fontSize={30} fontWeight={'bold'} marginTop={5}>
                                    Mujab Popalzai
                                </Typography>
                                <Typography variant="body1" color="blue">
                                    Co-Founder & CEO
                                </Typography>
                            </Paper>
                        </Grid>
                       
                        <Grid item xs={12} sm={4}>
                            <Paper elevation={3} style={{ background: '#F1F1F1', padding: '20px', textAlign: 'center', height: '450px', overflow: 'hidden' }}>
                                <img src={require('../data/mem.png')} alt="Your Image" className="w-full max-w-500 h-auto transition-transform duration-300 hover:scale-105" />
                                <Typography variant="h6" gutterBottom fontSize={30} fontWeight={'bold'} marginTop={5}>
                                    Mujab Popalzai
                                </Typography>
                                <Typography variant="body1" color="blue">
                                    Co-Founder & CEO
                                </Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Box> */}

            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>
    );
};

export default AboutUs;
