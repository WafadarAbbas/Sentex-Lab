import React, { useEffect, useState } from 'react';
import TopAppBar from '../components/TopAppBar';
import { Grid, Typography, Box, Button, Divider, TextField, FormControl, InputLabel, MenuItem } from '@mui/material';

import './style.css';

import AOS from "aos";
import "aos/dist/aos.css";
import Footer from '../components/footer';

import Select, { SelectChangeEvent } from '@mui/material/Select';
import ReCAPTCHA from 'react-google-recaptcha';
import ScrollToTop from 'react-scroll-to-top';

const ContactUs: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        dropdown: '', // Define dropdown property
        message: ''
    });

    const [captchaToken, setCaptchaToken] = useState('');
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(formData);
        // Add your form submission logic here
    };
    const [age, setAge] = React.useState('');

    const handleDropdownChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const handleRecaptchaChange = (token: string | null) => {
        if (token) {
            setCaptchaToken(token);
        }
    };


    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);


    return (

        <div>
            <TopAppBar />



            <Box sx={{ p: 2 }}>
                <Box m={{ xs: 0, lg: 5 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <div data-aos="fade-up" data-aos-duration="3000">
                                <Typography variant="h4" style={{ fontWeight: 'bold' }}>Send A Message</Typography>
                            </div>
                            <Divider orientation="horizontal" sx={{ bgcolor: 'black', height: 10, width: 70, marginTop: '2px' }} />
                            <Typography variant="body1" color={'grey'} style={{ marginTop: '10px', marginBottom: '20px' }}>
                                Let’s work together to bring your ideas to life and launch your next successful project. Request a quote.
                            </Typography>
                        </Grid>
                    </Grid>

                </Box>
                <Box m={{ xs: 0, lg: 5 }}>


                    <form onSubmit={handleSubmit}>
                        <Grid container spacing={2} marginBottom={3}>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label="Name *"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label="Email *"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} marginBottom={3}>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label="Phone *"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    label="Subject *"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    fullWidth
                                />
                            </Grid>

                        </Grid>
                        <Grid container spacing={2} marginBottom={3}>
                            <Grid item xs={12} sm={6}>
                                <FormControl fullWidth>
                                    <InputLabel id="dropdown-label">Instant messenger</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={age}
                                        label="Instant messenger"
                                        onChange={handleDropdownChange}
                                    >
                                        <MenuItem value={'Telegram'}>Telegram</MenuItem>
                                        <MenuItem value={'Skype'}>Skype</MenuItem>
                                        <MenuItem value={'Whatsapp'}>Whatsapp</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} marginBottom={3} >
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    label="Message *"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item xs={12}>

                                <ReCAPTCHA
                                    sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                    onChange={handleRecaptchaChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit">
                                    Submit
                                </Button>
                            </Grid>
                        </Grid>
                    </form>

                </Box>
            </Box>





            <Footer />
            <ScrollToTop color='#0693e3' width='32' viewBox="-1 0 180 256"  style={{ marginRight: 70 }} />
        </div>

    );
};

export default ContactUs;
