import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Container } from '@mui/material';

const FAQs = () => {

    const faqsData = [
        {
            _id: "01",
            question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            _id: "02",
            question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            _id: "03",
            question: "Lorem ipsum dolor sit, amet consectetur adipisicing elit?",
            answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ];

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
                    faqsData.map(faq => {
                        const { question, answer, _id } = faq;
                        return (
                            <Box mt={4}>
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
                }
            </Box>
        </Container>
    );
};

export default FAQs;
