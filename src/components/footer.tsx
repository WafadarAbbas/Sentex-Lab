import React from "react";
import {
    Container,
    Typography,
    Box,
    TextField,
    Button,

    Grid,
    Avatar,
    Divider,
} from "@mui/material";



import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";

import image from '../data/logo.png';

const scrollToTop = () => {
    setTimeout(() => {
      window.scrollTo(0, 0); // Scroll to the top of the page after a short delay
    }, 100); // Adjust the delay as needed
  };


const ul2 = [
    "Blockchain Development",
    "Staff Augmentation",
    "UI / UX Design",
    "Web Development",
    "Mobile App Development",
];
const ul3: { name: string; icon: string }[] = [
    {
        name: "Twitter",
        icon: require("../icons/f1.png"),
    },
    {
        name: "Linkedin",
        icon: require("../icons/f2.png"),
    },

    {
        name: "Facebook",
        icon: require("../icons/f3.png"),
    },
    {
        name: "Instagram",
        icon: require("../icons/f4.png"),
    },
];
const ul4 = ["About Us", "Services", "Webinar", 'Blog','Contact Us'];


const Footer = () => {
    return (
        <Box
            sx={{
                px: { md: 7, xs: 5 },
                py: { md: 5, xs: 5 },
                mt: 5,
                backgroundColor: "#000000",
            }}
        >
            <Grid container direction={"row"} spacing={6} mt={5}>
                <Grid item md={3} xs={12} lg={4}>
                    <div style={{ display: "flex", flexDirection: "row" }}> <Link to={'/'}>
                        <img src={image} alt="Logo" style={{ width: '50px', marginRight: '10px', marginTop: 5 }} />
                    </Link>
                        <Typography fontSize={30} fontWeight={600} color={"white"}>
                            Sentex Lab
                        </Typography>
                    </div>
                    <Typography fontSize={16} fontWeight={100} color={"#ffff"} mt={2}>
                    Unlocking the Power of Technology.
                    </Typography>



                    <Grid item mt={5} >
                        <Typography fontSize={26} fontWeight={700} color={"white"} marginBottom={2}>
                            Social
                        </Typography>
                        <Grid item lg={12} xs={12} container spacing={1}>
                            <Grid item>

                                <IconButton
                                    href={'https://web.facebook.com/SentaxLab/?_rdc=1&_rdr'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Facebook"
                                    style={{ color: "white" }}
                                >
                                    <FacebookIcon style={{ fontSize: 25 }} />
                                </IconButton>

                            </Grid>
                            <Grid item>
                            <IconButton
                                    href={'https://www.instagram.com/sentaxlab?igsh=OHYyeGpta2s5NnIz'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    style={{ color: "white" }}
                                >
                                    <InstagramIcon style={{ fontSize: 25 }} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                            <IconButton
                                    href={'https://www.linkedin.com/company/sentaxlab/?originalSubdomain=pk'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    style={{ color: "white" }}
                                >
                                    <LinkedInIcon style={{ fontSize: 25 }} />
                                </IconButton>
                            </Grid>
                            <Grid item>
                            
                            <IconButton
                                    href={'https://twitter.com/sentexlab'}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="X"
                                    style={{ color: "white" }}
                                >
                                    <XIcon style={{ fontSize: 25 }} />
                                </IconButton>
                            </Grid>

                        </Grid>

                    </Grid>
                </Grid>
                <Grid item md={2} xs={12} lg={2.5}>
  <Typography fontSize={24} fontWeight={700} color={"white"} marginBottom={2}>
    OUR SERVICES
  </Typography>
  <ul
    style={{
      listStyle: "none",
      padding: 0,
      flexDirection: "column",
      display: "flex",
      gap: 1,
    }}
  >
  
    <li>
      <Link
        to={'/StaffAugmentation'}
        onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>Staff Augmentation</span>
        </div>
      </Link>
    </li>
    <li>
      <Link
        to={'/ArtificialIntelligence'}
        onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>Artificial Intelligence</span>
        </div>
      </Link>
    </li>
    <li>
      <Link
        to={'/WebDevelopment'}
        onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>Web Development</span>
        </div>
      </Link>
    </li>
    <li>
      <Link
        to={'/MobileDevelopment'}
        onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>Mobile App Development</span>
        </div>
      </Link>
    </li>
  </ul>
</Grid>




<Grid item md={2} xs={12} lg={2.5}>
  <Typography fontSize={24} fontWeight={700} color={"white"} marginBottom={2}>
    QUICK LINKS
  </Typography>
  <ul
    style={{
      listStyle: "none",
      padding: 0,
      flexDirection: "column",
      display: "flex",
      gap: 1,
    }}
  >
    <li>
      <Link
        to={'/about-us'}
        onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>About Us</span>
        </div>
      </Link>
    </li>
    <li>
      <Link
        to={'/services'}
        onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>Services</span>
        </div>
      </Link>
    </li>
 
    <li>
      <Link
        to={'/blogs'} onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>Blog</span>
        </div>
      </Link>
    </li>
    <li>
      <Link
        to={'/contactus'}
        onClick={scrollToTop}
        color="inherit"
        style={{
          textDecoration: "none",
          display: "block",
          marginBottom: "10px",
          color: "#ffff",
          fontSize: "14px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <svg
            aria-hidden="true"
            className="e-font-icon-svg e-far-window-minimize"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "15px", height: "30px", fill: "#0693e3", marginRight: "10px" }}
          >
            <path d="M480 480H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h448c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
          </svg>
          <span style={{ marginTop: 5 }}>Contact Us</span>
        </div>
      </Link>
    </li>
  </ul>
</Grid>


                <Grid item md={3} xs={12} lg={2.5} >
                    <Typography fontSize={24} fontWeight={700} color={"white"} marginBottom={2}>
                        Contact Us
                    </Typography>
                    <Grid gap={3}>
                        <Typography color={"#ffff"} marginBottom={2}>
                            <PhoneInTalkIcon style={{ fontSize: 25, color: '#0693e3', marginRight: 3 }} />
                            055 4250044
                        </Typography>

                        <Typography color={"#ffff"} marginBottom={2}>
                            <MailIcon style={{ fontSize: 25, color: '#0693e3', marginRight: 3 }} />
                            info@sentexlab.com
                        </Typography>

<div style={{display:'flex' }}>
                        <LocationOnIcon style={{ fontSize: 25, color: '#0693e3', marginRight: 3, }} />
                        <Typography color={"#ffff"} marginBottom={2} textAlign={'justify'}>
                          Office #7 ,Third Floor Trade Center  GT Road 52250  Gujranwala Punjab Pakistan
                        </Typography>
                        </div>
                    </Grid>
                </Grid>


            </Grid>
            <Divider
                variant="inset"
                component="li"
                sx={{
                    borderBottom: "1px solid #A0A3B5",
                    width: "100%",
                    ml: { md: 0, xs: 0 },
                }}
            />
            <Grid
                container
                sx={{ flexDirection: { md: "row", xs: "column-reverse" }, mt: 2, mb: 5 }}
            >
                <Grid item md={6} xs={12}>

                </Grid>
                <Grid item md={6} xs={12}>
                    <Typography
                        sx={{
                            color: "#A0A3B5",
                            fontSize: "14px",
                            textAlign: { md: "right", xs: "center" },
                        }}
                    >
                        Copyright: © 2023 Sentax Lab. All Rights Reserved
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Footer;