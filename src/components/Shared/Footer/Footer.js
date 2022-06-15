import { useEffect, useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Box, Container } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => {    

    const [logo, setLogo] = useState([]);

    useEffect(() => {
        fetch(`https://calm-hamlet-62917.herokuapp.com/logo`)
            .then(res => res.json())
            .then(data => setLogo(data[0]));
    }, []);

    return (
        <Box component='section' py={4} id='footer'>
            <Container>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ maxWidth: '7rem' }} src={logo?.imageUrl} alt="sea basket logo" />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <FacebookIcon sx={{ color: '#4867AA', fontSize: '2.1875rem', margin: '15px' }} />
                    <WhatsAppIcon sx={{ color: '#24C761', fontSize: '2.1875rem', margin: '15px' }} />
                    <YouTubeIcon sx={{ color: '#F20000', fontSize: '2.1875rem', margin: '15px' }} />
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <NavLink to='' className='footer-text'>ABOUT</NavLink>
                    <NavLink to='' className='footer-text'>MENU</NavLink>
                    <NavLink to='' className='footer-text'>CONTACT</NavLink>
                </Box>
                <Box sx={{ textAlign: 'center' }}>{(new Date()).getFullYear()} Copyright © Sea Basket. All Rights Reserved</Box>
            </Container>
        </Box>
    );
};

export default Footer;