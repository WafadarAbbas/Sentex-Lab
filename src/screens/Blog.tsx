import React, { useEffect } from 'react';
import TopAppBar from '../components/TopAppBar';
import { Grid, Card, CardContent, Typography, Box, Button, Paper, Divider } from '@mui/material';
import './style.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import ScrollToTop from 'react-scroll-to-top';





const Blog: React.FC = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (

        <div>
            <TopAppBar />



            <Grid container justifyContent="center" alignItems="center" mt={8}>
                <Grid item xs={10} sm={10} lg={10}>
                    <Paper elevation={15} style={{ padding: '20px' }}>




                        <BlogCard
                            title="How Blockchain Fights Back Against AI Misinformation and Deepfakes"
                            description="In a world where it’s hard to tell real from fake, the rise of AI-driven misinformation and deepfakes is like a digital maze we’re navigating blindly. But, wait – there’s a ray of hope! The hero in this story is blockchain technology, here to tackle these misleading monsters head-on. In this journey, we’ll explore how […]"
                            imageUrl={require('../data/deep2.png')}
                            link="/Blockchain"
                        />


                        {/* -------------------------------------------------------------------------- */}
                        <BlogCard
                            title=" Securing IoT with Blockchain and AI: A Comprehensive Guide"
                            description="In today’s interconnected world, the Internet of Things (IoT) has revolutionized how devices and systems communicate and collaborate. From smart homes to industrial automation, IoT has ushered in an era of convenience and efficiency. However, this rapid proliferation of interconnected devices has also raised significant security concerns. To address these challenges, the combination of two […]"
                            imageUrl={require('../data/block2.png')}
                            link="/Securing_Iot"
                        />


                        <BlogCard
                            title=" Web3 Search Engines: A New Frontier for SEO and Digital Visibility"
                            description=" As the digital landscape continues its relentless evolution, we are witnessing a paradigm shift in understanding and interacting with the Internet. We’ve moved from static pages in Web1 to the interactive and social Web2, and now, we stand on the precipice of a new digital frontier: Web3. With the emergence of Web3 search engines, businesses, […]"
                            imageUrl={require('../data/Web3.png')}
                            link="/Web"
                        />

                        <BlogCard
                            title="Hyperledger Healthcare: Transforming the Healthcare Industry"
                            description="The healthcare industry, a vital pillar of society, is experiencing a revolutionary transformation fueled by cutting-edge technologies. One such groundbreaking force is Hyperledger Healthcare. This innovative framework, built on the principles of blockchain technology, is poised to revolutionize healthcare operations, data security, patient care, and much more. In this blog post, we’ll delve into the […]"
                            imageUrl={require('../data/deep2.png')}
                            link="/Hyperledger"
                        />













                    </Paper>
                </Grid>
            </Grid>







            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>

    );
};

export default Blog;
