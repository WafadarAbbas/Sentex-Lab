import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import Footer from '../../components/footer';
import { Grid, Card, CardContent, Typography, Box, Button, Divider, Container } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from 'react-router-dom';
import Topheading from '../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../components/ServicesCompo/ServicesCard';
import illustration from '../../data/background.jpg';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import TickBox from '../../components/ServicesCompo/TickBox';
import BackgroundDiv from '../../components/ServicesCompo/backgroundDiv';
import ServiceForm from '../../components/ServicesCompo/ServiceForm';
import ScrollToTop from 'react-scroll-to-top';


const ArtificialIntelligence: React.FC = () => {

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
                imageSrc={require('../../data/Aibackground.png')}
                heading="ARTIFICIAL INTELLIGENCE SERVICES"
                typo1="Let us help you build advanced solutions that elevate your business. Our Artificial Intelligence (AI) Development Services offer a variety of AI applications, including healthcare analytics, virtual assistants, and forecasting tools. Automate your business processes with our expert AI development services."
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />

            <Box bgcolor={'#f7f7f7'} pt={10} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our AI Processes</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Efficiency & Productivity"
                                description="AI technology can perform tasks faster and with more efficiency, something that is beyond the scope of humans. By removing these tasks from humans, AI enables them to move towards tasks that are only capable of being performed by humans and not something that technology can do. This helps companies significantly reduce mundane and repetitive tasks that can be easily performed with the help of technology and therefore utilize their human capital."
                            />

                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Excellent Customer Service"
                                description="Customer satisfaction is the utmost priority to companies. But, companies normally don’t have a salesperson who has the combined knowledge of the customer, the customer’s needs, the company’s solutions, and the competition and then presents to the customer whatever and whenever they need whenever it. This is where AI comes in. It can help organizations deliver customized and interpersonal interactions between themselves and the customer, which would give them a greater insight into the customer’s needs and therefore improve the customer experience."
                            />

                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Improved Monitoring"
                                description="Artificial Intelligence can take in and process a huge amount of data at a time which allows organizations to implement extensive monitoring that can alert them of any issues and recommend any actions needed. AI has monitoring capabilities that can also be effectively utilized in other areas such as cybersecurity operations where massive amounts of data need to be analyzed and understood."
                            />


                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Improved Speed"
                                description="Businesses are moving at a rapid pace owing to the advancement in technology. Artificial intelligence helps shorten as well as speed up development cycles. This shortened timeline also helps with better project deliveries, which enhances your return on investment."
                            />

                        </Grid>
                        <Grid item lg={6} xs={12}>

                            <TickBox
                                heading="High Quality & Reduction of Errors"
                                description="Businesses can greatly benefit from incorporating Artificial Intelligence as less human interference leads to a reduction of errors and overall smooth business processes. When AI is integrated with other technologies like RPA, repetitive and rule-based tasks are automated. This not only speeds up processes but reduces errors and takes on a wider range of tasks for high-quality results. Thus, AI has not compromised quality, speed, and cost."
                            />


                        </Grid>



                    </Grid>

                </Box>

                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our AI Development Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Robotic Process Automation"
                                description="We revolutionize your business processes and eliminate tedious tasks."
                                link='/Robotic'
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Big Data"
                                description="We solve your data management issues effectively with the use of Big Data."
                                link='/BigData'
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Natural Language Processing"
                                description="We offer NLP services using a combination of AI, Machine Learning (ML), and Linguistics."
                                link='/Nlp'
                            />

                        </Grid>

                    </Grid>
                </Box>


                <BackgroundDiv
                    typoText="Automate your business processes and achieve growth"
                    buttonText="Talk to Our Experts"
                />

                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Advantages of Artificial Intelligence to Companies</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Defining Your Goals"
                                description="We begin by formulating a unique strategy. This is needed to optimize your business by identifying the places where Artificial Intelligence Development can add value to your organization."
                            />

                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Execution"
                                description="We bring in the technical expertise required to bring your AI applications to life. This is specifically catered to customers who are looking for AI-driven projects."
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
                        <ServiceAccordion
                            heading="What services do AI companies provide?"
                            description="AI companies provide a wide range of services, including Customer Analytics, NLP, ML Operations, RPA, and Anomaly Detection."
                        />

                    </Grid>
                    <Grid item xs={12} >
                        <ServiceAccordion
                            heading="How much does it cost to hire an AI Engineer?"
                            description="The cost of hiring an AI developer varies from company to company. It also depends on their skill set and the level of expertise they own."
                        />

                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion
                            heading="How is AI used in software development?"
                            description="AI enables computers to do fast and accurate testing that helps reduce errors and shortens the development cycle. Software engineers make use of AI to streamline processes and hand over manual and repetitive tasks that can do it faster and more effectively."
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
                            As an AI development company, we excel at delivering custom Artificial Intelligence solutions that help our clients achieve their business objectives and achieve sustainable growth. AI technology enhances your sales processes as it keeps tabs on your email, calendar, and phone schedule. We take care of your sales pipeline with our AI-based applications so that they help you focus on making the best deals. Our AI solutions enhance the capability of making successful sales and converting leads into potential customers.<br /><br />

                            Our AI solutions for customer services store the responses of your clients and keep track of unsatisfied customers to provide you with valuable feedback. We bring AI technology together so that you can make smarter and faster decisions that help your organization achieve scalable growth. Our AI development services will lead to fewer chances of human errors as the entire business process is now automated. They also help speed up business processes as monotonous and tedious tasks can be completed at a faster pace without the need for manual intervention.<br /><br />

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

export default ArtificialIntelligence;