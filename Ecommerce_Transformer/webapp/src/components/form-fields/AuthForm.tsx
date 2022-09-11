import { yupResolver } from '@hookform/resolvers/yup';
import { Alert, Box, Button, CircularProgress } from '@mui/material';
import { useState, memo } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { UserSiginIn } from '../../models';
import InputField from './InputField';

interface StudentFormProps {
    type: string;
    onSubmit?: (formValues: UserSiginIn) => void;
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

const AuthForm = ({ type, onSubmit }: StudentFormProps) => {
    const [error, setError] = useState<string>('');

    const {
        control,
        formState: { isSubmitting },
        handleSubmit,
    } = useForm<UserSiginIn>({
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = async (formValues: UserSiginIn) => {
        try {
            setError('');
            await onSubmit?.(formValues);
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
                        disabled={isSubmitting}
                        sx={{ width: '100%' }}
                    >
                        {isSubmitting && <CircularProgress size={16} color="primary" />}
                        &nbsp; Sign In
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default memo(AuthForm);
