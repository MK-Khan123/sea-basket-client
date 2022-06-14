import React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from "react-router-dom";
import useAuth from '../../../../hooks/useAuth';

const NavItemsSidebar = ({ anchorElNav, handleCloseNavMenu, handleOpenNavMenu }) => {

    const { user, logout } = useAuth();

    return (
        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
            >
                <MenuIcon />
            </IconButton>
            <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
            >

                <NavLink className='nav-link-custom-style' to=''>
                    <MenuItem onClick={handleCloseNavMenu}>
                        CATEGORY
                    </MenuItem>
                </NavLink>
                <NavLink className='nav-link-custom-style' to=''>
                    <MenuItem onClick={handleCloseNavMenu}>
                        FAQS
                    </MenuItem>
                </NavLink>
                <NavLink className='nav-link-custom-style' to=''>
                    <MenuItem onClick={handleCloseNavMenu}>
                        CART
                    </MenuItem>
                </NavLink>
                <NavLink className='nav-link-custom-style' to='/edit-banner'>
                    <MenuItem onClick={handleCloseNavMenu}>
                        ADMIN
                    </MenuItem>
                </NavLink>
                {
                    user?.email ? (
                        <MenuItem
                            onClick={() => {
                                logout();
                                handleCloseNavMenu();
                            }}
                        >
                            LOGOUT
                        </MenuItem>
                    ) : (
                        <NavLink className='nav-link-custom-style' to='/login'>
                            <MenuItem onClick={handleCloseNavMenu}>
                                LOGIN
                            </MenuItem>
                        </NavLink>
                    )
                }
            </Menu>
        </Box>
    );
};

export default NavItemsSidebar;