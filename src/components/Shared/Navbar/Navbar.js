import { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink } from "react-router-dom";
import NavItemsSidebar from './NavItemsSidebar/NavItemsSidebar';
import NavItems from './NavItems/NavItems';
import './Navbar.css';

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch(`https://calm-hamlet-62917.herokuapp.com/logo`)
            .then(res => res.json())
            .then(data => setLogo(data[0]));
    }, []);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <NavLink to='/home' style={{ textDecoration: 'none', color: 'white' }}>
                            <Box sx={{ display: 'flex', jsutifyContent: 'center', alignItems: 'center' }}>
                                <Box mr={2}><img style={{ maxWidth: '60px', maxHeight: '100px' }} src={logo?.imageUrl} alt="logo" /></Box>
                                <Box>SEA BASKET</Box>
                            </Box>
                        </NavLink>
                    </Typography>

                    <NavItemsSidebar
                        anchorElNav={anchorElNav}
                        handleOpenNavMenu={handleOpenNavMenu}
                        handleCloseNavMenu={handleCloseNavMenu}
                    />

                    <Typography
                        noWrap
                        component="div"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1
                        }}
                    >
                        <NavLink to='/home'>
                            <img style={{ maxWidth: '60px', maxHeight: '100px' }} src={logo?.imageUrl} alt="logo" />
                        </NavLink>
                    </Typography>

                    <NavItems
                        handleCloseNavMenu={handleCloseNavMenu}
                    />
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;
