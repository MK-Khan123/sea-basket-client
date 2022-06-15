import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

const Banner = () => {

    const [bannerImage, setBannerImage] = useState([]);

    useEffect(() => {
        fetch(`https://calm-hamlet-62917.herokuapp.com/banner`)
            .then(res => res.json())
            .then(data => setBannerImage(data[0]));
    }, []);

    return (
        <Box sx={{
            backgroundImage: `url(${bannerImage?.imageUrl})`,
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