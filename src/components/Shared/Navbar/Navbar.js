import { useState } from 'react';
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

    const logo = 'https://res.cloudinary.com/dn9k2jkdd/image/upload/v1655146702/proffus-task/fish_wsrjue.png';

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
                                <Box mr={2}><img style={{ maxWidth: '60px', maxHeight: '100px' }} src={logo} alt="" /></Box>
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
                            <img style={{ maxWidth: '60px', maxHeight: '100px' }} src={logo} alt="" />
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
