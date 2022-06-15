import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Preloader from '../../Shared/Preloader/Preloader';
import Sidebar from '../Sidebar/Sidebar';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';

const DeleteHotTopics = () => {
    document.title = 'Delete Hot Topics';

    const [hotTopicsData, setHotTopicsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://calm-hamlet-62917.herokuapp.com/hotTopics`)
            .then(res => res.json())
            .then(data => {
                setHotTopicsData(data);
                setIsLoading(false);
            });
    }, []);

    const handleDeleteTopic = (id) => {
        const url = `https://calm-hamlet-62917.herokuapp.com/deleteHotTopics/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remainingHotTopicsData = hotTopicsData.filter(topic => topic._id !== id);
                setHotTopicsData(remainingHotTopicsData);
                sweetAlert("Topics removed successfully!", 'success', "Please go to Home page to see the update");
            });
    };

    return (
        <Container id='delete-hot-topics'>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Typography variant="h4" gutterBottom component="div">
                        Delete Hot Topics
                    </Typography>
                    <Box
                        mt={4}
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

                                hotTopicsData?.map(hotTopic => {
                                    const { article_title, article_description, _id } = hotTopic;
                                    return (
                                        <Box key={_id}>
                                            <Card
                                                sx={{
                                                    boxShadow: 6,
                                                    borderRadius: 2,
                                                    backgroundColor: '#E4E6EA',
                                                    marginY: 2
                                                }}
                                            >
                                                <CardActionArea>
                                                    <CardContent>
                                                        <Typography
                                                            fontWeight='bold'
                                                            gutterBottom
                                                            variant="h5"
                                                            component="div"
                                                        >
                                                            {article_title}
                                                        </Typography>
                                                        <Typography variant="h5">
                                                            {article_description}
                                                        </Typography>
                                                    </CardContent>
                                                    <CardActions>
                                                        <Box sx={{ width: '100%', textAlign: 'end' }}>
                                                            <Button
                                                                variant='contained'
                                                                endIcon={<ChevronRightRoundedIcon />}
                                                                size="small"
                                                                color="primary"
                                                            >
                                                                Read More
                                                            </Button>
                                                        </Box>
                                                    </CardActions>
                                                </CardActionArea>
                                            </Card>
                                            <Button
                                                sx={{ marginTop: '10px' }}
                                                onClick={() => handleDeleteTopic(_id)}
                                                variant="contained"
                                                color="error"
                                            >
                                                Delete
                                            </Button>
                                        </Box>
                                    );
                                })
                            )
                        }
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DeleteHotTopics;