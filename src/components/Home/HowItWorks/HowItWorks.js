import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HowItWorks = () => {
    return (
        <Container id='how-it-works'>
            <Box
                mt={12}
                display='flex'
                flexDirection='column'
                justifyContent='center'
                alignItems='center'
                sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}
            >
                <Typography textTransform='uppercase' fontWeight='bold' variant="h3" gutterBottom component="div">
                    How It Works
                </Typography>
                <Typography variant="body1" fontSize='1.5rem' gutterBottom>
                    Sea Basket delivers fresh sourced seafood in a few easy clicks
                </Typography>
            </Box>
        </Container>
    );
};

export default HowItWorks;