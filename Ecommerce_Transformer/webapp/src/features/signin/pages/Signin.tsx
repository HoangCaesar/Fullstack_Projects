import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import TextField from '@mui/material/TextField';
import Grid from '../../../components/grid-responsive/Grid';
import { Header } from '../../../components/layouts';
import Button from '@mui/material/Button';
import './Signin.scss';

const Signin = () => {
    return (
        <div className="signin">
            <Header nav={false} />
            <div className="signin__body">
                <Grid>
                    <div className="col l-o-2 l-8 m-12 c-12">
                        <div className="login-box row no-gutters">
                            <div className="left col l-6 m-0 c-0">
                                <h2 className="heading">
                                    Join thousands of people loving transformer
                                </h2>
                                <div className="desc">
                                    <h4 className="main">
                                        <DoneOutlinedIcon color="primary" />
                                        <span>Shopping Anywhere</span>
                                    </h4>
                                    <p className="sub">Easy buying and paying with our systems.</p>
                                </div>
                                <div className="desc">
                                    <h4 className="main">
                                        <DoneOutlinedIcon color="primary" />
                                        <span>Shopping Anywhere</span>
                                    </h4>
                                    <p className="sub">Easy buying and paying with our systems.</p>
                                </div>
                                <div className="desc">
                                    <h4 className="main">
                                        <DoneOutlinedIcon color="primary" />
                                        <span>Shopping Anywhere</span>
                                    </h4>
                                    <p className="sub">Easy buying and paying with our systems.</p>
                                </div>
                            </div>
                            <div className="right col l-6 m-12 c-12">
                                <div className="heading">
                                    <h2>Sign In to Prime</h2>
                                    <span>Get a free account, no required credit card</span>
                                </div>

                                <TextField label="Email" color="primary" type="email" />
                                <TextField label="Password" color="primary" type="password" />
                                <Button variant="contained" sx={{ color: 'black', width: '80%' }}>
                                    Sign In
                                </Button>
                                <p className="sub">
                                    By continuing, you agree to CodeSandbox{' '}
                                    <span>Terms of Service</span>,<span> Privacy Policy</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default Signin;
