import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import { LoadingButton } from '@mui/lab';
import {
    Box,
    Button,
    Card,
    CardContent,
    CardHeader,
    FormControl,
    TextField,
    Typography,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import { useState } from 'react';
import vaccineLotsApi from '../api/vaccineLotsApi';
import CustomDialog from './CustomDialog';

const VaccineLots = ({ vaccine, onLotAdded, onLotDeleted, onLotUpdated }) => {
    const [pageSize, setPageSize] = useState(5);
    const [lotNumber, setLotNumber] = useState('');
    const [lotNumberErr, setLotNumberErr] = useState(false);
    const [quantity, setQuantity] = useState('');
    const [quantityErr, setQuantityErr] = useState(false);
    const [onSubmit, setOnSubmit] = useState(false);
    const [onUpdate, setOnUpdate] = useState(false);
    const [selectedLot, setSelectedLot] = useState('');

    const [onDelete, setOnDelete] = useState(false);

    const [showAddDialog, setShowAddDialog] = useState(false);
    const [showUpdateDialog, setShowUpdateDialog] = useState(false);

    const tableHeader = [
        {
            field: 'name',
            headerName: 'Lot number',
            width: 180,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 120,
            align: 'right',
            renderCell: (params) => params.value.toLocaleString('fi-FI'),
        },
        {
            field: 'vaccinated',
            headerName: 'Vaccinated',
            width: 120,
            align: 'right',
            renderCell: (params) => params.value.toLocaleString('fi-FI'),
        },
        {
            field: 'available',
            headerName: 'Available',
            width: 120,
            align: 'right',
            renderCell: (params) =>
                (params.row.quantity - params.row.vaccinated).toLocaleString('fi-FI'),
        },
        {
            field: 'createdAt',
            headerName: 'Time',
            flex: 1,
            renderCell: (params) => moment(params.value).format('DD-MM-YYYY HH:mm:ss'),
        },
        {
            field: '_id',
            headerName: 'Actions',
            flex: 1,
            renderCell: (params) => (
                <>
                    <Button
                        disableElevation
                        startIcon={<ModeEditOutlinedIcon />}
                        onClick={() => selectLot(params.row)}
                    >
                        Edit
                    </Button>
                    <LoadingButton
                        color="error"
                        disableElevation
                        startIcon={<DeleteOutlineOutlinedIcon />}
                        loading={onDelete}
                        onClick={() => deleteLot(params.row._id)}
                    >
                        Delete
                    </LoadingButton>
                </>
            ),
        },
    ];

    const createLot = async () => {
        if (onSubmit) return;
        const err = [!lotNumber, !quantity];

        setLotNumberErr(!lotNumber);
        setQuantityErr(!quantity);

        if (!err.every((err) => !err)) return;

        setOnSubmit(true);
        const params = {
            vaccineId: vaccine.id,
            name: lotNumber,
            quantity,
        };

        try {
            const res = await vaccineLotsApi.create(params);
            setQuantity('');
            setLotNumber('');
            setShowAddDialog(false);
            onLotAdded();
        } catch (err) {
            console.log(err);
        } finally {
            setOnSubmit(false);
        }
    };

    const deleteLot = async (lotId) => {
        if (onDelete) return;
        setOnDelete(true);
        try {
            await vaccineLotsApi.delete(lotId);
            onLotDeleted(lotId);
        } catch (err) {
            console.log(err);
        } finally {
            setOnDelete(false);
        }
    };

    const selectLot = (lot) => {
        setLotNumber(lot.name);
        setQuantity(lot.quantity);
        setSelectedLot(lot);
        setShowUpdateDialog(true);
    };

    const hideUpdateDialog = () => {
        setQuantity('');
        setLotNumber('');
        setSelectedLot(undefined);
        setShowUpdateDialog(false);
    };

    const updateLot = async (lotId) => {
        if (onUpdate) return;
        const err = [!lotNumber, !quantity];

        setLotNumberErr(!lotNumber);
        setQuantityErr(!quantity);

        if (!err.every((err) => !err)) return;

        setOnUpdate(true);
        const params = {
            name: lotNumber,
            quantity,
        };

        try {
            const res = await vaccineLotsApi.update(selectedLot.id, params);
            setQuantity('');
            setLotNumber('');
            setShowUpdateDialog(false);
            onLotUpdated();
        } catch (err) {
            console.log(err);
        } finally {
            setOnUpdate(false);
        }
    };

    return (
        <>
            <Card elevation={0}>
                <CardHeader
                    title={<Typography variant="h6">Lot information</Typography>}
                    action={
                        <Button
                            variant="contained"
                            disableElevation
                            onClick={() => setShowAddDialog(true)}
                        >
                            Add lot
                        </Button>
                    }
                />
                <CardContent>
                    <DataGrid
                        autoHeight
                        columns={tableHeader}
                        rows={vaccine.vaccineLots}
                        rowsPerPageOptions={[5, 10, 50]}
                        pageSize={pageSize}
                        onPageSizeChange={(size) => setPageSize(size)}
                        density="comfortable"
                        showCellRightBorder
                        showColumnRightBorder
                        disableSelectionOnClick
                    />
                </CardContent>
            </Card>
            <CustomDialog
                open={showAddDialog}
                title="Add vaccine lot"
                content={
                    <Box sx={{ width: '400px' }}>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Lot number"
                                variant="outlined"
                                value={lotNumber}
                                onChange={(e) => setLotNumber(e.target.value)}
                                error={lotNumberErr}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Quantity"
                                variant="outlined"
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                error={quantityErr}
                            />
                        </FormControl>
                    </Box>
                }
                actions={
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} width="100%">
                        <Button
                            variant="text"
                            onClick={() => setShowAddDialog(false)}
                            disable={onSubmit}
                        >
                            Cancel
                        </Button>
                        <LoadingButton
                            variant="contained"
                            disableElevation
                            loading={onSubmit}
                            onClick={createLot}
                        >
                            Save
                        </LoadingButton>
                    </Box>
                }
            />
            <CustomDialog
                open={showUpdateDialog}
                title="Update vaccine lot"
                content={
                    <Box sx={{ width: '400px' }}>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Lot number"
                                variant="outlined"
                                value={lotNumber}
                                onChange={(e) => setLotNumber(e.target.value)}
                                error={lotNumberErr}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <TextField
                                label="Quantity"
                                variant="outlined"
                                type="number"
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                                error={quantityErr}
                            />
                        </FormControl>
                    </Box>
                }
                actions={
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} width="100%">
                        <Button variant="text" onClick={hideUpdateDialog} disable={onSubmit}>
                            Cancel
                        </Button>
                        <LoadingButton
                            variant="contained"
                            disableElevation
                            loading={onUpdate}
                            onClick={updateLot}
                        >
                            Update
                        </LoadingButton>
                    </Box>
                }
            />
        </>
    );
};

export default VaccineLots;
