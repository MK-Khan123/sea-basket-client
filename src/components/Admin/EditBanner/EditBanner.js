import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Box, Button, Typography, TextField, Container } from '@mui/material';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const EditBanner = () => {

    document.title = 'Edit Banner';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleImageUrl = (imageUrl) => {

        const bannerId = '62a951fada1617a14dc327a4';
        const updateBanner = { bannerId, imageUrl };

        const url = `https://calm-hamlet-62917.herokuapp.com/editBanner/${bannerId}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updateBanner)
        })
            .then(res => res.json())
            .then(result => console.log(result));
        alert("Status updated successfully!");
    }

    const onSubmit = data => {
        handleImageUrl(data.imageUrl);
        console.log(data)
    };

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Edit your banner image
                        </Typography>
                        <Typography mb={2} variant="body1" gutterBottom component="div">
                            Please enter your image url
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField sx={{ mb: 2 }}
                                id="outlined-password-input"
                                type="text"
                                label="Image url"
                                size="small"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("imageUrl", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.imageUrl}
                                helperText={errors?.imageUrl ? errors.imageUrl.message : null}
                            />
                            <Button variant='contained' color='success' type='submit'>Submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditBanner;