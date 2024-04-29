import React, { useEffect } from 'react';
import TopAppBar from '../components/TopAppBar';
import { Grid, Card, CardContent, Typography, Box, Button, Paper, Divider } from '@mui/material';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import './style.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Particles from './particles';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';
import ScrollToTop from 'react-scroll-to-top';





const Portfolio: React.FC = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <div>
            <TopAppBar />

            <Box >

                <Grid container spacing={2} marginTop={5} marginBottom={5} paddingLeft={5} paddingRight={5}>

                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-center items-center">
                        <img src={require('../data/lap1.png')} alt="Your Image" className="w-half max-w-400 sm:h-2/4" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Sentex Lab + Our Invo</Typography>

                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />

                            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                Sentex Lab + Our Invo provides an enhanced gaming experience for players and also facilitates the creation of diverse revenue streams for game developers. The primary objective of Sentex Lab + Our Invo is to optimize the transfer of value across various gaming platforms. Acting as a bridge between players and different games, the technology employed allows players to seamlessly carry their assets from one gaming universe to another.

                                Moreover, the innovative solutions pioneered by Sentex Lab + Our Invo open up numerous opportunities for game developers to enhance their revenue streams and player engagement. Sentex Lab + Our Invo aims to establish a comprehensive platform for both players and developers, enabling them to thrive and pursue their passion for gaming.
                            </Typography>
                        </Box>
                    </Grid>



                </Grid>
            </Box>



            <Box >

                <Grid container spacing={2} marginTop={5} marginBottom={5} paddingLeft={5} paddingRight={5}>



                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-start">
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Sentex Lab + Owner’s Club</Typography>

                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />

                            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                Owner’s Club leverages its proprietary “Winner’s Circle,” featuring a patented live virtual racing system with AI-powered horses and lifelike racing conditions, to redefine the interactive skill gaming landscape. Within the metaverse of Invincible GG, Owner’s Club replicates the excitement of live racing events by integrating elements of skill gaming, blockchain technology, and horse racing. Users have the opportunity to own digital representations of 3D-rendered horses and participate in thrilling races on iconic tracks.

                                Owner’s Club is set to unveil a groundbreaking platform that will revolutionize the gaming industry by democratizing access to the game for the general public. With Owner’s Club, users can embark on a journey into the gaming future and immerse themselves in an unparalleled gaming experience featuring virtual sports, AI-powered NFTs, and their own skills.
                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-center items-center">
                        <img src={require('../data/lap2.png')} alt="Your Image" className="w-half max-w-400 sm:h-2/4" />
                    </Grid>

                </Grid>
            </Box>



            <Box >

                <Grid container spacing={2} marginTop={5} marginBottom={5} paddingLeft={5} paddingRight={5}>

                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-center items-center">
                        <img src={require('../data/lap3.png')} alt="Your Image" className="w-half max-w-400 sm:h-2/4" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Sentex Lab + Liquidity Digital</Typography>

                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />

                            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                Liquidity Digital is a pioneering Fintech company dedicated to developing an innovative platform aimed at facilitating capital formation by bridging institutional-grade security issuances with global investors. The primary focus of Liquidity Digital revolves around the private capital markets.
                                Recognizing that a significant amount of global capital is tied up in illiquid assets, Liquidity Digital aims to address this issue by providing institutions and individuals with opportunities to leverage these assets. To achieve this goal, Liquidity Digital is committed to establishing an end-to-end platform that facilitates the issuance and complete life cycle management of programmable digital securities and their underlying smart contracts.
                            </Typography></Box>
                    </Grid>



                </Grid>
            </Box>



            <Box >

                <Grid container spacing={2} marginTop={5} marginBottom={5} paddingLeft={5} paddingRight={5}>



                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-start">
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Sentex Lab + Rewards4U</Typography>

                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />

                            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                Rewards4U aims to revolutionize the loyalty rewards market by harnessing the power of blockchain technology to create a seamless, inclusive, and user-centric rewards ecosystem.
                                Envisioning a future where traditional program limitations no longer restrict loyalty rewards, Rewards4U seeks to establish an interoperable rewards platform that enables consumers to fully utilize their benefits across various loyalty programs. By leveraging blockchain technology, the platform aims to break down silos and provide a unified experience for consumers, regardless of their loyalty program affiliations. With a commitment to innovation, Rewards4U aims to introduce a new generation of loyalty solutions that deliver mutual benefits for both companies and consumers.

                            </Typography>
                        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-center items-center">
                        <img src={require('../data/lap4.png')} alt="Your Image" className="w-half max-w-400 sm:h-2/4" />
                    </Grid>

                </Grid>
            </Box>


            <Box >

                <Grid container spacing={2} marginTop={5} marginBottom={5} paddingLeft={5} paddingRight={5}>

                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-center items-center">
                        <img src={require('../data/lap5.png')} alt="Your Image" className="w-half max-w-400 sm:h-2/4" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Sentex Lab + DataRovers</Typography>

                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />

                            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                DataRovers is designed to address the challenge of hospital revenue loss due to insurance discrepancies. The platform empowers hospitals to effectively manage insurance-related patient claims and gain valuable insights into their revenue streams from insurance providers. By leveraging DataRovers, hospitals can make informed decisions and optimize their financial operations, ensuring sustainable revenue generation both now and in the future.
                            </Typography>       </Box>
                    </Grid>



                </Grid>
            </Box>

            <Box >

                <Grid container spacing={2} marginTop={5} marginBottom={5} paddingLeft={5} paddingRight={5}>



                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-start">
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}> Sentex Lab + Wurqi for School</Typography>

                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />

                            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                In response to the rapidly evolving landscape of the educational sector, Sentex Lab introduces Wurqi for School. This innovative platform is tailored to address the dynamic challenges faced by educational institutions in today's highly competitive environment. By embracing cutting-edge technology and staying abreast of global advancements, Wurqi for School empowers educational institutions to maintain their competitive edge and deliver exceptional learning experiences.
                            </Typography>        </Box>
                    </Grid>

                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-center items-center">
                        <img src={require('../data/lap6.png')} alt="Your Image" className="w-half max-w-400 sm:h-2/4" />
                    </Grid>
                </Grid>
            </Box>

            <Box >

                <Grid container spacing={2} marginTop={5} marginBottom={5} paddingLeft={5} paddingRight={5}>

                    <Grid item xs={12} sm={6} className="flex justify-center sm:justify-center items-center">
                        <img src={require('../data/lap7.png')} alt="Your Image" className="w-half max-w-400 sm:h-2/4" />
                    </Grid>

                    <Grid item xs={12} sm={6}>
                        <Box m={{ xs: 0, lg: 10 }} lineHeight={'55px'}>
                            <div data-aos="fade-up"
                                data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Sentex Lab + Cashii
                                </Typography>

                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 7, width: 70, marginTop: '2px', marginBottom: '10px' }} />

                            <Typography variant="body1" color={'grey'} style={{ marginTop: '20px', marginBottom: '20px' }}>
                                Cashii, developed by Sentex Lab, is a cutting-edge cryptocurrency wallet that revolutionizes the way users interact with digital assets. With its decentralized chatting strategy and advanced multichain technology, Cashii offers users a seamless and secure transactional experience.

                                Cashii's key feature is its self-custodial wallet, providing users with complete control and autonomy over their cryptocurrency holdings. This empowers users to safeguard their wealth and manage their digital assets with confidence.
                            </Typography>       </Box>
                    </Grid>



                </Grid>
            </Box>

            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>

    );
};

export default Portfolio;
