import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Badge } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './Footer.scss';

const theme = createTheme({
    palette: {
        primary: {
            main: '#eaff96',
        },
        secondary: {
            main: '#999999',
        },
    },
});

const Footer = () => {
    return (
        <div className="footer">
            <div className="grid wide">
                <div className="footer__container row">
                    <ul className="footer__container--top row">
                        <li className="item col l-2 m-4 c-12">
                            <span className="header">Product</span>
                            <ul className="body">
                                <li>
                                    <a href="#">Autobot</a>
                                </li>
                                <li>
                                    <a href="#">Decepticon</a>
                                </li>
                                <li>
                                    <a href="#">Prime</a>
                                </li>
                                <li>
                                    <a href="#">Feedback</a>
                                </li>
                                <li>
                                    <a href="#">What's new</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item col l-2 m-4 c-12">
                            <span className="header">Explore</span>
                            <ul className="body">
                                <li>
                                    <a href="#">Feature</a>
                                </li>
                                <li>
                                    <a href="#">Search</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item col l-2 m-4 c-12">
                            <span className="header">For</span>
                            <ul className="body">
                                <li>
                                    <a href="#">Author</a>
                                </li>
                                <li>
                                    <a href="#">Film</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item col l-2 m-4 c-12">
                            <span className="header">About</span>
                            <ul className="body">
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <ThemeProvider theme={theme}>
                                    <Badge
                                        color="primary"
                                        badgeContent={1}
                                        sx={{
                                            fontSize: '16px',
                                            color: '#999999',
                                            marginTop: '10px',
                                        }}
                                    >
                                        Cart
                                    </Badge>
                                </ThemeProvider>
                                <li>
                                    <a href="#">Terms of use</a>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                            </ul>
                        </li>
                        <li className="item col l-2 m-4 c-12">
                            <span className="header">Support</span>
                            <ul className="body">
                                <li>
                                    <a href="#">Documentation</a>
                                </li>
                                <li>
                                    <a href="#">Contact Support</a>
                                </li>
                                <li>
                                    <a href="#">Status</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="footer__container--bottom">
                        <div className="item">
                            <div className="social">
                                <a href="#">
                                    <FacebookIcon color="inherit" fontSize="large" />
                                </a>
                                <a href="#">
                                    <InstagramIcon color="inherit" fontSize="large" />
                                </a>
                                <a href="#">
                                    <LinkedInIcon color="inherit" fontSize="large" />
                                </a>
                                <a href="#">
                                    <TwitterIcon color="inherit" fontSize="large" />
                                </a>
                            </div>
                        </div>
                        <div className="item">
                            <span className="coppyright">Copyright © 2022 Caesar BV.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
