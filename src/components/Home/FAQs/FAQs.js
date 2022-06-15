import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';
import Preloader from '../../Shared/Preloader/Preloader';

const FAQs = () => {

    const [faqsData, setFaqsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://calm-hamlet-62917.herokuapp.com/faqs`)
            .then(res => res.json())
            .then(data => {
                setFaqsData(data);
                setIsLoading(false);
            });
    }, []);

    return (
        <Container id='faqs' sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}>
            <Typography
                mt={12}
                textTransform='uppercase'
                textAlign='center'
                fontWeight='bold'
                variant="h3"
                gutterBottom
                component="div"
            >
                FAQs
            </Typography>
            <Box                
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    isLoading ? (
                        <Preloader />
                    ) : (

                        faqsData?.map(faq => {
                            const { question, answer, _id } = faq;
                            return (
                                <Box key={_id} mt={4}>
                                    <Accordion sx={{ backgroundColor: '#E4E6EA' }}>
                                        <AccordionSummary expandIcon={<ExpandMoreIcon />} id={`${_id}`}>
                                            <Typography fontWeight='bold' variant="h5" gutterBottom component="div">{question}</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography variant="h5" gutterBottom component="div">{answer}</Typography>
                                        </AccordionDetails>
                                    </Accordion>
                                </Box>
                            );
                        })
                    )
                }
            </Box>
        </Container>
    );
};

export default FAQs;
