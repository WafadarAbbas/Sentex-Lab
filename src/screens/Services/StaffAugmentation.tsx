import React, { useEffect } from 'react';
import TopAppBar from '../../components/TopAppBar';
import Footer from '../../components/footer';
import { Grid,  Typography, Box,   Divider } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";


import Topheading from '../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../components/ServicesCompo/ServicesCard';
 
import TickBox from '../../components/ServicesCompo/TickBox';
import BackgroundDiv from '../../components/ServicesCompo/backgroundDiv';
import ServiceForm from '../../components/ServicesCompo/ServiceForm';
import ScrollToTop from 'react-scroll-to-top';

const StaffAugmentation: React.FC = () => {

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
                imageSrc={require('../../data/StaffBackground.png')}
                heading="STAFF AUGMENTATION SERVICES"
                typo1="Staff augmentation services enable companies to acquire specialized expertise and skills that may not be readily available within their own organization. This approach is applicable across various industries such as IT, engineering, finance, and marketing."
                typo2='It offers companies the flexibility to swiftly and effortlessly adjust the size of their workforce to meet their specific requirements, whether it involves scaling up or downsizing.'
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />

            <Box bgcolor={'#f7f7f7'} pt={10} pb={5} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our AI Processes</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={6} xs={12}>
                            <TickBox heading="Flexibility"
                                description="Staff Augmentation services enable you to implement more flexibility when it comes to the hiring process. Companies are shifting and evolving on a daily basis and sometimes full-time resources may not be able to provide the additional skills that are required."
                                description2="For example, let's say your company is working on a project. And the project has requirements that are not within the scope of your current resources. To fill this gap, you can outsource tech resources that can work on this project and provide all the necessary requirements."
                                description3="The temporary staff allows you greater flexibility to deal with different kinds of projects. It allows your company to scale as you can hire temporary resources to keep up with the growing demand." />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox heading="Reduced Operational and Labor Costs"
                                description='You can also reduce operation and labor costs by hiring flexible staff. By hiring part-time employees, you don’t need to spend additional resources on them like perks, fringe benefits, insurance, taxes, etc.'
                                description2='Instead of bearing the costs of hiring full-time employees, you can hire flexible staff that have the specific expertise needed. This leads to cost reductions and greater efficiency for the company.' />

                        </Grid>
                        <Grid item lg={6} xs={12}>

                            <TickBox heading="Temporary Staffing Rather Than Hiring Full Time"
                                description='Maybe a company has skilled developers who are getting projects done on time and delivering quality work. But in software companies, there may be the case that the company receives a project that requires specific skillsets that the current employees may not possess. So instead of having to go through another extensive process of hiring new staff, the company can hire resources contractually only for that specific project.'
                                description2='' />

                        </Grid>
                        <Grid item lg={6} xs={12}>

                            <TickBox heading="Highly-Skilled Resources"
                                description='You can hire highly-skilled staff for a short period of time. Hiring highly skilled staff helps you stay ahead in the digital landscape and gain a competitive edge. You notice that your competitors are planning to launch an innovative product and you want to do the same, therefore you utilize part-time flexible workers who have in-demand skills to help you gain a competitive edge.'
                                description2='' />
                        </Grid>



                    </Grid>

                </Box>

                <BackgroundDiv
                    typoText="Offering the best talent pool to help you scale your business"
                    buttonText="Talk to Our Experts"

                />


            </Box>

            <Box sx={{ m: { xs: 3, lg: 10 } }}>
                <div data-aos="fade-right" data-aos-duration="1000">
                    <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Types of Staff Augmentation Services</Typography>
                    <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                </div>
                <Typography variant="body1" sx={{ color: 'grey', mb: 3 }}>Types of Staff Augmentation Services</Typography>
                <Grid container spacing={2} >
                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Short-term Services"
                            description="These services are given to companies that need people with specific skills for a short period of time rather than hiring full-time resources."

                            image={require('../../icons/clock1.png')}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Commodity"
                            description="These are workers that don’t require specific skills. Job roles of commodity workers can include manual labor, factory work, part-time customer chat work, etc."

                            image={require('../../icons/skill.png')}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Highly-skilled"
                            description="This is where you hire staff that possess highly advanced skills. These skills can be acquired through training or hiring staff that actually have significant experience."

                            image={require('../../icons/staffAug.png')}
                        />
                    </Grid>
                    <Grid item lg={6} xs={12}>
                        <ServicesCard
                            backgroundColor="#ffff"
                            title="Long-term Services"
                            description="Long-term services are given to companies who have ongoing projects of a longer duration and need people to fill in the skill gap not found in the full-time employees of the company."

                            image={require('../../icons/clock2.png')}
                        />
                    </Grid>

                </Grid>
            </Box>

            <Box bgcolor={'#f7f7f7'} pb={2} pt={2}>
                <Box bgcolor={'#f7f7f7'} sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Our AI Development Services</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Full Stack Developers"
                                description="We provide full-stack developers who are experts in front-end and back-end development. Their core skills revolve around a wide variety of coding niches."
                                image={require('../../icons/fullstack.png')}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Dedicated Developers"
                                description="We help companies get access to dedicated developers that will work full time on projects that require specific skillsets."

                                image={require('../../icons/dedicated.png')}
                            />
                        </Grid>

                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Offshore Developers"
                                description="We also outsource offshore developers with the skills that you need to make your next project a success."

                                image={require('../../icons/skill.png')}
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="DevOps Engineers"
                                description="We connect companies with DevOps Engineers. They would help manage software development, deployment, maintenance, and implementation of different technological tools."

                                image={require('../../icons/devopp.png')}
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
                        <ServiceAccordion heading="What is the meaning of Staff Augmentation?" description="It means getting temporary resources to fill in the skill gaps that the full-time employees of the company may not possess." />
                    </Grid>
                    <Grid item xs={12} >
                        <ServiceAccordion heading="Who uses Staff Augmentation?" description="It means getting temporary resources to fill in the skill gaps that the full-time employees of the company may not possess." />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion heading="Why is Staff Augmentation important?" description="It allows companies to achieve greater efficiency, cut down costs, and achieve greater productivity by hiring resources for specific projects so that they can give their best." />
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

                            Sentex Lab offers flexible IT staff augmentation. We provide a pool of tech professionals like Blockchain developers, QA engineers, and product managers. In case of any problems among team members, a client manager will make sure the entire communication process runs smoothly. <br /><br />

                            Other than expanding the local team, Sentex Lab offers several value-based services that make sure the integration of the remote development team is as seamless as possible in order to grow your business.<br /><br />

                            You can get in touch with a large pool of IT professionals like blockchain developers, UI/UX designers, front-end developers, back-end developers, and product managers. You can also replace a resource easily since the pool of talent is bigger. Working with us can enable you to manage your projects with ease.<br /><br />

                            We also ensure transparency in terms of the cost structure. You need not worry about any organizational expenditure like workstations and office space. We will take care of making the arrangements for everything while you focus on your core business operations.


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

export default StaffAugmentation;