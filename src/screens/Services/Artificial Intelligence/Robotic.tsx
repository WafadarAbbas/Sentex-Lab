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


const Robotic: React.FC = () => {

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
                heading="ROBOTIC PROCESS AUTOMATION SERVICES"
                typo1="Integrate your business with Robotic Process Automation Services, Improve resource management and increase efficiency with our Robotic Process Automation (RPA) Services. Robotic Process Automation services can be used to improve efficiency, reduce the risk of errors, and free up human employees to focus on more complex and creative tasks."
                buttonText="Get Free Consultation"
                stroke="#ffffff"
            />

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
                            Robotic Process Automation Solutions
                        </Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, marginTop: '2px', marginBottom: '15px' }} />
                        <Typography variant="body1" textAlign={'justify'} color={'grey'}>
                            RPA solutions enable businesses to automate manual tasks which are mostly repetitive and laborious in nature with the help of the software workforce. OptimusFox is an RPA Services company that helps different industries streamline their workflows by making use of software robots that can perform a wide variety of repetitive, regular, and rule-based tasks.<br /><br />
                            We have an expert team of RPA consultants that help companies make their business processes more efficient and reduce the burden of human employees as well as errors due to manual intervention. Robotic process automation solutions can assist businesses to perform tasks based on Artificial Intelligence (AI) where billing and filing do not require any decision-making. Clerical and office procedures can be automated with RPA when you have a robotic software workforce.<br /><br />

                            The aim is to provide smarter processes to improve collaboration and smooth operations. It also helps to reduce time and provides cost-efficient solutions that enable brands to achieve higher revenues and better-quality solutions. <br /><br />  </Typography>
                    </Grid>
                </Grid>
            </Box>



            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Advantages of Robotic Process Automation Solutions</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>

                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Cost-Effective"
                                description="Using robotics has been known to cut down operational costs by at least 20-30%. Robots can work 24/7 and complete tasks daily, which is not possible for humans as they need to take breaks and have a certain number of hours to complete before they leave work. Robots can take over manual, repetitive, and intense tasks that humans have to do leading to increased gains for the company. Automating these tasks can help you recover costs in a short span of time."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Better Security"
                                description="RPA tools provide way better security for protection against hackers or any internal threats. This is because RPA tools never forget to make log entries, never forget to log out, and never post their password on the screen with a small paper note. It can be set out so that the system becomes inaccessible and is free from any security breaches. You can also access a log file of all of its activities so that any threatening activity can be recorded."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Increased Employee Productivity"
                                description="RPA helps facilitate robots and humans at what they excel at the most. RPA helps free employees from mundane, repetitive, and rule-based tasks so that they can focus more on the clients and customer engagement. This also includes relationship management because that is something humans naturally excel at. Having satisfied clients and customers leads to more profitability in the long run."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Versatility"
                                description="RPA is applicable across different kinds of industries and can also perform a wide variety of tasks. Tasks that are rule-based and repetitive by nature can easily be automated so that companies can best utilize their human capital."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Faster Performance"
                                description="Since bots are handling all of the execution of tasks, a large amount of work can easily be done in a shorter period of time. Fast delivery combined with accuracy has become the new normal with the use of automation."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Accuracy & Quality"
                                description="RPA offers improvement to those processes that have a high chance of human errors. Robotics are reliable and consistent and can work 24/7, and this helps increase accuracy. RPA has the potential to optimize capabilities that significantly enhance productivity and efficiency within an organization and improve your hiring quality."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                    </Grid>


                </Box>
                <BackgroundDiv typoText="Streamline your workflow with RPA" buttonText="Talk to Our Experts" />
            </Box>





            <Box sx={{ m: { xs: 3, lg: 10 } }}>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Robotic Process Automation Development Services</Typography>
                    <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                </div>



                <Grid container spacing={2} mt={5}>
                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="RPA Consulting"
                            description="We leverage the expertise of our competent team of RPA consultants to implement it into your business effectively and achieve productive results."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Custom RPA Development"
                            description="We offer customized RPA development solutions to your company that are completely tailored to the unique needs and requirements of your brand."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Infrastructure & Automation Support"
                            description="We will guide you throughout the duration of your RPA project to make sure that your software bots are performing at the highest level and to help you find other automation opportunities."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Managed RPA Services"
                            description="Our certified team of professionals handles all of the maintenance as well as all the support tasks. This helps our technical team to focus on innovative solutions to help your business scale."
                            descriptionColor='grey'
                            showArrow={false}
                        />
                    </Grid>
                </Grid>

            </Box>

            <Box pb={5} pt={2}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={11}>
                        <Box m={2} p={2}>
                            <Typography variant="h4" data-aos="fade-up" data-aos-duration="1000" sx={{ fontWeight: 'bold' }}>Popular RPA Tools</Typography>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                            <ArrowGrid
                                items={[
                                    'Keysight’s Eggplant',
                                    'Inflectra Rapise',
                                    'Blue Prism',
                                    'UiPath',
                                    'Automation Anywhere',
                                    'Contextor',
                                    'Pega',
                                    'Nice Systems',
                                    'Kofax',
                                    'Kryon',
                                    'Softomotive',
                                    'Visual Cron'
                                ]}
                            />
                        </Box>
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
                        <ServiceAccordion heading="RPA Training, Development & Deployment" description="These services encompass RPA training, development, and deployment, along with process mining and optimization. RPA software utilizes advanced technologies to automate manual tasks." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Invoice Processing, Hiring & Recruiting, Inventory Management, Payroll, and Customer Support" description="RPA finds applications in various fields such as invoice processing, hiring & recruiting, inventory management, payroll, and customer support." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Top 5 RPA Tools: Keysight’s Eggplant, UiPath, Blue Prism, Automation Anywhere, and Inflectra Rapise" description="The leading RPA tools include Keysight’s Eggplant, UiPath, Blue Prism, Automation Anywhere, and Inflectra Rapise." />
                    </Grid>
                </Grid>


            </Box>

            <ServiceForm />
            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>
    );
}

export default Robotic;