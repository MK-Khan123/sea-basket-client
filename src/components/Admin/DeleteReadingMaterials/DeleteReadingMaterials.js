import { useEffect, useState } from 'react';
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Container, Grid, Typography } from '@mui/material';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import Preloader from '../../Shared/Preloader/Preloader';
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';

const DeleteReadingMaterials = () => {
    document.title = 'Delete Reading Materials';

    const [readingMaterialsData, setReadingMaterialsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://calm-hamlet-62917.herokuapp.com/readingMaterials`)
            .then(res => res.json())
            .then(data => {
                setReadingMaterialsData(data);
                setIsLoading(false);
            });
    }, []);


    const handleDeleteReading = (id) => {
        const url = `https://calm-hamlet-62917.herokuapp.com/deleteReadingMaterials/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                const remainingReadingMaterials = readingMaterialsData.filter(readingMaterial => readingMaterial._id !== id);
                setReadingMaterialsData(remainingReadingMaterials);
                sweetAlert("Reading Materials removed successfully!", 'success', "Please go to Home page to see the update");
            });
    };

    return (
        <Container id='delete-reading-materials'>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Typography variant="h4" gutterBottom component="div">
                        Delete Reading Materials
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
                                readingMaterialsData.map(readingMaterial => {
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
                                            <Button
                                                sx={{ marginTop: '10px' }}
                                                onClick={() => handleDeleteReading(_id)}
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

export default DeleteReadingMaterials;