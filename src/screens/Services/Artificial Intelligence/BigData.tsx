import React, { useEffect } from 'react';
import TopAppBar from '../../../components/TopAppBar';
import Footer from '../../../components/footer';
import { Grid, Card, CardContent, Typography, Box, Button, Divider, Container } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../style.css';
import { Link } from 'react-router-dom';
import Topheading from '../../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../../components/ServicesCompo/ServicesCard';
import illustration from '../../../data/background.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TickBox from '../../../components/ServicesCompo/TickBox';
import HexaShape from '../../../components/ServicesCompo/HexaShape';
import WhyChoose from '../../../components/ServicesCompo/WhyChoose';
import ArrowGrid from '../../../components/ServicesCompo/ArrowGrid';
import BackgroundDiv from '../../../components/ServicesCompo/backgroundDiv';
import ServiceForm from '../../../components/ServicesCompo/ServiceForm';
import ScrollToTop from 'react-scroll-to-top';


const BigData: React.FC = () => {

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
                heading="BIG DATA SOLUTION SERVICES"
                typo1="Big Data service provider offering solutions to help businesses in developing and implementing a comprehensive strategy based on Big Data. Enhance the effective processes of your organization and ensure smooth-running business procedures. Drive maximum growth and increase your revenue stream."
                buttonText="Get Free Consultation"
                stroke="#ffffff"
            />



            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Big Data Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>
                    <Typography variant="body1" color={'grey'} mt={2}>Why to Choose React Native for App Development</Typography>
                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Big Data Consulting"
                                description="Our big data consulting services aim to assist you with the effective implementation of big data into your company. We provide a detailed roadmap to get you started."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Big Data Implementation"
                                description="We support you with solution architecture & design, big data solutions development, and setting up other big data governance procedures."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Big Data Support"
                                description="We ensure timely software updates, backup and recovery, constant performance monitoring, and troubleshooting for any errors."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                    </Grid>

                </Box>
                <BackgroundDiv typoText="
Enhance the effective processes of your organization with Big Data" buttonText="Talk to Our Experts" />
            </Box>






            <Box bgcolor={'#f7f7f7'} pt={10} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Advantages of Big Data Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>
                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Better Decision Making"
                                description="Companies utilize Big Data to refine their advertising, communication, and business-to-business operations. Big Data speeds up the decision-making process by providing advanced analytical insights and business intelligence."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Fraud Detection"
                                description="Financial companies can detect fraud using Big Data. Data analysts use Machine Learning algorithms and Artificial Intelligence to detect any abnormality in the data, ensuring security by early fraud identification."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Improved Customer Service"
                                description="Companies utilize Big Data sources like custom relationship management (CRM) systems, social media, and email interactions to provide personalized services, understand customer needs, and build better connections."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Increased Agility"
                                description="Big Data helps companies become faster and more adaptable to meet market needs. Analyzing data sets on customers helps companies gain insights into customer pain points and improve communication, products, and services."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Increased Productivity"
                                description="Big Data tools increase productivity by helping data scientists analyze enormous amounts of data efficiently, allowing for a quick overview of more information."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Cost Savings"
                                description="Big data analytics (BDA) tools like cloud-based analytics save costs by storing big data and enhancing operational efficiency."
                            />
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
                        <ServiceAccordion heading="Types of Big Data" description="The three types of Big Data include Structured Data, Unstructured Data, and Semi-Structured Data." />
                    </Grid>
                    <Grid item xs={12} >
                        <ServiceAccordion heading="Examples of Big Data" description="Big Data analytics examples include stock exchanges, jet engines, social media sites, etc. It is a collection of data that is huge in size and grows exponentially with time." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="How Companies Use Big Data" description="Businesses make use of analytics to figure out the most ideal and valuable customers. It also helps companies launch new products and services." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Benefits of Big Data" description="Big data services can help you cut costs, increase efficiency, and help you gain a competitive edge which increases your return on investment." />
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

export default BigData;