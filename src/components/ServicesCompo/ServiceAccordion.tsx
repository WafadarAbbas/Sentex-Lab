import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

interface AccordionUsageProps {
  heading: string;
  description: string;
}

const ServiceAccordion: React.FC<AccordionUsageProps> = ({ heading, description }) => {
  return (
    <div>
      <Accordion sx={{ marginBottom: '4px' }}>
        <AccordionSummary
          expandIcon={<Typography variant="h4" color={'#0693e3'} >+</Typography>}
          aria-controls="panel1-content"
          id="panel1-header"
          sx={{ backgroundColor: '#E9E9E9', fontSize: '18px' }}
        >
          {heading}
        </AccordionSummary>
        <AccordionDetails
          sx={{ backgroundColor: '#fbf9f9' }}>
          <Typography textAlign={'justify'} color={'grey'} >
            <Grid lg={7} mt={2}>
              {description}
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default ServiceAccordion;
