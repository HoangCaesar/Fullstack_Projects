import { TextField } from '@mui/material';
import { memo, InputHTMLAttributes } from 'react';
import { Control, useController } from 'react-hook-form';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    control: Control<any>;
    label?: string;
    type: string;
}

const InputField = ({ name, control, label, type, ...inputProps }: InputFieldProps) => {
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
            margin="dense"
            value={value ? value : ""}
            onChange={onChange}
            onBlur={onBlur}
            label={label}
            type={type}
            variant="outlined"
            inputRef={ref}
            error={invalid}
            helperText={error?.message}
            inputProps={inputProps}
        />
    );
};

export default memo(InputField);
