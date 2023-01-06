import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { useCallback, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import AuthForm from '../../../components/form-fields/AuthForm';
import Grid from '../../../components/grid-responsive/Grid';
import { Header } from '../../../components/layouts';
import { UserSignIn, UserSignUp } from '../../../models';
import { authActions, authSelectIsLogging, authSelectIsRegistered } from '../authSlice';
import './Auth.scss';

const Auth = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const type = location.pathname.split('/')[2];

    const dispatch = useAppDispatch();
    const isLogging = useAppSelector(authSelectIsLogging);
    const isRegistered = useAppSelector(authSelectIsRegistered);

    const handleSigninForm = useCallback((formValues: UserSignIn) => {
        dispatch(
            authActions.login({
                username: formValues.username,
                password: formValues.password,
            })
        );
    }, []);

    const handleSignupForm = useCallback((formValues: UserSignUp) => {
        dispatch(
            authActions.register({
                email: formValues.email,
                username: formValues.username,
                password: formValues.password,
            })
        );
    }, []);

    useEffect(() => {
        let idTimeOut = 1;
        if (isRegistered) {
            idTimeOut = window.setTimeout(() => navigate('/notify/registered'), 1500);
        }
        return () => {
            window.clearTimeout(idTimeOut);
        };
    }, [isRegistered]);

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

                                <AuthForm
                                    type={type}
                                    onSubmitSignin={handleSigninForm}
                                    onSubmitSignup={handleSignupForm}
                                />
                                {type === 'login' ? (
                                    <p className="sub">
                                        If you don't have an account yet, register{' '}
                                        <Link to="/auth/register">
                                            <span>here</span>
                                        </Link>
                                    </p>
                                ) : (
                                    <p className="sub">
                                        <br/>
                                        If you have an account already, click{' '}
                                        <Link to="/auth/login">
                                            <span>here</span>
                                        </Link>{' '}
                                        to sign in
                                        <br />
                                        <br/>
                                        By continuing, you agree to CodeSandbox{' '}
                                        <Link to="/legal/terms">
                                            <span>Terms of Service</span>
                                        </Link>
                                        ,{' '}
                                        <Link to="/legal/policy">
                                            <span> Privacy Policy</span>
                                        </Link>
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
