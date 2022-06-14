import React from 'react';
import { Box } from '@mui/material';

const Banner = () => {
    const bannerImage = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1655226297/proffus-task/fish-banner_saluvs.jpg';

    return (
        <Box sx={{
            backgroundImage: `url(${bannerImage})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            height: '30rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Box
                component='h5'
                sx={{
                    fontSize: '4rem',
                    color: 'white',
                    fontWeight: '500',
                    textAlign: 'center'
                }}
            >
                SEA BASKET
            </Box>
        </Box>
    );
};

export default Banner;