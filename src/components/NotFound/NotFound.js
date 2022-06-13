import { Box, Button, Container } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const NotFound = () => {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '80vh',
                    margin: 'auto'
                }}
            >
                <img className='image-responsive' src="https://res.cloudinary.com/dn9k2jkdd/image/upload/v1655134978/error404/head-blown-robot_avc8v2.jpg" alt="" />
                <NavLink to='/home' style={{ textDecoration: 'none' }}>
                    <Button variant="contained" size="large" color='secondary'>Go Back To Home</Button>
                </NavLink>
            </Box>
        </Container>
    );
};

export default NotFound;