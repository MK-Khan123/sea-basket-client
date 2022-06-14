import React from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Typography } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';

const ReadingMaterials = () => {

    const readingMaterialData = [
        {
            _id: "01",
            article_title: "The right quality",
            article_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            _id: "02",
            article_title: "The right time",
            article_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        },
        {
            _id: "03",
            article_title: "The basis of a balanced diet",
            article_description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
        }
    ];

    return (
        <Container id='have-a-read' sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}>
            <Typography
                mt={12}
                textTransform='uppercase'
                textAlign='center'
                fontWeight='bold'
                variant="h3"
                gutterBottom
                component="div"
            >
                Have a read
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
                    readingMaterialData.map(readingMaterial => {
                        const { article_title, article_description, _id } = readingMaterial;
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
                }
            </Box>
        </Container>
    );
};

export default ReadingMaterials;