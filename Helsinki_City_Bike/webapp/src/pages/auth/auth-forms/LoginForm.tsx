import { MouseEvent, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// material-ui
import {
    Box,
    Button,
    CircularProgress,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
} from '@mui/material';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project import
import { AnimateButton } from '../../../components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
    authActions,
    authSelectIsLogging,
    authSelectIsLoggedIn,
    authSelectIsLoginFailed,
} from '../auth.slice';

// Model
import { UserLogin } from '../../../models';

// API

// assets
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

// ============================|| FIREBASE - LOGIN ||============================ //

const LoginForm = () => {
    const dispatch = useAppDispatch();
    const isLogging = useAppSelector(authSelectIsLogging);
    const isLoggedin = useAppSelector(authSelectIsLoggedIn);
    const isLoginFailed = useAppSelector(authSelectIsLoginFailed);
    const navigate = useNavigate();

    // const [checked, setChecked] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        if (isLoggedin) navigate('/');
    }, [isLoggedin]);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: MouseEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <Formik
                initialValues={{
                    email: 'example@gmail.com',
                    password: 'example',
                    submit: null,
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email().max(255).required('email is required'),
                    password: Yup.string().max(255).required('Password is required'),
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                        const user: UserLogin = {
                            email: values.email,
                            password: values.password,
                        };
                        dispatch(authActions.login(user));
                    } catch (err) {
                        console.log(err);
                        setStatus({ success: false });
                        setErrors({ submit: 'Wrong email or password!' });
                        setSubmitting(false);
                    }
                }}
            >
                {({
                    errors,
                    handleBlur,
                    handleChange,
                    handleSubmit,
                    isSubmitting,
                    touched,
                    values,
                }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email">Email</InputLabel>
                                    <OutlinedInput
                                        id="email"
                                        type="text"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText
                                            error
                                            id="standard-weight-helper-text-email-login"
                                        >
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-login">Password</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="-password-login"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? (
                                                        <EyeOutlined />
                                                    ) : (
                                                        <EyeInvisibleOutlined />
                                                    )}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="Enter password"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText
                                            error
                                            id="standard-weight-helper-text-password-login"
                                        >
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                    {isLoginFailed ? (
                                        <FormHelperText error>
                                            Email or password is wrong, please try again
                                        </FormHelperText>
                                    ) : (
                                        <Box />
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: -1 }}>
                                <Stack
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    spacing={2}
                                >
                                    {/* <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) =>
                                                    setChecked(event.target.checked)
                                                }
                                                name="checked"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={
                                            <Typography variant="h6">Keep me sign in</Typography>
                                        }
                                    /> */}
                                    {errors.submit ? (
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    ) : (
                                        <Box />
                                    )}

                                    <Link
                                        variant="h6"
                                        href="mailto:vuhoang7398@gmail.com"
                                        color="text.primary"
                                    >
                                        Forgot Password?
                                    </Link>
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isLogging}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        {isLogging ? (
                                            <CircularProgress size={20} color="secondary" />
                                        ) : (
                                            ''
                                        )}
                                        &nbsp;Login
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default LoginForm;
