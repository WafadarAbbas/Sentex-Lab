import React, { useEffect } from 'react';
import TopAppBar from '../../../components/TopAppBar';
import Footer from '../../../components/footer';
import { Grid, Typography, Box, Divider, } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../style.css';

import Topheading from '../../../components/ServicesCompo/Topheading';
import ServiceAccordion from '../../../components/ServicesCompo/ServiceAccordion';
import ServicesCard from '../../../components/ServicesCompo/ServicesCard';

import TickBox from '../../../components/ServicesCompo/TickBox';

import BackgroundDiv from '../../../components/ServicesCompo/backgroundDiv';
import ServiceForm from '../../../components/ServicesCompo/ServiceForm';
import ScrollToTop from 'react-scroll-to-top';

const Wordpress: React.FC = () => {

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
                heading="CUSTOM WORDPRESS WEBSITE DEVELOPMENT"
                typo1="Harness the potential of WordPress, the leading choice for custom website development, powering over a quarter of all websites globally."
                typo2='Our WordPress development services empower you to strengthen your online presence and propel your brand to new heights. Leverage its robust tools and features to unlock endless possibilities for growth.'
                buttonText="Get Free Consultation"
                stroke="#f7f7f7"
            />


            <Box bgcolor={'#f7f7f7'} pt={1} pb={1}>
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Advantages of Custom WordPress Website</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="You Have Control"
                                description="You have complete control over your WordPress website. You don’t have to wait around for a website designer or developer to install updates or make changes. You now have control over every single aspect of the website and can make the changes yourself without having to rely on anyone else."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Highly Customizable"
                                description="The theme and design of your website are highly customizable. You can make any adjustments and change it to a stellar and appealing design that reflects the values of your brand and what it stands for."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="SEO Friendly"
                                description="Search engines are fond of WordPress sites. This is because its code is clean and simple, which makes it easy for search engines to index the site’s content. Additionally, all the pages, posts, and images will have their own meta descriptions and optimized for keywords, bringing effective results for search engine optimization."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Top Security"
                                description="WordPress offers complete safety and security. You will be able to protect your site from hackers or malware attacks, and anyone who shares confidential data can be guaranteed that their information will remain safe and secure. There are various security plugins available to help you protect your site."
                                descriptionColor='grey'
                                showArrow={false}
                            // image={require('../../data/apple.png')}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Multi-Purpose"
                                description="WordPress has a diverse use case. You can use it to cater to any needs and requirements that you may have. So, whether you need to build a simple website or launch your own eCommerce store, there’s something for everyone. You can use it to create simple websites, online stores, membership websites or a place to sell online courses."
                                descriptionColor='grey'
                                showArrow={false}
                            // image={require('../../data/apple.png')}
                            />

                        </Grid>
                        <Grid item lg={4} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="High Quality & Less Time Consuming"
                                description="WordPress developers aim to deliver high-quality work without taking too much time. They are able to build effective and scalable websites using the latest tools and technologies. You can guarantee that your websites will be delivered on time and with all the latest features and functionality."
                                descriptionColor='grey'
                                showArrow={false}
                            // image={require('../../data/apple.png')}
                            />

                        </Grid>


                    </Grid>


                    <Grid container spacing={2} mt={2} >
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Easy Integration"
                                description="WordPress is extremely easy to integrate, so even a beginner will be good to go. It has so many plugins from automation tools to SEO plugins, making your digital marketing efforts as smooth sailing as possible."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <ServicesCard
                                backgroundColor="#ffff"
                                title="Easy To Use"
                                description="It is extremely easy to use. It has an intuitive interface that enhances the user experience. Adding new pages, themes, blog posts, and other features and functionality is very easy with WordPress. You can launch a website in next to no time."
                                descriptionColor='grey'
                                showArrow={false}
                            />

                        </Grid>

                    </Grid>
                </Box>
            </Box>


            <BackgroundDiv
                typoText="Building impactful and User-friendly WordPress sites"
                buttonText="Talk to Our Experts"
            />


            <Box bgcolor={'#f7f7f7'} pt={10} pb={10} >
                <Box sx={{ m: { xs: 3, lg: 10 } }}>
                    <div data-aos="fade-up" data-aos-duration="1000">
                        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Custom WordPress Website Development</Typography>
                        <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 6, width: 70, my: 2 }} />
                    </div>
                    <Grid container spacing={2} >
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Support and Maintenance Services"
                                description="WordPress releases regular updates, but no need to worry. Our support team will consistently keep your website updated according to the latest updates."
                            />

                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Secure and Responsive Websites"
                                description="Security and performance are two critical features that a website needs. We have a QA team that authenticates every function and feature to make sure your website is secure and efficient."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>

                            <TickBox
                                heading="Consult and Discover"
                                description="We take your ideas and refine them to deal with business complexities. Our experts will guide you throughout regarding the system's complexities and how to cope with website development challenges."
                            />    </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="Plugin Development Services"
                                description="As a WordPress service provider company, OptimusFox follows the finest coding practices for Plugins integrations. It adds additional functionalities to your website and meets your business requirements."
                            />
                        </Grid>
                        <Grid item lg={6} xs={12}>
                            <TickBox
                                heading="PSD to WordPress Conversion"
                                description="Our WordPress developers understand your business requirements and convert PSD files to responsive and validated WordPress themes. Let’s work together to refine your business theme for the best user experience."
                            />

                        </Grid>

                        <Grid item lg={6} xs={12}>


                            <TickBox
                                heading="WooCommerce Development Services"
                                description="We keep a close watch on the emerging business trends and help brands through our eCommerce development services. We help businesses in developing and migrating existing stores to WooCommerce."
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
                            heading="Does WordPress require coding?"
                            description="You don’t need to be adept at HTML or other coding languages to create a website using WordPress at a beginner level."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion
                            heading="What is the duration of this course and the timings?"
                            description="This is a month intensive training bootcamp. Sessions will be held every Saturday and Sunday from 3PM-5PM."
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ServiceAccordion
                            heading="Why should I enroll for this course?"
                            description="The demand for Blockchain developers is growing at a rapid pace. There is a huge opportunity to grow and make an impact as Blockchain is still an emerging technology. This course will help you gain hands-on experience building decentralized applications using Blockchain to excel in your career and tap into other industries with these in-demand skills."
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

export default Wordpress;