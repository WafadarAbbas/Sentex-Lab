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


const Flutter: React.FC = () => {

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
                heading="FLUTTER APP DEVELOPMENT COMPANY"
                typo1="Sentex Lab is a renowned company specializing in flutter app development, catering to businesses worldwide. Leveraging Flutter, a rapidly expanding open-source framework for cross-platform app development. "
                typo2='We deliver intuitive web, Android, and iOS application within accelerated timelines'
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />

            <Box sx={{ m: { xs: 3, lg: 10 } }}>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Advantages of Flutter App Development</Typography>
                    <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />

                </div>
                <Typography variant="body1" mt={3} color={'grey'}>React Native App Development Services</Typography>
                <Grid container spacing={2} mt={5}>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Best Performance"
                            description="Flutter apps perform the same way as native mobile applications. Their code is built directly into machine language. Their performance is equally as good as native applications."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Cost Savings"
                            description="Since there’s a single codebase this means you’ll only have to code once most of the time, which reduces the efforts and resources needed to code, develop and test different applications. This also helps you with significant cost savings."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Faster Go-To-Market"
                            description="These applications require less time to code so the developers are able to work on other features and functions instead of writing code for different platforms. The same developers are thus able to work on other tasks too decreasing the time to market."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Support for Older Version"
                            description="Flutter has its own rendering engine which makes it unique from other cross-platform tools. This is the reason it is able to work with older versions of both iOS and Android."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Cross-Platform"
                            description="With the help of Flutter, you can build cross-platform applications that are responsive across all iOS and Android devices."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Open Source"
                            description="Flutter is trusted by a global community of contributors from all across the globe. It is supported by Google and is also reliable, open, and transparent."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                </Grid>

            </Box>



            <BackgroundDiv typoText='Creating responsive and compelling Flutter apps'
                buttonText='Talk to our Experts' />



            <Box sx={{ m: { xs: 3, lg: 10 } }}>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Flutter App Development Services</Typography>
                    <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />

                </div>
                <Typography variant="body1" mt={3} color={'grey'}>React Native App Development Services</Typography>
                <Grid container spacing={2} mt={5}>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Custom Flutter App Development"
                            description="We offer dynamic flutter apps to help businesses surpass their competition and become market leaders. We offer customized flutter app development to meet your business needs."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Support & Maintenance"
                            description="Our flutter development team provides you with regular technical support to ensure the best performance of your applications."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="API Development & Integration"
                            description="Our team of developers deploys and integrates APIs for your flutter applications. API development helps you achieve your business goals."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Flutter App Consultation Services"
                            description="Struggling to choose the best development methodology for your product? Our consultation services will help you make the right decision."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="UI/UX Design"
                            description="Our designers create compelling UI/UX design for your mobile apps that gravitate your target audience towards your apps."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={4} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="App Testing"
                            description="We carry out extensive testing to make sure your applications are free of errors and bugs. We aim to fix issues that come up as soon as possible."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                </Grid>

            </Box>


            <Box />

            <Box sx={{ m: { xs: 2, lg: 10 } }}>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Typography variant="h4" style={{ fontWeight: 'bold' }}>FAQ </Typography>
                    <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                </div>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Is Flutter good for app development?" description="Flutter is one of the most effective solutions to develop apps for iOS and Android. You don’t even have to write a different codebase for each platform. This saves time and costs for developers and companies." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="How much does it cost to hire a Flutter app developer?" description="This depends on the company’s requirements and the skills and expertise of the developer. If the Flutter app developer is competent and experienced then the cost of hiring would be higher." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="What are Flutter development services?" description="It is a cross-platform app development framework. You can build iOS and Android applications using the Flutter framework to build high-performing apps." />
                    </Grid>
                </Grid>

            </Box>





            <WhyChoose />

            <ServiceForm />
            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>
    );
}

export default Flutter;