import { Grid, Box, Button, Typography, TextField, Container } from '@mui/material';
import { useForm } from "react-hook-form";
import sweetAlert from '../../Shared/SweetAlert/SweetAlert';
import Sidebar from '../Sidebar/Sidebar';

const EditLogo = () => {
    document.title = 'Edit Logo';

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLogoUrl = (imageUrl) => {

        const logoId = '62a96c2fda1617a14df25779';
        const updateLogo = { logoId, imageUrl };

        const url = `https://calm-hamlet-62917.herokuapp.com/editLogo/${logoId}`;
        fetch(url, {
            method: 'PATCH',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(updateLogo)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                sweetAlert('Logo updated successfully!', 'success', 'Please go to homepage to see the update');
            });
    }

    const onSubmit = data => handleLogoUrl(data.imageUrl);

    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
                <Grid item xs={10} mt={10}>
                    <Box>
                        <Typography variant="h4" gutterBottom component="div">
                            Edit logo
                        </Typography>
                        <Typography mb={2} variant="body1" gutterBottom component="div">
                            Please enter your image url
                        </Typography>

                        <form onSubmit={handleSubmit(onSubmit)}>
                            <TextField sx={{ mb: 2 }}
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

export default EditLogo;