import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import {
    Box,
    Button,
    CircularProgress,
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    Link,
    OutlinedInput,
    Stack,
    Typography,
} from '@mui/material';

// third party
import { Formik } from 'formik';
import * as Yup from 'yup';

// project import
import { AnimateButton } from '../../../components';
import { strengthColor, strengthIndicator } from '../../../utils/passwordStrength';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { authActions, authSelectIsRegistered, authSelectIsRegistering } from '../auth.slice';

// assets
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

// Model
import { UserSignup } from '../../../models';

// types
interface PasswordStrength {
    label: string;
    color: string;
}

// ============================|| FIREBASE - REGISTER ||============================ //

const RegisterForm = () => {
    const dispatch = useAppDispatch();
    const isRegistered = useAppSelector(authSelectIsRegistered);

    const [level, setLevel] = useState<PasswordStrength | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [disasble, setDisasble] = useState(false);

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event: any) => {
        event.preventDefault();
    };

    const changePassword = (value: string) => {
        const temp = strengthIndicator(value);
        const passwordStrength = strengthColor(temp);
        setLevel(passwordStrength);
    };

    useEffect(() => {
        changePassword('');
    }, []);

    useEffect(() => {
        if (isRegistered) setDisasble((prev) => !prev);
    }, [isRegistered]);

    return (
        <>
            {isRegistered ? (
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="body2">
                            Please check your email and click on the link to confirm your
                            account.&nbsp; &nbsp;
                        </Typography>
                    </Grid>
                </Grid>
            ) : (
                <Formik
                    initialValues={{
                        firstname: '',
                        lastname: '',
                        email: '',
                        password: '',
                        submit: null,
                    }}
                    validationSchema={Yup.object().shape({
                        firstname: Yup.string().max(255).required('First Name is required'),
                        lastname: Yup.string().max(255).required('Last Name is required'),
                        email: Yup.string()
                            .email('Must be a valid email')
                            .max(255)
                            .required('Email is required'),
                        password: Yup.string().max(255).required('Password is required'),
                    })}
                    onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                            setStatus({ success: false });
                            setSubmitting(false);
                            const user: UserSignup = {
                                name: `${values.firstname} ${values.lastname}`,
                                email: values.email,
                                password: values.password,
                            };
                            setDisasble((prev) => !prev);
                            dispatch(authActions.register(user));
                        } catch (err: any) {
                            console.error(err);
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
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
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="firstname-signup">
                                            First Name*
                                        </InputLabel>
                                        <OutlinedInput
                                            id="firstname-login"
                                            type="firstname"
                                            value={values.firstname}
                                            name="firstname"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="John"
                                            fullWidth
                                            error={Boolean(touched.firstname && errors.firstname)}
                                        />
                                        {touched.firstname && errors.firstname && (
                                            <FormHelperText error id="helper-text-firstname-signup">
                                                {errors.firstname}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="lastname-signup">
                                            Last Name*
                                        </InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.lastname && errors.lastname)}
                                            id="lastname-signup"
                                            type="lastname"
                                            value={values.lastname}
                                            name="lastname"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="Doe"
                                            inputProps={{}}
                                        />
                                        {touched.lastname && errors.lastname && (
                                            <FormHelperText error id="helper-text-lastname-signup">
                                                {errors.lastname}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="email-signup">
                                            Email Address*
                                        </InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.email && errors.email)}
                                            id="email-login"
                                            type="email"
                                            value={values.email}
                                            name="email"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            placeholder="example@.com"
                                            inputProps={{}}
                                        />
                                        {touched.email && errors.email && (
                                            <FormHelperText error id="helper-text-email-signup">
                                                {errors.email}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                </Grid>
                                <Grid item xs={12}>
                                    <Stack spacing={1}>
                                        <InputLabel htmlFor="password-signup">Password</InputLabel>
                                        <OutlinedInput
                                            fullWidth
                                            error={Boolean(touched.password && errors.password)}
                                            id="password-signup"
                                            type={showPassword ? 'text' : 'password'}
                                            value={values.password}
                                            name="password"
                                            onBlur={handleBlur}
                                            onChange={(e) => {
                                                handleChange(e);
                                                changePassword(e.target.value);
                                            }}
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
                                            placeholder="******"
                                            inputProps={{}}
                                        />
                                        {touched.password && errors.password && (
                                            <FormHelperText error id="helper-text-password-signup">
                                                {errors.password}
                                            </FormHelperText>
                                        )}
                                    </Stack>
                                    <FormControl fullWidth sx={{ mt: 2 }}>
                                        <Grid container spacing={2} alignItems="center">
                                            <Grid item>
                                                <Box
                                                    sx={{
                                                        bgcolor: level?.color,
                                                        width: 85,
                                                        height: 8,
                                                        borderRadius: '7px',
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="subtitle1" fontSize="0.75rem">
                                                    {level?.label}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">
                                        By Signing up, you agree to our &nbsp;
                                        <Link variant="subtitle2" component={RouterLink} to="#">
                                            Terms of Service
                                        </Link>
                                        &nbsp; and &nbsp;
                                        <Link variant="subtitle2" component={RouterLink} to="#">
                                            Privacy Policy
                                        </Link>
                                    </Typography>
                                </Grid>
                                {errors.submit && (
                                    <Grid item xs={12}>
                                        <FormHelperText error>{errors.submit}</FormHelperText>
                                    </Grid>
                                )}
                                <Grid item xs={12}>
                                    <AnimateButton>
                                        <Button
                                            disableElevation
                                            disabled={disasble}
                                            fullWidth
                                            size="large"
                                            type="submit"
                                            variant="contained"
                                            color="primary"
                                        >
                                            {disasble ? (
                                                <CircularProgress size={20} color="secondary" />
                                            ) : (
                                                ''
                                            )}
                                            &nbsp;Create Account
                                        </Button>
                                    </AnimateButton>
                                </Grid>
                            </Grid>
                        </form>
                    )}
                </Formik>
            )}
        </>
    );
};

export default RegisterForm;
