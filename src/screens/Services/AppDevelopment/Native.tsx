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
import ScrollToTop from 'react-scroll-to-top';


const Native: React.FC = () => {

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
                heading="REACT NATIVE APP DEVELOPMENT COMPANY"
                typo1="Sentex Lab stands as a prominent company in react native app development, dedicated to crafting top-tier cross-platform applications with exceptional UI/UX."
                typo2='Our team of skilled React Native developers utilizes their expertise to create and deliver innovative, robust solutions tailored for businesses seeking excellence.'
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />

            <Box bgcolor={'#f7f7f7'} pt={10} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Why to Choose React Native for App Development</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>
                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Saves Time and Money"
                                description="Since more than 90% of the code is cross-platform, developers can save time as they’ll only need to build a single application. The code is compatible with both iOS and Android and therefore developers can work on building one app only. With the help of React Native, companies can have both apps at once, which would cost half of building one version. These applications are also constantly maintained and updated, which helps to further reduce costs once the applications are fully launched."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Strong Community"
                                description="React Native is an open-source framework and has a strong community of developers from all across the globe. Our dedicated React Native developers can not only make their contributions to these communities, but the beginners who want to get started with React Native can avail themselves of the help of experienced React Native developers. They also take help from forum discussions, tutorials, and other resources to help them sharpen their skills."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Enhanced Flexibility"
                                description="React Native has an interface that makes it easy for developers to jump in and complete the rest of the application from where someone left it off. This increases flexibility within teams and can ensure timely updates as well as upgrades of the mobile apps. All of these factors also help save time and money for companies."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Excellent Performance"
                                description="React Native applications have the same performance as native iOS and Android applications. They are fast as well since React Native is optimized for mobile devices. React Native leverages the graphic processing unit (GPU) which makes it faster in performance as compared to cross-platform hybrid applications."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Hot Reloading"
                                description="React Native has a hot reloading feature which means that developers can immediately view any changes they’ve made to the code in live preview simultaneously. This is an added advantage for developers as they get to receive real-time feedback during the development process."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Third-Party Plugins"
                                description="Building applications from scratch can be very expensive, and React Native counters this issue by offering multiple third-party plugins. They help reduce the need for specific web-view functions and improve the application’s performance and functionalities."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Code Can Be Reused"
                                description="One of the biggest advantages of React Native is that 90% of its code can be reused between iOS and Android. Developers will not have to create separate codes for the different platforms. This leads to faster work as well as increased efficiency in the development process."
                            />
                        </Grid>
                    </Grid>


                </Box>
            </Box>


            <BackgroundDiv
                typoText='Cross-platform apps that work seamlessly on iOS and Android'
                buttonText='Talk to our Expert' />

            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>React Native App Development Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />

                    </div>
                    <Typography variant="body1" mt={3} color={'grey'}>React Native App Development Services</Typography>
                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="React Native App Development"
                                description="Our experts help you develop flexible, flawless, and user-friendly applications for your business in next to no time. We also offer full-stack development services using our extensive knowledge and expertise in the react native framework."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Code Audit Services"
                                description="We offer coding audit services to our clients to assist them in enhancing their application performance. Our experts analyze websites to find weaknesses and fix them accordingly. This results in faster applications that are reliable and stable."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Support & Maintenance"
                                description="OptimusFox provides support and maintenance even after application launch if required by the client. We make sure that your application keeps running smoothly without bugs, post-launch too."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Custom React Native UI/UX Development"
                                description="Our UI/UX designers at OptimusFox help you in developing user-friendly, engaging, and secure applications. We utilize react native libraries to design customized UIs for our clients."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Migration to React Native"
                                description="We offer you flawless migration services from other platforms to react-native to accomplish your business needs. React provides powerful models that add flexibility and stability to applications."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Custom Native App Development"
                                description="We keep your needs and requirements at the forefront and then develop applications that are specifically tailored to your company’s requirements."
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
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our  App Development Process</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 1 }} />
                    </div>

                    <Grid container spacing={3} mt={3}>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 1" Description='Prerequisite Gathering' imageUrl={require('../../../data/notebook.png')} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 2" Description='UI/UX Design' imageUrl={require('../../../icons/UiUx.png')} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 3" Description='Prototype' imageUrl={require('../../../icons/prototype.png')} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 4" Description='App Development' imageUrl={require('../../../icons/fullstack.png')} />
                        </Grid>



                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 5" Description='Quality Assurance' imageUrl={require('../../../icons/prototype.png')} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 6" Description='Deployment' imageUrl={require('../../../icons/Target.png')} />
                        </Grid>
                        <Grid item xs={6} lg={1.7}>
                            <HexaShape title="Step 7" Description='Launch & ongoing support' imageUrl={require('../../../icons/Target.png')} />
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
                        <ServiceAccordion heading="How much does it cost to hire a React Native developer?" description="This depends on your specific requirements and what you need from them. A highly skilled developer will cost more than a developer who’s at an intermediate or beginner level." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Is React Native hard to learn?" description="React Native is easy to learn. It has a strong community of developers with a huge number of helpful resources to make your learning as smooth sailing as possible." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="What are the benefits of React Native App Development?" description="It has great performance, saves time and money, helps developers become more flexible and you can view changes in real-time to offer the best experience to users." />
                    </Grid>
                </Grid>

            </Box>





            <WhyChoose />

            <Box
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

            </Box>
            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>
    );
}

export default Native;