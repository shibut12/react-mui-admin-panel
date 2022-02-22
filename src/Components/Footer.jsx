import * as React from 'react';
import PropTypes from 'prop-types';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

const Copyright = () => (
      <Typography variant="body2" color="text.secondary">
        {'Copyright © '}
        <Link color="inherit" href="https://example.com/">
          example.com
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );

const Footer = ({ ...props }) => {
    return(
            <Box
                component="footer"
                sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                    ? theme.palette.grey[200]
                    : theme.palette.grey[800],
                }}
            >
                <Container maxWidth="sm">
                    <Typography variant="body1">
                        My sticky footer can be found here.
                    </Typography>
                    <Copyright />
                </Container>
            </Box>
    )
}

Footer.propTypes = {

};

export default Footer;