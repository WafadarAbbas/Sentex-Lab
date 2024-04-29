import React, { useEffect } from 'react';
import TopAppBar from '../../../components/TopAppBar';
import Footer from '../../../components/footer';
import { Grid, Typography, Box,  Divider } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../style.css';

import Topheading from '../../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../../components/ServicesCompo/ServicesCard';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

import TickBox from '../../../components/ServicesCompo/TickBox';
import HexaShape from '../../../components/ServicesCompo/HexaShape';

import BackgroundDiv from '../../../components/ServicesCompo/backgroundDiv';
import ServiceForm from '../../../components/ServicesCompo/ServiceForm';
import ScrollToTop from 'react-scroll-to-top';

const Node: React.FC = () => {

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
                heading="CUSTOM NODE.JS DEVELOPMENT SERVICES"
                typo1="When it comes to developing web and mobile applications, you can trust OptimusFox, a leading Node.js web development company, to deliver solutions that are resilient, high-speed, and capable of scaling effortlessly."
                typo2='Our expertise lies in crafting Node.js applications that are finely tuned for optimal performance on both the server and client sides.'
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />




            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Features of Node.Js Development</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Robust Single Codebase"
                                description="Node.js has allowed the developers to code JavaScript both on the client and server side."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Scalable & Lightweight"
                                description="It enhances the development time without compromising quality and security. The developed apps are scalable, lightweight, and network-friendly."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Real-Time Application"
                                description="Node.js is ideal for developing real-time applications such as chatting apps, and online gaming apps."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Single-Threaded"
                                description="It works on a single-threaded with event loop model architecture."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Performance"
                                description="It helps in faster executions of code and it is built for diverse operating systems."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Community Support"
                                description="Node JS has strong community support for the developers."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                    </Grid>


                </Box>
            </Box>


            <BackgroundDiv
                typoText="Diverse web solutions with Node.js Development"
                buttonText="Talk to Our Experts"
            />

            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Features of Node.Js Development</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>

                    <Typography variant="body1" color={'grey'} mb={5}>Sentex Lab is up to date with modern-day problems and always comes with the latest solutions. Following the latest demands of the business world, we facilitate businesses regarding various development services such as:</Typography>
                    <Grid container spacing={2}>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="App Migration Services"
                                description="Sentex Lab provides the most reliable migration services for your web applications. Our node.js developers perform the migration without causing interruptions to your server-side applications which means our developers make sure to maintain the basic architecture of your project."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Maintenance & Support"
                                description="Sentex Lab offers maintenance and support services. We provide continuous support and build effective communication with our clients."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Web Development"
                                description="We build web apps using Node JS for various sectors such as eCommerce and content management systems. The solutions we built are efficient and robust."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Blockchain & Fintech Development"
                                description="We have gained sufficient experience in developing high-performing fintech applications, BaaS platforms, NFT, DeFi, and cryptocurrency solutions with the use of Node Js."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="API Development"
                                description="We deliver stable and enterprise-grade API development services. Our developers understand your business requirements and create APIs accordingly to provide you with responsive applications."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="System Architecture Designing"
                                description="Our node.js developers have vast experience in designing stable system architectures. Most importantly, we can make comprehensive designs and update and organize the structure of your website to make it user-friendly."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Custom node.js Development Service"
                                description="We have expert node developers whose efficiency brings innovative solutions to your business application challenges. We provide the best custom solutions by taking a creative approach to your business problems."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Real-Time Chat Application Development"
                                description="We have expertise in developing communication apps and delivering solutions that is real-time and able to resist huge loads. It is possible to establish a future-ready communication app by utilizing real-time communication protocols such as WebSockets and adhering to agile app development methods."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                    </Grid>

                </Box>
            </Box>



            <Box bgcolor={'#f7f7f7'} pb={2} pt={2}>
                <Box sx={{ m: { xs: 2, lg: 15 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Development Process</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={3}>
                        <Grid item xs={12} lg={3}>
                            <HexaShape title="Step 1" imageUrl={require('../../../data/notebook.png')} Description='Understand the project' />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <HexaShape title="Step 2" imageUrl={require('../../../icons/Define.png')} Description='Define the Project Scope' />
                        </Grid>
                        <Grid item xs={12} lg={3}>
                            <HexaShape title="Step 3" imageUrl={require('../../../icons/UiUx.png')} Description='UI/UX' />
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


            <Box bgcolor={'#f7f7f7'} pt={2} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Services for Different Industries</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Typography variant="body1" mb={5} >OptimusFox delivers multiple web solutions suiting different business sectors, such as:</Typography>
                    <Grid container  >
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Banking and finance" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Travel and Tours" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Online Shopping" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Food and Restaurants" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Healthcare" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="E-learning" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Real Estate" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Insurance" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Automobile & Transportations" />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <TickBox description="Media and Entertainment" />
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
                        <ServiceAccordion heading="What are node.js modules?" description="Node JS modules are the libraries and codes that developers can use in their projects. These modules make development faster and more efficient." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Which database is used for node.js?" description="Node JS can work with any database whether it is SQL or NoSQL." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="What are the Advantages of Node.js?" description="A few advantages of using Node JS are given below:
         Open Source 
         Scalable
         High performance
         Support of large and active community
        Reusable code" />:
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
                            Why Choose Node.js Development Services?
                        </Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, marginTop: '2px', marginBottom: '15px' }} />
                        <Typography variant="body1" textAlign={'justify'} color={'grey'}>
                            Our node.js development services provide stability and responsiveness to your business websites and applications. We have professional developers to deal with technical business challenges that come in the way of your success. Build high-performing apps and websites that your customers will love. Create your web and mobile apps with Node JS for more efficient products.
                            Sentex Lab is the leading node.js web app development company in USA that provides clients with a dedicated team of Node JS Developers to help launch scalable projects.
                        </Typography>




                    </Grid>
                    <Grid container mt={5}>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>Cost-effective and flexible solutions</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>100% source code authorizations</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>Seamless communication and transparent process</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>Adherence to the project timeline</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>The skilled and experienced development team</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>High-quality work</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>Regular performance monitoring</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>Assurance of project confidentiality</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>Track record of client satisfaction</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ display: 'flex', marginBottom: 2 }}>
                                <KeyboardArrowRightIcon style={{ color: '#0693e3', fontSize: 30, marginRight: 2 }} />
                                <Typography sx={{ flexGrow: 1, color: 'grey' }}>A project manager dedicated to your project</Typography>
                            </Box>
                        </Grid>
                    </Grid>


                </Grid>

            </Box>

            <ServiceForm />
            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        

        </div>
    );
}

export default Node;