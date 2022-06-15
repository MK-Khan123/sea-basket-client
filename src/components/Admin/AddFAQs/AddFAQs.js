import { Grid, Box, Button, Typography, TextField, Container } from '@mui/material';
import { useForm } from "react-hook-form";
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';

const AddFAQs = () => {
    document.title = 'Add FAQs';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        const categoryData = {
            question: data.question,
            answer: data.answer
        };

        console.log(categoryData);

        const url = `https://calm-hamlet-62917.herokuapp.com/addFaqs`;
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
                            Add FAQs
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField sx={{ mb: 2 }}
                                type="text"
                                label="Question"
                                size="small"
                                multiline
                                minRows={5}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("question", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.question}
                                helperText={errors?.question ? errors.question.message : null}
                            />
                            <TextField sx={{ mb: 2 }}
                                type="text"
                                label="Answer"
                                size="small"
                                multiline
                                minRows={5}
                                fullWidth
                                InputLabelProps={{
                                    shrink: true
                                }}
                                {...register("answer", {
                                    required: "This field is required",
                                    onBlur: (e) => { }
                                })}
                                error={!!errors.answer}
                                helperText={errors?.answer ? errors.answer.message : null}
                            />
                            <Button variant='contained' color='success' type='submit'>Submit</Button>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AddFAQs;