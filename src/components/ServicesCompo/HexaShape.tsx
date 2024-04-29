import React from 'react';
import { Grid, Typography } from '@mui/material';


interface YourComponentProps {
  title?: string;
  imageUrl?: string;
  Description?: string;
}

const HexaShape: React.FC<YourComponentProps> = ({ title, imageUrl, Description }) => {

  return (

    //   </Grid>
    <Grid item textAlign="center" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography mb={2} fontSize={20} color="black" fontWeight="bold">
        {title}
      </Typography>
      <div className="shape-outer hexagon">
        <div className="shape-inner hexagon">
          {imageUrl && <img src={imageUrl} className="hexagon-image" />}
        </div>
      </div>
      <Typography mb={3} mt={3} fontSize={20} color="black" fontWeight="bold">
        {Description}
      </Typography>
    </Grid>
  );
};

export default HexaShape;
