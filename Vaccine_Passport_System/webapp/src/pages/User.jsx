import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ShieldOutlinedIcon from '@mui/icons-material/ShieldOutlined';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Box, Button, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import userApi from '../api/userApi';
import { PageHeader } from '../components';

const User = () => {
    const [userList, setUserList] = useState([]);
    const [pageSize, setPageSize] = useState(9);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const res = await userApi.getAll();
                setUserList(res);
            } catch (err) {
                console.log(err);
            }
        };
        getUsers();
    }, []);

    const tableHeader = [
        {
            field: 'idNumber',
            headerName: 'ID card',
            width: 170,
            renderCell: (params) => (
                <Button variant="text" component={Link} to={`/user/${params.row.id}`}>
                    {params.value}
                </Button>
            ),
        },
        {
            field: 'fullName',
            headerName: 'FullName',
            width: 200,
        },
        {
            field: 'phoneNumber',
            headerName: 'Phone',
            width: 170,
        },
        {
            field: 'vaccine',
            headerName: 'Vaccinated',
            width: 220,
            renderCell: (params) => (
                <Box
                    sx={{ display: 'flex', alignItems: 'center' }}
                    color={
                        params.value.length > 1
                            ? 'green'
                            : params.value.length == 1
                            ? 'orange'
                            : 'red'
                    }
                >
                    {params.value.length > 1 && <VerifiedUserIcon />}
                    {params.value.length == 1 && <ShieldOutlinedIcon />}
                    {params.value.length < 1 && <ErrorOutlineOutlinedIcon />}
                    <Typography
                        variant="body2"
                        sx={{
                            marginLeft: '10px',
                            fontWeight: '500',
                        }}
                    >
                        Vaccinated with {params.value.length} dose{params.value.length > 1 && 's'}
                    </Typography>
                </Box>
            ),
        },
        {
            field: 'address',
            headerName: 'Address',
            flex: 1,
        },
        {
            field: 'id',
            headerName: 'Actions',
            width: 170,
            renderCell: (params) => (
                <Button
                    variant="text"
                    component={Link}
                    to={`/user/${params.value}`}
                    startIcon={<OpenInNewOutlinedIcon />}
                >
                    Detail
                </Button>
            ),
        },
    ];

    return (
        <React.Fragment>
            <PageHeader
                title="User list"
                rightContent={
                    <Button
                        variant="contained"
                        component={Link}
                        to="/user/create"
                        startIcon={<PersonAddAlt1OutlinedIcon />}
                    >
                        Create
                    </Button>
                }
            />
            <Paper elevation={0}>
                <DataGrid
                    autoHeight
                    rows={userList}
                    columns={tableHeader}
                    pageSize={pageSize}
                    rowsPerPageOptions={[9, 50, 100]}
                    onPageSizeChange={(size) => setPageSize(size)}
                    density="comfortable"
                    showCellRightBorder
                    showColumnRightBorder
                    disableSelectionOnClick
                />
            </Paper>
        </React.Fragment>
    );
};

export default User;
