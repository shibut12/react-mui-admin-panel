import * as React from 'react';
import PropTypes from 'prop-types';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const Footer = ({ ...props }) => {
    return(
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
            Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    )
}

Footer.propTypes = {

};

export default Footer;