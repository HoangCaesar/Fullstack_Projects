import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import { useState, memo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { UserSignIn, UserSignUp } from '../../models';
import InputField from './InputField';

interface AuthFormProps {
    type: string;
    onSubmitSignin?: (formValues: UserSignIn) => void;
    onSubmitSignup?: (formValues: UserSignUp) => void;
}

const schema = yup
    .object({
        username: yup
            .string()
            .trim()
            .min(3, 'Your username has to have at least 3 characters')
            .max(255, 'Maximum length is 255 characters')
            .required('Please enter username'),

        password: yup
            .string()
            .trim()
            .min(8, 'Your password has to have at least 8 characters')
            .max(255, 'Maximum length is 255 characters')
            .required('Please enter password'),
    })
    .required();

const AuthForm = ({ type, onSubmitSignin, onSubmitSignup }: AuthFormProps) => {
    const [error, setError] = useState<string>('');

    const {
        control,
        formState: { isSubmitted },
        handleSubmit,
    } = useForm<UserSignIn>({
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = async (formValues: UserSignIn | UserSignUp) => {
        try {
            setError('');
            if (type === 'register') {
                await onSubmitSignup?.(formValues as UserSignUp);
            } else {
                await onSubmitSignin?.(formValues as UserSignIn);
            }
            
        } catch (err: any) {
            console.log('Failed to sign in', err);
            setError(err.message as string);
        }
    };

    return (
        <Box maxWidth={300}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                {type === 'register' && (
                    <InputField name="email" control={control} label="Email" type="email" />
                )}
                <InputField name="username" control={control} label="User name" type="text" />
                <InputField name="password" control={control} label="Password" type="password" />

                {error && <Alert severity="error">{error}</Alert>}

                <Box mt={3}>
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={isSubmitted}
                        sx={{ width: '100%' }}
                    >
                        {isSubmitted && <CircularProgress size={16} color="primary" />}
                        &nbsp; {type === 'register' ? 'Sign Up' : 'Sign In'}
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default memo(AuthForm);
