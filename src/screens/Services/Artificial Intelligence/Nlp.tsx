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


const Nlp: React.FC = () => {

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
                heading="NATURAL LANGUAGE PROCESSING"
                typo1="Natural Language Processing (NLP) applications are essential for organizations looking to gain an advantage over competitors. NLP is used in chatbots, intelligence search, healthcare, recruitment processes, and business intelligence. Our NLP services help organizations meet their business needs."
                buttonText="Get Free Consultation"
                stroke="#ffffff"
            />



            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our Big Data Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>
                    <Typography variant="body1" color={'grey'} mt={2}>Natural Language Processing Service</Typography>
                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Neural Networks"
                                description="These are a series of algorithms that seek to identify relationships in a data set through a process that mimics how the human brain works. Our team of expert AI developers will help you create neural networks to enhance performance."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Natural Language Processing"
                                description="Whether through the use of voice or text, our NLP experts can help your company use language more effectively, from sentiment analysis to processing."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Machine Learning"
                                description="An AI type that allows different software applications to become more accurate at predicting outcomes without being programmed to do it. Our ML engineers go the extra mile to ensure they can improve your company’s operations through data."
                                descriptionColor='grey'
                                showArrow={false}
                            />
                        </Grid>
                    </Grid>

                </Box>
                <BackgroundDiv typoText="Supporting a wide range of business applications with NLP services" buttonText="Talk to Our Experts" />
            </Box>






            <Box bgcolor={'#f7f7f7'} pt={10} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Advantages of NLP Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70 }} />
                    </div>

                    <Grid container spacing={2} mt={5}>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Better Data Analysis"
                                description="Unstructured data which includes things like documents, emails, and research work can be difficult for computers to process. With the help of NLP technology, a huge amount of text-based information can easily be processed and analyzed."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Better Understand the Market"
                                description="NLP has a huge impact on marketing. You can use NLP natural language processing to understand the needs and wants of your customer base, which will help you better understand the market segment, target your customers directly as well as decrease the customer churn rate."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Improved Customer Experience"
                                description="The implementation of artificial intelligence can provide valuable insights that can improve customer interactions as well as answer their queries. Performing an NLP analysis on customer satisfaction surveys can help you discover valuable information about how happy and satisfied customers are at every stage of their customer journey."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Empower Your Employees"
                                description="You will be able to save your employees’ time by automating business processes and utilizing data analysis to their full potential. Your employees will be able to focus on all of the crucial tasks rather than having to spend it doing tedious and repetitive tasks. The time could be better spent putting their focus on the tasks that matter, thereby reducing boredom and becoming more productive as a result."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Reduced Costs"
                                description="Efficient business processes lead to improved productivity within the company. Whether it entails responding to customer requests, ingesting customer data, or any other use cases, Natural Language Processing can help cut down costs significantly. Instead of needing multiple people to respond to customer queries, you can make use of effective NLP solutions and reduce the number of people needed for that. AI can provide data faster and also give meaningful insights, and this information can be useful in implementing the most excellent customer experiences."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Streamlined Processes"
                                description="Professional service companies have to spend a lot of time reviewing volumes of contractual information. With the help of NLP systems, chatbots can be trained to find specific clauses across all of these documents without the need for human intervention. Deploying chatbots helps streamline the reviewing process. It frees the staff to focus on other important tasks while the documents are under review. Chatbots are not just limited to professional services. You can use them for social media, web pages, and applications so that the customer support staff can answer customer queries as quickly as possible."
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
                            heading="NLP Application Development Services"
                            description="Natural Language Process applications aim to build machines that can understand and respond to text or voice data. They then respond with text and speech of their own, similar to what humans do."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion
                            heading="What is NLP used for?"
                            description="NLP allows machines to break down and interpret human language. It has many use cases, including translation software, spam filters, chatbots, voice assistants, and social media monitoring tools."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion
                            heading="Different Types of NLP"
                            description="There are commonly two types of NLP: there is a rule-based system as well as a machine learning-based system."
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


            <ServiceForm />

            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>
    );
}

export default Nlp;