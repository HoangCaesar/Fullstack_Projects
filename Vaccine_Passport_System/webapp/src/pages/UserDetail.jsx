import { LoadingButton } from '@mui/lab';
import {
    Autocomplete, Box, Button, Card,
    CardActions,
    CardContent,
    FormControl,
    Grid,
    Stack,
    TextField, Typography
} from '@mui/material';
import { useEffect, useState } from 'react';
import QRCode from 'react-qr-code';
import { useParams } from 'react-router-dom';
import userApi from '../api/userApi';
import addressList from '../assets/dvhcvn.json';
import { CustomDialog, PageHeader, UserVaccine } from '../components';

const UserDetail = () => {
    const { id } = useParams();
    const [user, setUser] = useState();

    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogType, setDialogType] = useState('');
    const [dialogText, setDialogText] = useState('');

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await userApi.getOne(id);
                setUser(res);
            } catch (err) {
                console.log(err);
            }
        };
        getUser();
    }, []);

    const onUpdateError = (msg) => {
        console.log('onUpdateError');
        setDialogType('error');
        setDialogText(msg || 'User updated fail!');
        setDialogOpen(true);
    };

    const onUpdateSuccess = () => {
        console.log('onUpdateSuccess');
        setDialogType('success');
        setDialogText('User updated successfully');
        setDialogOpen(true);
    };

    return (
        <>
            <PageHeader title="User detail" />
            <Grid container spacing={4}>
                <Grid item xs={8}>
                    <Stack spacing={4}>
                        {user && (
                            <UserInfo
                                user={user}
                                onUpdateError={onUpdateError}
                                onUpdateSuccess={onUpdateSuccess}
                            />
                        )}
                        {user && <UserVaccine user={user} />}
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Card elevation={0}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {user && (
                                    <QRCode id="qrcode" value={user._id} size={235} level="H" />
                                )}
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <CustomDialog
                open={dialogOpen}
                type={dialogType}
                showIcon
                content={
                    <Typography variant="subtitle1" textAlign="center">
                        {dialogText}
                    </Typography>
                }
                actions={
                    <Box width="100%" sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button variant="contained" onClick={() => setDialogOpen(false)}>
                            OK
                        </Button>
                    </Box>
                }
            />
        </>
    );
};

export default UserDetail;

const UserInfo = ({ user, onUpdateError, onUpdateSuccess }) => {
    const { id } = useParams();

    const [name, setName] = useState(user.fullName);
    const [nameErr, setNameErr] = useState(false);
    const [phone, setPhone] = useState(user.phoneNumber);
    const [phoneErr, setPhoneErr] = useState(false);
    const [address, setAddress] = useState(
        addressList.data.find((e) => e.name === user.address || undefined)
    );
    const [addressErr, setAddressErr] = useState(false);
    const [idCard, setIdCard] = useState(user.idNumber);
    const [idCardErr, setIdCardErr] = useState(false);

    const [onUpdate, setOnUpdate] = useState(false);

    const updateUser = async () => {
        console.log('update');
        if (onUpdate) return;

        const err = [!phone, !name, !address, !idCard];

        setPhoneErr(!phone);
        setNameErr(!name);
        setAddressErr(!address);
        setIdCardErr(!idCard);

        if (!err.every((e) => !e)) return;

        setOnUpdate(true);

        const params = {
            idNumber: idCard,
            phoneNumber: phone,
            fullName: name,
            address: address.name,
        };
        try {
            const res = await userApi.update(id, params);
            console.log(res);
            setOnUpdate(false);
            onUpdateSuccess();
        } catch (err) {
            setOnUpdate(false);
            onUpdateError(err.response.data);
            console.log(err);
        }
    };

    return (
        <Card elevation={0}>
            <CardContent>
                <Grid container spacing={4}>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Id card"
                                variant="outlined"
                                value={idCard}
                                onChange={(e) => setIdCard(e.target.value)}
                                error={idCardErr}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Fullname"
                                variant="outlined"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                error={nameErr}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Phone"
                                variant="outlined"
                                type="number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                error={phoneErr}
                            />
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl fullWidth margin="normal">
                            <Autocomplete
                                options={addressList.data}
                                getOptionLabel={(option) => option.name || ''}
                                renderOption={(props, option) => (
                                    <Box {...props} component="li">
                                        {option.name}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Address"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password',
                                        }}
                                        error={addressErr}
                                    />
                                )}
                                value={address}
                                onChange={(event, newValue) => setAddress(newValue)}
                            />
                        </FormControl>
                    </Grid>
                </Grid>
            </CardContent>

            <CardActions>
                <LoadingButton
                    variant="contained"
                    disableElevation
                    onClick={updateUser}
                    loading={onUpdate}
                >
                    Update
                </LoadingButton>
            </CardActions>
        </Card>
    );
};
