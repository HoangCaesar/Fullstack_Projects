import { TextField } from '@mui/material';
import React, { InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
}
// { name, control, label, ...inputProps }: InputFieldProps
const InputField = () => {
    const name = "H";
    const control: any = "O"
    const {
        field: { value, onChange, onBlur, ref },
        fieldState: { invalid, error },
    } = useController({
        name,
        control,
    });

    return (
        <TextField
            fullWidth
            size="small"
            margin="normal"
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            // label={label}
            variant="outlined"
            inputRef={ref}
            error={invalid}
            helperText={error?.message}
            // inputProps={inputProps}
        />
    );
};

export { InputField };
