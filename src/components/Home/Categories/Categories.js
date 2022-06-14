import React, { useEffect, useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Preloader from '../../Shared/Preloader/Preloader';

const Categories = () => {

    const [categoriesData, setCategoriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`http://localhost:5000/categories`)
            .then(res => res.json())
            .then(data => {
                setCategoriesData(data);
                setIsLoading(false);
            });
    }, [categoriesData]);

    return (
        <Container id='categories' sx={{ paddingBottom: 5, borderBottom: '3px solid #970C0C' }}>
            <Typography mt={12} mb={6} textTransform='uppercase' textAlign='center' fontWeight='bold' variant="h3" gutterBottom component="div">
                Categories
            </Typography>
            {
                isLoading ? (
                    <Preloader />
                ) : (
                    <Grid container columnSpacing={3} rowSpacing={6} justifyContent='center'>
                        {
                            categoriesData.map(categoryData => {
                                const { image, category, _id } = categoryData;
                                return (
                                    <Grid item
                                        key={_id}
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
                )
            }
        </Container>
    );
};

export default Categories;