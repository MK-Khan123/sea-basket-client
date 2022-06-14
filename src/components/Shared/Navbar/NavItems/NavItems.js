import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { NavLink } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';

const NavItems = ({ handleCloseNavMenu }) => {

    const { user, logout } = useAuth();
    console.log(user);

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
            {
                user?.email ? (
                        <Button
                            onClick={logout}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            LOGOUT
                        </Button>
                    ) : (
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                                LOGIN
                            </NavLink>
                        </Button>
                    )
            }
        </Box>
    );
};

export default NavItems;