// material-ui
import { useMediaQuery, Container, Link, Typography, Stack, useTheme } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
    const theme = useTheme();
    const matchDownSM = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="xl">
            <Stack
                direction={matchDownSM ? 'column' : 'row'}
                justifyContent={matchDownSM ? 'center' : 'space-between'}
                spacing={2}
                textAlign={matchDownSM ? 'center' : 'inherit'}
            >
                <Typography variant="subtitle2" color="secondary" component="span">
                    Testing&nbsp;
                    <Typography
                        component={Link}
                        variant="subtitle2"
                        href="https://www.hsl.fi"
                        target="_blank"
                        underline="hover"
                    >
                        Helsinki City Bike
                    </Typography>
                </Typography>

                <Stack
                    direction={matchDownSM ? 'column' : 'row'}
                    spacing={matchDownSM ? 1 : 3}
                    textAlign={matchDownSM ? 'center' : 'inherit'}
                >
                    <Typography
                        variant="subtitle2"
                        color="secondary"
                        component={Link}
                        href="https://www.linkedin.com/in/vuhoangnguyen58"
                        target="_blank"
                        underline="hover"
                    >
                        LinkedIn
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="secondary"
                        component={Link}
                        href="https://github.com/HoangCaesar"
                        target="_blank"
                        underline="hover"
                    >
                        Github
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        color="secondary"
                        component={Link}
                        href="https://portfolio-f2056.web.app"
                        target="_blank"
                        underline="hover"
                    >
                        Contact Team
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    );
};

export default AuthFooter;
