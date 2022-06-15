import { Grid, Box, Button, Typography, TextField, Container } from '@mui/material';
import { useForm } from "react-hook-form";
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';

const EditHowItWorks = () => {
    document.title = 'Edit How It Works';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleContent = (content) => {

        const contentId = '62a96948da1617a14ded39a3';
        const updateContent = { contentId, content };

        const url = `https://calm-hamlet-62917.herokuapp.com/editContent/${contentId}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updateContent)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                sweetAlert('Content updated successfully!', 'success', 'Please go to homepage to see the update');
            });
    }

    const onSubmit = data => handleContent(data.content);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Edit your content
                        </Typography>
                        <Typography mb={2} variant="body1" gutterBottom component="div">
                            Please enter your content
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField sx={{ mb: 2 }}
                                type="text"
                                label="Type your content"
                                size="small"
                                fullWidth
                                multiline
                                minRows={10}
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("content", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.content}
                                helperText={errors?.content ? errors.content.message : null}
                            />
                            <Button variant='contained' color='success' type='submit'>Submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default EditHowItWorks;