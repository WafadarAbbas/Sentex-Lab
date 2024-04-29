import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Button, TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import illustration from '../../data/background.jpg'; // Replace with actual path to illustration image
import Select, { SelectChangeEvent } from '@mui/material/Select';
import ReCAPTCHA from 'react-google-recaptcha';
import AOS from "aos";
import "aos/dist/aos.css";
import '../../screens/style.css';

interface FormData {
  name: string;
  email: string;
  phone: string;
  Reference: string;
  dropdown: string;
  dropdown2: string;
  message: string;
}

const ServiceForm: React.FC = () => {

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    Reference: '',
    dropdown: '',
    dropdown2: '',
    message: ''
  });

  const [captchaToken, setCaptchaToken] = useState<string>('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };

  const [catagories, setcatagories] = React.useState<string>('');
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setcatagories(event.target.value as string);
  };
  const [price, setprice] = React.useState<string>('');
  const handleDropdownChange2 = (event: SelectChangeEvent) => {
    setprice(event.target.value as string);
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
    <Box sx={{
      backgroundImage: `url(${illustration})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      minHeight: '100px',
      color: 'white', // Font color
      p: 3,
    }}>
      <Box m={{ xs: 0, lg: 5 }}>
        <form onSubmit={handleSubmit}  data-aos="fade-right" data-aos-duration="1000">
          <Grid container spacing={2} marginBottom={3}>
            <Grid item xs={12} sm={3} mb={2}>
              <TextField
                label="Name *"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ style: { color: 'grey' } }}
                sx={{
                  '& input': {
                    color: 'grey',
                    backgroundColor: 'white',
                    height: '40px', // Reduce height
                    borderRadius: '8px', // Rounded corners
                    padding: '4px', // Adjust padding
                  },
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <TextField
                label="Email *"
                name="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ style: { color: 'grey' } }}
                sx={{
                  '& input': {
                    color: 'grey',
                    backgroundColor: 'white',
                    height: '40px', // Reduce height
                    borderRadius: '8px', // Rounded corners
                    padding: '4px', // Adjust padding
                  },
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                  },
                }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={3}   >
            <Grid item xs={12} lg={4}  mb={2}>
              <FormControl fullWidth>
                <InputLabel id="dropdown-label" style={{ color: 'grey' }}>Services You are intereted in</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={catagories}
                  label="Instant messenger"
                  onChange={handleDropdownChange}
                  style={{ color: 'grey', backgroundColor: 'white' ,borderRadius: '10px'}} // Select color and background color
                  sx={{ '& input': { color: 'grey', backgroundColor: 'white' } }} // Text color and background color of the input field
                >
                  <MenuItem value={'Web Development'} style={{ color: 'grey' }}>Web Development</MenuItem>
                  <MenuItem value={'App Development'} style={{ color: 'grey' }}>App Development</MenuItem>
                  <MenuItem value={'Artificial Intelligence'} style={{ color: 'grey' }}>Artificial Intelligence</MenuItem>
                  <MenuItem value={'Staff Augmentation'} style={{ color: 'grey' }}>Staff Augmentation </MenuItem>
                </Select>
              </FormControl>

            </Grid>
            <Grid item xs={12} lg={4}  mb={2}>
              <FormControl fullWidth>
                <InputLabel id="dropdown-label" style={{ color: 'grey' }}>$500-$5000</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={price}
                  label="Instant messenger"
                  onChange={handleDropdownChange2}
                  style={{ color: 'grey', backgroundColor: 'white',borderRadius: '10px' }} // Select color and background color
                  sx={{ '& input': { color: 'grey', backgroundColor: 'white' } }} // Text color and background color of the input field
                >
                  <MenuItem value={'$500-$5000'} style={{ color: 'grey' }}>$500-$5000</MenuItem>
                  <MenuItem value={'$500-$20000'} style={{ color: 'grey' }}>$500-$20000</MenuItem>
                  <MenuItem value={'$2000-$30000'} style={{ color: 'grey' }}>$2000-$30000</MenuItem>
                </Select>
              </FormControl>

            </Grid>
          </Grid>
          <Grid container spacing={2} marginBottom={3}>
            <Grid item xs={12} sm={3}  mb={2}>
              <TextField
                label="Phone *"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ style: { color: 'grey' } }}
                sx={{
                  '& input': {
                    color: 'grey',
                    backgroundColor: 'white',
                    height: '40px', // Reduce height
                    borderRadius: '8px', // Rounded corners
                    padding: '4px', // Adjust padding
                  },
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12} sm={3}  mb={2}>
              <TextField
                label="Reference/Whatsapp"
                name="Reference"
                value={formData.Reference}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ style: { color: 'grey' } }}
                sx={{
                  '& input': {
                    color: 'grey',
                    backgroundColor: 'white',
                    height: '40px', // Reduce height
                    borderRadius: '8px', // Rounded corners
                    padding: '4px', // Adjust padding
                  },
                  '& .MuiInputLabel-root': {
                    color: 'grey',
                  },
                }}
              />
            </Grid>
          </Grid>


          <Grid container spacing={2} marginBottom={3}>
            <Grid item xs={12} sm={6}  mb={2}>
              <TextField
                label="Message *"
                name="message"
                value={formData.message}
                onChange={handleChange}
                multiline
                rows={3}
                fullWidth
                InputLabelProps={{ style: { color: 'grey' } }} // Input label color
                style={{ backgroundColor: 'white', color: 'grey',borderRadius: '10px', }} // Text color and background color
                
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
  );
};

export default ServiceForm;
