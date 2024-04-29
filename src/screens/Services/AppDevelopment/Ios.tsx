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


const Ios: React.FC = () => {

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
                heading="IOS APP DEVELOPMENT SERVICES"
                typo1="Sentex LAb excels in delivering expert iOS App Development services, crafting user-centric, engaging, and dynamic applications. Our dedicated team of developers is driven by a passion for creating iOS apps that outshine the competition."
                typo2='With a focus on customization, we tailor our iOS app development solution to meet the unique requirements of each client. By employing innovative methodologies, we guarantee the success of our clients’ iOS applications. '
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />

            <Box bgcolor={'#f7f7f7'} pt={10} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Benefits of iOS App Development</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>

                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Enhanced Customer Experience"
                                description="Given the high-quality software, functionalities, and extensive customer support, it would make sense why users gravitate towards iOS applications. It offers apps that have smooth functionality and offers the best user experience. This makes iPhone applications the most ideal choice for customers as it offers feature-rich apps and user experience that keep them coming back for more."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="High Market Penetration"
                                description="Apple has a huge user base in the USA and the UK. If you want your company to expand its horizons and penetrate those markets, creating iPhone apps is the way to go. Apple has an established legacy and its high-quality products will help your business gain a competitive edge if you invest in iOS development."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Greater Return on Investment"
                                description="iOS applications have a greater return on investment as compared to Android. This is because iPhone offers the best user experience, with excellent UI/UX. Companies can greatly benefit by investing in iOS applications to achieve profitability."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Less Development Time"
                                description="iOS applications take less time to develop as compared to Android applications. This is because Android applications need to be tested across 20+ devices, all of which have different screen sizes, resolutions, and operating systems. Android apps also have a longer development cycle. iOS development on the other hand helps companies achieve greater market visibility, the ability to gain a competitive edge, rich customer experiences, and enhanced profitability."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Excellent Interface"
                                description="iPhones are best known for their excellent UI/UX design that offers the best experiences to users. It increases user engagement as well. This is why iOS development services can help to gravitate a large number of people towards your applications. The easy interface would entice users to download your applications and use them. This would help boost your company’s sales and a return on investment."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Enhanced Security"
                                description="Apple offers the best security to users. Various applications require confidential and responsive information from users. It is imperative to protect this data from hackers and other external threats. One of the many great things about Apple is that it has a strict approval procedure for all of its applications. iOS applications come with advanced and secure features that protect them from external threats, hacking, or phishing."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Reduced Fragmentation"
                                description="Apple only has to do one upgradation on its operating system every year. Apple also has fewer devices compared to Android. Android apps have to be tested out extensively to work properly on all Android operating system versions. iPhones on the other hand just have to meet the testing criteria of the previous iOS versions. This reduces testing time for iOS developers and guarantees quick go-to-market time for iPhone applications."
                            />
                        </Grid>
                    </Grid>


                </Box>
            </Box>

            <BackgroundDiv typoText=' Developing custom iOS apps to meet your business needs' buttonText=' Talk to Our Experts' />


            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>iOS App Development Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2}>


                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Custom iOS App Development"
                                description="We help build iOS applications that are specifically tailored to your unique needs and requirements. We create apps that help your business gain unprecedented value."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Cross-platform Development"
                                description="Our team of experts builds feature-rich applications that are compatible across all iOS devices."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="iPhone UI/UX"
                                description="We aim to create stellar user experiences for iPhone users as well as engaging and dynamic user interfaces that keep users coming back for more."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="iPhone App Update & Optimization"
                                description="Our expert team of iOS developers makes timely updates to your applications alongside optimization for a smooth user experience."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                    </Grid>

                </Box>
            </Box>










            <Box pb={2} pt={2}>
                <Box sx={{ m: { xs: 2, lg: 15 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>iPhone app development Process</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 1 }} />
                    </div>

                    <Grid container spacing={1} mt={3}>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 1" Description="Research and Planning" imageUrl={require("../../../data/notebook.png")} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 2" Description="Compliance with Apple guidelines" imageUrl={require("../../../icons/fullstack.png")} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 3" Description="Concept & Wireframing" imageUrl={require("../../../icons/UiUx.png")} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 4" Description="UI/UX Design & Software Architecture" imageUrl={require("../../../icons/Target.png")} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 5" Description="Develop App Functionality" imageUrl={require("../../../icons/Target.png")} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 6" Description="Application Testing" imageUrl={require("../../../icons/Target.png")} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 7" Description="Launch and Deployment" imageUrl={require("../../../icons/Target.png")} />
                        </Grid>
                    </Grid>


                </Box>
            </Box>

            <Box sx={{ m: { xs: 3, lg: 10 } }}>
                <div data-aos="fade-up" data-aos-duration="1000">
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Tools & Technologies Needed for iOS Development</Typography>
                    <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, }} />
                </div>
                <Grid container mt={5}>
                    <Grid item lg={6} xs={12}>
                        <TickBox description="Objective-C" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TickBox description="Swift" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TickBox description="XCode" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TickBox description="Cocoa and Cocoa Touch" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TickBox description="AppCode" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TickBox description="TestFlight" />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <TickBox description="UIKit" />
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
                        <ServiceAccordion heading="Custom iOS App Development" description="We specialize in building custom iOS applications tailored to your unique needs and requirements. Our expert team ensures your app delivers exceptional value to your users." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Cross-platform Development" description="Our team develops feature-rich applications that work seamlessly across all iOS devices, ensuring a consistent user experience for your audience." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="iPhone UI/UX" description="We focus on creating engaging and dynamic user interfaces for iPhone applications, enhancing user experiences and maximizing user retention." />
                    </Grid>
                </Grid>

            </Box>



            <ServiceForm />


            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>
    );
}

export default Ios;