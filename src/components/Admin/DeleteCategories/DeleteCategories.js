import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActions, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Preloader from '../../Shared/Preloader/Preloader';
import Sidebar from '../Sidebar/Sidebar';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';

const DeleteCategories = () => {

    const [categoriesData, setCategoriesData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://calm-hamlet-62917.herokuapp.com/categories`)
            .then(res => res.json())
            .then(data => {
                setCategoriesData(data);
                setIsLoading(false);
            });
    }, []);

    const handleDeleteCategory = (id) => {
        const url = `https://calm-hamlet-62917.herokuapp.com/deleteCategory/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remainingCategories = categoriesData.filter(category => category._id !== id);
                setCategoriesData(remainingCategories);
                sweetAlert("Category removed successfully!", 'success', "Please go to Home page to see the update");
            });
    };

    return (
        <Container id='delete-categories'>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Delete Categories
                        </Typography>
                        {
                            isLoading ? (
                                <Preloader />
                            ) : (
                                <Grid container columnSpacing={3} rowSpacing={6}>
                                    {
                                        categoriesData?.map(categoryData => {
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
                                                        <CardActions>
                                                            <Button
                                                                onClick={() => handleDeleteCategory(_id)}
                                                                size="small"
                                                                variant="contained"
                                                                color="primary"
                                                            >
                                                                Delete
                                                            </Button>
                                                        </CardActions>
                                                    </Card>
                                                </Grid>
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

export default DeleteCategories;