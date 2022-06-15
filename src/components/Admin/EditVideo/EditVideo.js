import { Grid, Box, Button, Typography, TextField, Container } from '@mui/material';
import { useForm } from "react-hook-form";
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';

const EditVideo = () => {
    document.title = 'Edit Intro Video';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleVideoUrl = (videoUrl) => {

        const videoId = '62a95f9ada1617a14ddbad2b';
        const updateVideo = { videoId, videoUrl };

        const url = `https://calm-hamlet-62917.herokuapp.com/editVideo/${videoId}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updateVideo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                sweetAlert('Video updated successfully!', 'success', 'Please go to homepage to see the update');
            });
    }

    const onSubmit = data => handleVideoUrl(data.videoUrl);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Edit intro video
                        </Typography>
                        <Typography mb={2} variant="body1" gutterBottom component="div">
                            Please enter your video url (preferably Youtube or else won't work)
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField sx={{ mb: 2 }}
                                type="text"
                                label="Video url"
                                size="small"
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("videoUrl", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.videoUrl}
                                helperText={errors?.videoUrl ? errors.videoUrl.message : null}
                            />
                            <Button variant='contained' color='success' type='submit'>Submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditVideo;