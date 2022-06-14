import React from 'react';
import './Sidebar.css';
import { NavLink } from "react-router-dom";
import { Box } from '@mui/material';

const Sidebar = () => {
    return (
        <>
            <Box className='sidebar' py={4} px={2}>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/editBanner">Edit Banner</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/addReview">Add Review</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/allOrderList">All Order List</NavLink>
                </Box>
                <Box py={1}>
                    <NavLink className='sidebar-font' to="/addService">Add Service</NavLink>
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