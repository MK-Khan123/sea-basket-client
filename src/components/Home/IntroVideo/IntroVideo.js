import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Preloader from '../../Shared/Preloader/Preloader';

const IntroVideo = () => {

    const [introVideo, setIntroVideo] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://calm-hamlet-62917.herokuapp.com/introVideo`)
            .then(res => res.json())
            .then(data => {
                const search = '=';
                const splitVideoUrl = data[0]?.videoUrl.split(search);
                setIntroVideo(splitVideoUrl[1]);
                setIsLoading(false);
            });
    }, []);    

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
                {
                    isLoading ? (
                        <Preloader />
                    ) : (
                        <iframe
                            title="A glance at our product"
                            width="80%"
                            height="400"
                            src={`https://www.youtube.com/embed/${introVideo}`}
                        >
                        </iframe>
                    )
                }
            </Box>
        </Container >
    );
};

export default IntroVideo;