import React from 'react';
import { Box, Typography } from '@mui/material';
import Blogtext from './blogtext';
import TopAppBar from '../TopAppBar';
import Footer from '../footer';



const Blockchainpage: React.FC = () => {
    return (
<Box>
        <TopAppBar/>
        <Box m={{ xs: 5, sm: 15 }}>
            <Blogtext
                heading="How Blockchain Fights Back Against AI Misinformation and Deepfakes"
                typo1="In a world where it’s hard to tell real from fake, the rise of AI-driven misinformation and deepfakes is like a digital maze we’re navigating blindly. But, wait – there’s a ray of hope! The hero in this story is blockchain technology, here to tackle these misleading monsters head-on."
                typo2="In this journey, we’ll explore how blockchain is standing up to AI misinformation and deepfakes, breaking down complex stuff into plain English, and figuring out what’s good and what’s not."
            />

            <Blogtext
                heading="AI Misinformation and Deepfakes"
                typo1="Before we dive into the superhero role of blockchain, let’s get what we’re up against. AI-powered misinformation is like a sneaky magician’s trick using AI to spread false stories."
                typo2="Deepfakes, on the other hand, are like digital disguises for videos, making it seem like someone said something they never did. These digital shenanigans can mess up our heads, mess with reputations, and even mess up politics."/>
       


       <Blogtext
                heading="Blockchain to the Rescue: Safeguarding the Truth"
                typo1="Now, here comes blockchain, originally known for Bitcoin, but now doing much more. It’s like a superhero cape for data – it makes sure data isn’t messed with. When it comes to AI content and deepfakes, blockchain is the guardian angel ensuring digital stuff is real."
                typo2="It does this by making an unchangeable record of actions. So, if someone tries to mess with things, it’s a dead giveaway.                "/>
       


       <Blogtext
                heading="Trust Boost: How Decentralization Makes a Difference"
                typo1="Think of decentralization as teamwork against villains. Traditional systems can be taken down by one hit. But blockchain spreads data like a team, making it hard to take down. This teamwork doesn’t just make things safer, it also makes people trust more." 
                 typo2="Nobody has all the power, so everyone can breathe easy. Using this teamwork for AI-made stuff means that it’s hard for anyone to mess things up without getting caught."
/>


       <Blogtext
                heading="Time Stamps: The Time-Travelers’ Truth Serum"
                typo1="Remember those movies where time travel messes things up? Blockchain uses time travel – but for good. Each action on blockchain gets a time stamp, like a time-traveler’s ticket."
                typo2="These time stamps show the order things happened in. So, if anyone tries to fake something, the time-traveler’s ticket will show they’re lying. Time’s up for those who try to trick us!"
       />
       
       
        </ Box>

<Footer/>
        </Box>
    );
};

export default Blockchainpage;
