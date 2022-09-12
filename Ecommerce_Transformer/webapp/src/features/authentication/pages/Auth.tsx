import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useCallback } from 'react';
import AuthForm from '../../../components/form-fields/AuthForm';
import Grid from '../../../components/grid-responsive/Grid';
import { Header } from '../../../components/layouts';
import { UserSiginIn } from '../../../models';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { authActions, authSelecIsLogging } from '../authSlice'
import './Auth.scss';

const Auth = () => {
    const location = useLocation();
    const type = location.pathname.split('/')[2];

    const dispatch = useAppDispatch();
    const isLogging = useAppSelector(authSelecIsLogging);

    const handleFormSubmit = useCallback((formValues: UserSiginIn) => {
        dispatch(authActions.login({
            username: formValues.username,
            password: formValues.password
        }))
    }, []);

    return (
        <div className="auth">
            <Header nav={false} />
            <div className="auth__body">
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
                                {type === 'login' ? (
                                    <div className="heading">
                                        <h2>Sign In to Prime</h2>
                                        <span>Welcome back!</span>
                                    </div>
                                ) : (
                                    <div className="heading">
                                        <h2>Register to Prime</h2>
                                        <span>Get a free account, no required credit card</span>
                                    </div>
                                )}

                                <AuthForm type={type} onSubmit={handleFormSubmit} />
                                {type === 'login' ? (
                                    <p className="sub">
                                        If you don't have an accoung yet, register <span>here</span>
                                    </p>
                                ) : (
                                    <p className="sub">
                                        By continuing, you agree to CodeSandbox{' '}
                                        <span>Terms of Service</span>, <span> Privacy Policy</span>
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </Grid>
            </div>
        </div>
    );
};

export default Auth;
