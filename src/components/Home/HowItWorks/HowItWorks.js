import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import Preloader from '../../Shared/Preloader/Preloader';

const HowItWorks = () => {    

    const [content, setContent] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://calm-hamlet-62917.herokuapp.com/howItWorks`)
            .then(res => res.json())
            .then(data => {
                setContent(data[0]?.content);
                setIsLoading(false);
            });
    }, []);

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
                {
                    isLoading ? (
                        <Preloader />
                    ) : (
                        <Typography variant="body1" fontSize='1.5rem' gutterBottom>
                            {content}
                        </Typography>
                    )
                }
            </Box>
        </Container>
    );
};

export default HowItWorks;