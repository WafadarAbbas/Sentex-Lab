import React from 'react';
import { Typography } from '@mui/material';

interface blogtextProps {
    heading: string;
    typo1?: string;
    typo2?: string;
    typo3?: string;
}

const blogtext: React.FC<blogtextProps> = ({ heading, typo1, typo2, typo3 }) => {
    return (
        <div style={{ marginBottom: '30px' }}>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
                {heading}
            </Typography>
            <Typography variant="body1" color={'grey'} paragraph>
                {typo1}
            </Typography>
            <Typography variant="body1" color={'grey'} paragraph>
                {typo2}
            </Typography>
            <Typography variant="body1" color={'grey'} paragraph>
                {typo3}
            </Typography>
        </div>
    );
};

export default blogtext;
