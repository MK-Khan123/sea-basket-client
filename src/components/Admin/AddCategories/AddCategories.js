import { useState } from 'react';
import { Grid, Box, Button, Typography, TextField, Container } from '@mui/material';
import { useForm } from "react-hook-form";
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';

const AddCategories = () => {

    document.title = 'Add Categories';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const [imageURL, setImageURL] = useState("");

    const handleImageUpload = (event) => {
        const imageData = new FormData();
        imageData.set('key', '6a505607e7aa21f071b1c0ec3e817fdf');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                setImageURL(res.data.data.display_url);
                console.log(res.data.data.display_url);
            })
            .catch(error => console.log(error));

        const currentTime = new Date().getTime(); //This 4s delay is used so that the image gets uploaded on ImgBB and generates an URL which will be sent to MongoDB database after pressing 'Add Service'.
        while (currentTime + 4000 >= new Date().getTime());
    }

    const onSubmit = data => {
        const categoryData = {
            category: data.categoryName,
            image: imageURL
        };

        console.log(categoryData);

        const url = `https://calm-hamlet-62917.herokuapp.com/addCategories`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(categoryData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                sweetAlert('Category added successfully!', 'success', 'Please go to homepage to see the update');
            });
    }

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Add Categories
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField sx={{ mb: 2 }}
                                type="text"
                                label="Category name"
                                size="small"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("categoryName", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.categoryName}
                                helperText={errors?.categoryName ? errors.categoryName.message : null}
                            />
                            <TextField sx={{ mb: 2 }}
                                type="file"
                                label="Add category image"
                                size="small"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("picture", {
                                    required: "This field is required",
                                    onChange: (event) => { handleImageUpload(event) }
                                })}
                                error={!!errors.picture}
                                helperText={errors?.picture ? errors.picture.message : null}
                            />
                            <Button variant='contained' color='success' type='submit'>Submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddCategories;