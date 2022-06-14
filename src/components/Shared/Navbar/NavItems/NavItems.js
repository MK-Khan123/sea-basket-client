import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';

const NavItems = ({ handleCloseNavMenu }) => {

    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1, justifyContent: 'end', alignItems: 'center', display: { xs: 'none', md: 'flex' } }}>
            <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to=''>
                    CATEGORY
                </NavLink>
            </Button>
            <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to=''>
                    FAQS
                </NavLink>
            </Button>
            <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
            >
                <NavLink style={{ textDecoration: 'none', color: 'white' }} to=''>
                    CART
                </NavLink>
            </Button>

            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/edit-banner'>
                <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    ADMIN
                </Button>
            </NavLink>
            {
                user?.email ? (
                    <Button
                        onClick={logout}
                        sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                        LOGOUT
                    </Button>
                ) : (
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            LOGIN
                        </Button>
                    </NavLink>
                )
            }
        </Box>
    );
};

export default NavItems;