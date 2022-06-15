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
                    <NavLink className='sidebar-font' to="/add-categories">Add Categories</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/add-faqs">Add FAQs</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/add-reading-materials">Add Reading Materials</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/add-hot-topics">Add Hot Topics</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/delete-categories">Delete Categories</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/delete-faqs">Delete FAQs</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/delete-reading-materials">Delete Reading Materials</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/delete-hot-topics">Delete Hot Topics</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/">Home</NavLink>
                </Box>
            </Box>
        </>
    );
};

export default Sidebar;