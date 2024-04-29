import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

interface TickBoxProps {
  heading?: string;
  description?: string;
  description2?: string;
  description3?: string;

}

const TickBox: React.FC<TickBoxProps> = ({ heading, description, description2, description3 }) => {
  return (
    <Box
      display="flex"
      flexDirection={{ xs: 'column', sm: 'row' }}
      justifyContent="left"
      mb={2}
      alignItems={{ xs: 'center', sm: 'flex-start' }} // Align center for xs, flex-start for sm and above
    >
      <CheckCircleIcon color="primary" style={{ fontSize: '2rem', }} />

      <Box ml={{ xs: 0, sm: 2 }} mt={{ xs: 2, sm: 0 }}>
        <Typography
          variant="h5"
          component="h2"
          fontWeight="bold"
          textAlign={{ xs: 'center', sm: 'left' }}
          mb={1}// Center align for xs, left align for sm and above
        >
          {heading}
        </Typography>
        <Typography variant="body1" component="p" textAlign="justify" color={'grey'} mb={1} >{description}</Typography>
        <Typography variant="body1" component="p" textAlign="justify" color={'grey'} mb={1}>{description2}</Typography>
        <Typography variant="body1" component="p" textAlign="justify" color={'grey'} mb={1}>{description3}</Typography>
      </Box>
    </Box>
  );
}

export default TickBox;

