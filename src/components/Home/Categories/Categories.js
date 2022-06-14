import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';

const categoriesData = [
    {
        id: '46sdsa',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1655230093/proffus-task/fish_mcfaon.jpg',
        category: "fish"
    },
    {
        id: '46xgha',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1655230092/proffus-task/crustaceans_jyaxny.jpg',
        category: "crustaceans"
    },
    {
        id: '4dsa',
        image: 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1655230093/proffus-task/exotic_uwiibx.jpg',
        category: "exotic"
    }
];

const Categories = () => {
    return (
        <Container id='categories' sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}>
            <Typography mt={12} mb={6} textTransform='uppercase' textAlign='center' fontWeight='bold' variant="h3" gutterBottom component="div">
                Categories
            </Typography>

            <Grid container columnSpacing={3} rowSpacing={6} justifyContent='center'>
                {
                    categoriesData.map(project => {
                        const { image, category, id } = project;
                        return (
                            <Grid item
                                key={id}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}
                                md={4}
                                sm={12}
                            >

                                <Card sx={{ width: 410, boxShadow: 6, borderRadius: 2, backgroundColor: '#212428' }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="250"
                                            image={image}
                                            alt="project image"
                                        />
                                        <CardContent>
                                            <Typography textTransform='uppercase' gutterBottom variant="h5" component="div" color="#E4E6EA">
                                                {category}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
};

export default Categories;