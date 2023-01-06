import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './Notify.scss';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Notify = () => {
    const location = useLocation();
    const actionName = location.pathname.split('/')[2];

    return (
        <div className="notify">
            <Box sx={style}>
                <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                    sx={{ display: 'flex', alignItems: 'center', color: '#0d47a1' }}
                >
                    {actionName} successfully!
                    <CheckCircleIcon sx={{ marginLeft: '10px', color: '#0d47a1' }} />
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    Please, verify your email and sign in.
                </Typography>
                <Box mt={1} sx={{ display: 'flex', alignItems: 'center'}}>
                    <Link to="/">
                        <Button>Homepage</Button>
                    </Link>
                    <Button>
                        <a className="btn" href="https://mail.google.com" target="blank">
                            Verify
                        </a>
                    </Button>
                </Box>
            </Box>
        </div>
    );
};

export default Notify;
