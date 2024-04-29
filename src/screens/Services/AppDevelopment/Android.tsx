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
import BackgroundDiv from '../../../components/ServicesCompo/backgroundDiv';
import ServiceForm from '../../../components/ServicesCompo/ServiceForm';
import ScrollToTop from 'react-scroll-to-top';


const Android: React.FC = () => {

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
                heading="ANDROID APP DEVELOPMENT SERVICES"
                typo1="Sentex Lab s a globally recognized Android app development company, committed to offering groundbreaking solutions to businesses across the globe."
                typo2='Our objective is to design mobile applications with extensive feature sets that empower our clients to gain a competitive advantage and enhance their business value.'
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />

            <Box bgcolor={'#f7f7f7'} pt={10} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Why Invest in Android Applications?</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>

                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="High Return on Investment"
                                description="Using Android SDK is one benefit of android app development. Developers can use the SDK to build intuitive and interactive applications. Although developers would be required to pay a one-time registration fee for application distribution, they can use any computer device to build and test the product for their smartphones, leading to low investment and enhanced user engagement. Users would enjoy the interactive applications, and companies would gain a greater return on investment."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Faster Deployment"
                                description="Android applications for companies have development cycles that only last a few hours. This provides companies with a competitive edge, especially those who prefer a quicker go-to-market for their ideas. Reduced time to market is desired by all companies, and that is one of the many benefits of Android app development."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Versatility and Scalability"
                                description="With the introduction of Android studio, it makes Android apps compatible with the leading tools and technologies such as AR/VR, the Internet of Things, etc. Android app platforms are also versatile, and it allows developers to build dynamic mobile applications that serve a multitude of purposes after being installed."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Security"
                                description="Android applications have built-in extensive security features. They will help protect applications from malware attacks and viruses. Safety and reliability are extremely important for the end-user and Android applications have all the features to help with that."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Customization"
                                description="Since Android is an open-source platform, it offers extensive customization features to developers. This is exactly why Android apps are a popular choice for users. This helps companies reach a broader audience by being up to date and on par with the constantly evolving requirements. The feature-rich applications help companies boost their sales and revenue and gain a competitive edge. Developers can launch applications that are futuristic, innovative, and robust."
                            />
                        </Grid>
                    </Grid>


                </Box>
            </Box>


            <BackgroundDiv typoText='Offering intuitive and user-friendly Android applications' buttonText='Talk to our Expert' />


            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Android App Development Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>
                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Custom Android App Development"
                                description="We help you launch Android applications that are completely tailored to your needs and requirements. We will create apps that appeal to your customer base."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Enterprise Android App Development"
                                description="The majority of the websites around the globe are powered by WordPress. We offer effective WordPress development services for the most effective digital experiences"
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Android App Testing"
                                description="We carry out app testing to make sure all features and functionalities are running smoothly and ensure the optimum performance of the application."

                                descriptionColor='grey'
                                showArrow={false}
                            // image={require('../../data/apple.png')}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Android App Maintenance"
                                description="We help with your app maintenance by installing all the latest updates and making sure your apps are free of errors and bugs that need fixing."
                                descriptionColor='grey'
                                showArrow={false}
                            // image={require('../../data/apple.png')}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Android App Support"
                                description="We provide ongoing support and make sure to immediately resolve any issues and experiences that you may have. We aim to provide the best app experience to you."
                                descriptionColor='grey'
                                showArrow={false}
                            // image={require('../../data/apple.png')}
                            />
                        </Grid>


                    </Grid>
                </Box>
            </Box>

            <Box pb={2} pt={2}>
                <Box sx={{ m: { xs: 2, lg: 15 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Android App Development Process</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 1 }} />
                    </div>

                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={6} lg={2}>
                            <HexaShape title="Step 1" Description="Scope of the application" imageUrl={require('../../../data/notebook.png')} />
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <HexaShape title="Step 2" Description="Project plan" imageUrl={require('../../../icons/project.png')} />
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <HexaShape title="Step 3" Description="UI/UX Design" imageUrl={require('../../../icons/UiUx.png')} />
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <HexaShape title="Step 4" Description="Development phase" imageUrl={require('../../../icons/prototype.png')} />
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <HexaShape title="Step 5" Description="Application testing" imageUrl={require('../../../icons/Target.png')} />
                        </Grid>
                        <Grid item xs={6} lg={2}>
                            <HexaShape title="Step 6" Description="Deployment of the project" imageUrl={require('../../../icons/Target.png')} />
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
                        <ServiceAccordion heading="What does an Android app development company do?" description="An Android app development company has developers that are competent at building scalable and robust Android applications for their clients." />
                    </Grid>
                    <Grid item xs={12} >
                        <ServiceAccordion heading="How much does an Android app cost to develop?" description="This depends on the company’s requirements and the features and functionalities that the application requires. If the application requires more features and is complex, it will cost more." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="What are the basics of Android programming?" description="Android apps are usually written using Java, Kotlin, and C++ languages." />
                    </Grid>
                </Grid>

            </Box>


            <ServiceForm />
            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>
    );
}

export default Android;