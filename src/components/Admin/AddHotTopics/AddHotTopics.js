import { Grid, Box, Button, Typography, TextField, Container } from '@mui/material';
import { useForm } from "react-hook-form";
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';

const AddHotTopics = () => {
    document.title = 'Add Hot Topics';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const hotTopics = {
            article_title: data.article_title,
            article_description: data.article_description
        };

        console.log(hotTopics);

        const url = `https://calm-hamlet-62917.herokuapp.com/addHotTopics`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(hotTopics)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                sweetAlert('Topics added successfully!', 'success', 'Please go to homepage to see the update');
            });
    }

    return (
        <Container id="add-hot-topics">
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Add Hot Topics
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField sx={{ mb: 2 }}
                                type="text"
                                label="Title"
                                size="small"
                                multiline
                                minRows={5}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("article_title", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.article_title}
                                helperText={errors?.article_title ? errors.article_title.message : null}
                            />
                            <TextField sx={{ mb: 2 }}
                                type="text"
                                label="Description"
                                size="small"
                                multiline
                                minRows={5}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("article_description", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.article_description}
                                helperText={errors?.article_description ? errors.article_description.message : null}
                            />
                            <Button variant='contained' color='success' type='submit'>Submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddHotTopics;