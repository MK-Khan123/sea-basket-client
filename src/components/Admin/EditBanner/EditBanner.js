import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Box, Button, Typography } from '@mui/material';
import Sidebar from '../Sidebar/Sidebar';

const EditBanner = () => {

    document.title = 'Edit Banner';

    const [imageSelected, setImageSelected] = useState();

    const uploadImage = () => {
        const imageData = new FormData();
        console.log(imageSelected);
        // imageData.set('key', '6a505607e7aa21f071b1c0ec3e817fdf');
        // imageData.append('image', event.target.files[0]);

        // axios.post('https://api.imgbb.com/1/upload', imageData)
        //     .then(res => setImageURL(res.data.data.display_url))
        //     .catch(error => console.log(error));

        const currentTime = new Date().getTime(); //This 4s delay is used so that the image gets uploaded on ImgBB and generates an URL which will be sent to MongoDB database after pressing 'Add Service'.
        while (currentTime + 4000 >= new Date().getTime());
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={3}>
                <Sidebar />
            </Grid>
            <Grid item xs={9} mt={10}>
                <Box>
                    <Typography variant="h4" gutterBottom component="div">
                        Edit your banner image
                    </Typography>
                    <input
                        type="file"
                        name=""
                        id=""
                        onChange={(event) => setImageSelected(event.target.files)}
                    />
                    <Button variant='contained' color='success' onClick={uploadImage}>Submit</Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default EditBanner;