import React from 'react';
import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <>
            <Box className='sidebar' py={4} px={2}>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/edit-banner">Edit Banner</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/edit-how-it-works">Edit How It Works</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/edit-intro-video">Edit Intro Video</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/edit-logo">Edit Logo</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/makeAdmin">Make Admin</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/manageServices">Manage Services</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/">Home</NavLink>
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;