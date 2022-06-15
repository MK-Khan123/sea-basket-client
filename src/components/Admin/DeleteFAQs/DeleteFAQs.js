import { useEffect, useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';
import Preloader from '../../Shared/Preloader/Preloader';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';

const DeleteFAQs = () => {

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

    const handleDeleteFAQ = (id) => {
        const url = `https://calm-hamlet-62917.herokuapp.com/deleteFaq/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remainingFAQs = faqsData.filter(faq => faq._id !== id);
                setFaqsData(remainingFAQs);
                sweetAlert("FAQ removed successfully!", 'success', "Please go to Home page to see the update");
            });
    };

    return (
        <Container id='delete-faqs'>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography mb={8} variant="h4" gutterBottom component="div">
                            Delete FAQs
                        </Typography>
                        {
                            isLoading ? (
                                <Preloader />
                            ) : (
                                <Grid container columnSpacing={3} rowSpacing={6}>
                                    {
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
                                                    <Button
                                                        sx={{marginTop: '10px'}}
                                                        onClick={() => handleDeleteFAQ(_id)}
                                                        size="small"
                                                        variant="contained"
                                                        color="primary"
                                                    >
                                                        Delete
                                                    </Button>
                                                </Box>
                                            );
                                        })
                                    }
                                </Grid>
                            )
                        }
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DeleteFAQs;