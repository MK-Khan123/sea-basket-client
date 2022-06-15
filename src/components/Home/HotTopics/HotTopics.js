import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Typography } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Preloader from '../../Shared/Preloader/Preloader';

const HotTopics = () => {

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

    return (
        <Container id='topics-you-cant-miss' sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}>
            <Typography
                mt={12}
                textTransform='uppercase'
                textAlign='center'
                fontWeight='bold'
                variant="h3"
                gutterBottom
                component="div"
            >
                Topics you can't miss
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
                                </Box>
                            );
                        })
                    )
                }
            </Box>
        </Container>
    );
};

export default HotTopics;