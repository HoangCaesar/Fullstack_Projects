import React from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { UserSiginIn } from '../../models';

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

const SigninForm = () => {
    const {} = useForm<UserSiginIn>({
        resolver: yupResolver(schema),
    });

    return <div></div>;
};

export default SigninForm;
