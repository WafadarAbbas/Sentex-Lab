import React, { useEffect } from 'react';
import TopAppBar from '../../../components/TopAppBar';
import Footer from '../../../components/footer';
import { Grid,  Typography, Box,   Divider} from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../style.css';

import Topheading from '../../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../../components/ServicesCompo/ServicesCard';
import illustration from '../../../data/background.jpg';

import HexaShape from '../../../components/ServicesCompo/HexaShape';
import BackgroundDiv from '../../../components/ServicesCompo/backgroundDiv';
import ScrollToTop from 'react-scroll-to-top';

const ReactDev: React.FC = () => {

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
                heading="REACTJS DEVELOPMENT COMPANY"
                typo1="Leverage ReactJS, an open-source JavaScript library, for developing dynamic and scalable user interfaces. By enabling component reusability, ReactJS streamlines web application development, offering enhanced speed and simplicity."
                typo2='Embrace the multitude of benefits that position ReactJS as a preferred framework, surpassing alternatives like Node.js and AngularJS.'
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />




            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our AI Development Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="React App Development"
                                description="Owing to our years of experience in React.js development services, we can claim that React.js is the finest tool to build fast and reliable apps. With React we create attractive User Interfaces and develop new features without having to work on the entire code. Our React developers utilize all the latest features to make sure your website is engaging as well as optimized."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Migrations to React"
                                description="Migration of data from JS platforms is the usual requirement to meet business needs. OptimusFox provides you with the most reliable migration services. Our react developers perform the migration without causing interruptions to your web apps. As a result, the migration will not affect the overall functioning of your system."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Single-Page Application Development"
                                description="Our professionals utilize React to develop single-page applications as per the requirements. The virtual representation of the DOM in React JS allows seamless performance. In addition to this, React provides ease in debugging and server-side support. By utilizing all of its advantages the right way, we make sure to leave no possibility of performance errors in the applications."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Maintenance and Support"
                                description="Searching for a team to reform or maintain your React app? We provide maintenance services and any technical upgrades that are required to help you with your ongoing projects. We also offer support services after the first product delivery."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Enterprise Software Development"
                                description="Sentex Lab software development team has a proven track record in customizing, developing, and integrating various enterprise web solutions. We deliver multiple features according to the client’s requirements."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Custom React.js Development Services"
                                description="We deliver excellent custom React.js development services according to industry standards. Our services include migration, integration, customization, plugin development, etc."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>


                    </Grid>


                    <Grid container spacing={2} mt={2} >
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="React JS Code Audit Services"
                                description="In order to enhance your existing codebase, we offer cross-platform and existing code audit services as well."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>


                    </Grid>
                </Box>
            </Box>



            <BackgroundDiv
                typoText="High Performing Web Apps with React.js Development"
                buttonText="Talk to Our Experts"
            />

            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Benefits of ReactJS Development</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Reusable Components"
                                description="The components written in React.js applications can be reused, providing efficiency and consistency across your projects. Reusable components help in reducing development time and effort, ensuring consistency in design and functionality."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="SEO Friendly"
                                description="The improved performance of a React.js application helps in obtaining a higher ranking on search engine result pages (SERPs). React's virtual DOM and efficient rendering mechanism contribute to faster page loading times, better user experience, and ultimately higher search engine rankings."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Improved Performance"
                                description="React.js allows fast rendering that increases performance and allows a better user experience. Its virtual DOM and efficient rendering mechanism contribute to faster page loading times, smoother interactions, and overall improved performance of web applications."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Open Source and Strong Community"
                                description="React.js is an open-source framework with a strong and active worldwide community. This community continuously contributes to the framework's development, providing updates, bug fixes, and new features. With a large community of developers, React.js users have access to extensive documentation, tutorials, forums, and libraries, making it easier to find solutions to issues and learn new techniques."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Easy Development"
                                description="React is renowned for its simplicity and ease of learning, making it an ideal choice for developers of all skill levels. With its declarative syntax and component-based architecture, React allows developers to build complex UIs with less code. Its intuitive design patterns and extensive documentation streamline the development process, enabling faster and more efficient coding."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Fast Development"
                                description="React's component-based architecture facilitates rapid development by enabling multiple developers to work on different parts of the application simultaneously. This concurrent development approach streamlines the development process, reduces time-to-market, and enhances overall project efficiency."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>


                    </Grid>


                    <Grid container spacing={2} mt={2} >
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Easy Debugging"
                                description="Debugging React applications is straightforward and efficient, thanks to its comprehensive toolset and clear error messages. Developers can easily identify and resolve issues, speeding up the troubleshooting process and ensuring smoother development cycles."
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
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our ReactJS Development Process</Typography>
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
                            <HexaShape title="Step 4" imageUrl={require('../../../icons/Define.png')} Description='Project development' />
                        </Grid>
                    </Grid>

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
                            heading="Project Progress Tracking?"
                            description="Throughout the React.js development process, we keep the customer updated with progress reports. We utilize JIRA for project tracking and arrange meetings based on the customer’s preference, whether it's daily, weekly, or monthly."
                        />

                    </Grid>
                    <Grid item xs={12} >
                        <ServiceAccordion
                            heading="React JS Library?"
                            description="React JS is a front-end JavaScript library used for building user interfaces. It focuses on creating reusable UI components and managing the view layer of web applications."
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion
                            heading="Benefits of React JS?"
                            description="React JS offers various benefits, including being an open-source library, reducing development time, providing reusable components, and offering easy debugging."
                        />

                    </Grid>

                    <Grid item xs={12}>
                        <ServiceAccordion
                            heading="Maintenance and Support?"
                            description="OptimusFox provides maintenance and support services to customers after the development phase. We ensure ongoing technical support, updates, and any necessary enhancements to help you with your projects even after the initial delivery."
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

export default ReactDev;