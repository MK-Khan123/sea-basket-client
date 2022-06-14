import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const IntroVideo = () => {

    const introVideo = "https://www.youtube.com/embed/tgbNymZ7vqY?controls=0";

    return (
        <Container id='intro-video' sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}>
            <Typography mt={12} mb={6} textTransform='uppercase' textAlign='center' fontWeight='bold' variant="h3" gutterBottom component="div">
                A glance at our product
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <iframe
                    title="A glance at our product"
                    width="80%"
                    height="400"
                    src={`${introVideo}`}>
                </iframe>
            </Box>
        </Container>
    );
};

export default IntroVideo;