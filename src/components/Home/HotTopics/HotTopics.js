import React from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Typography } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const HotTopics = () => {
    const hotTopicsData = [
        {
            _id: "01",
            article_title: "Topics you can't miss",
            article_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            _id: "02",
            article_title: "How to clean/cut your seafood",
            article_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ];

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
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                {
                    hotTopicsData.map(hotTopic => {
                        const { article_title, article_description, _id } = hotTopic;
                        return (
                            <Box key={_id} mt={4}>
                                <Card
                                    sx={{
                                        boxShadow: 6,
                                        borderRadius: 2,
                                        backgroundColor: '#212428',
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
                                                color="#E4E6EA"
                                            >
                                                {article_title}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                color="#878E99"
                                            >
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
                }
            </Box>
        </Container>
    );
};

export default HotTopics;