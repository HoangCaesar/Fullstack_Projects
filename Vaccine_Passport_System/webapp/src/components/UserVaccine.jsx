import {
    Autocomplete,
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
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import vaccineApi from '../api/vaccineApi';
import userApi from '../api/userApi';
import CustomDialog from './CustomDialog';
import { LoadingButton } from '@mui/lab';

const UserVaccine = ({ user }) => {
    const [userVaccines, setUserVaccines] = useState(user.vaccinated);
    const [vaccineList, setVaccineList] = useState([]);
    const [vaccineLots, setVaccineLots] = useState([]);
    const [selectedVaccine, setSelectedVaccine] = useState();
    const [selectedLot, setSelectedLot] = useState();
    const [onVaccinated, setOnVaccinated] = useState(false);

    const [showAddDialog, setShowAddDialog] = useState(false);

    useEffect(() => {
        const getVaccines = async () => {
            try {
                const res = await vaccineApi.getAll();
                setVaccineList(res);
            } catch (err) {
                console.log(err);
            }
        };
        getVaccines();
    }, []);

    useEffect(() => {
        if (!selectedVaccine) {
            setVaccineLots([]);
            setSelectedLot(null);
            return;
        }
        setVaccineLots(selectedVaccine.vaccineLots);
    }, [selectedVaccine]);

    const tableHeader = [
        {
            field: 'vaccine',
            headerName: 'Vaccine',
            width: 200,
            renderCell: (params) => (
                <Button
                    component={Link}
                    to={`/vaccine/${params.value.id}`}
                    sx={{ textTransform: 'none' }}
                >
                    {params.value.name}
                </Button>
            ),
        },
        {
            field: 'vaccineLot',
            headerName: 'Lot',
            width: 170,
            renderCell: (params) => params.value.name,
        },
        {
            field: 'createdAt',
            headerName: 'Time',
            flex: 1,
            renderCell: (params) => moment(params.value).format('YYYY-MM-DD HH:mm:ss'),
        },
    ];

    const closeAddDialog = () => {
        setSelectedVaccine(null);
        setShowAddDialog(false);
    };

    const addVaccinated = async () => {
        if (onVaccinated) return;
        const err = [!selectedLot, !selectedVaccine];
        
        if (!err.every((e) => !e)) return;
        setOnVaccinated(true);

        const params = {
            userId: user.id,
            vaccineId: selectedVaccine.id,
            vaccineLotId: selectedLot.id,
        };
        try {
            const res = await userApi.vaccinated(params);
            setUserVaccines([...userVaccines, res]);
            closeAddDialog();
        } catch (err) {
            console.log(err);
        } finally {
            setOnVaccinated(false);
        }
    };

    return (
        <>
            <Card elevation={0}>
                <CardHeader
                    title={<Typography variant="h6">Vaccine Information</Typography>}
                    action={
                        <Button
                            variant="contained"
                            disableElevation
                            onClick={() => setShowAddDialog(true)}
                        >
                            ADD VACCINATED
                        </Button>
                    }
                />
                <CardContent>
                    <DataGrid
                        autoHeight
                        rows={userVaccines}
                        columns={tableHeader}
                        pageSize={3}
                        rowsPerPageOptions={[3]}
                        density="comfortable"
                        showCellRightBorder
                        showColumnRightBorder
                    />
                </CardContent>
            </Card>
            <CustomDialog
                open={showAddDialog}
                title="Add user vaccinated"
                content={
                    <Box sx={{ width: '400px' }}>
                        <FormControl fullWidth margin="normal">
                            <Autocomplete
                                options={vaccineList}
                                getOptionLabel={(option) => option.name}
                                renderOption={(props, option) => (
                                    <Box {...props} component="li">
                                        {option.name}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Vaccine"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password',
                                        }}
                                    />
                                )}
                                value={selectedVaccine}
                                onChange={(event, value) => setSelectedVaccine(value)}
                            />
                        </FormControl>
                        <FormControl fullWidth margin="normal">
                            <Autocomplete
                                options={vaccineLots}
                                getOptionLabel={(option) => option.name}
                                renderOption={(props, option) => (
                                    <Box {...props} component="li">
                                        {option.name}
                                    </Box>
                                )}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Vaccine lot"
                                        inputProps={{
                                            ...params.inputProps,
                                            autoComplete: 'new-password',
                                        }}
                                    />
                                )}
                                value={selectedLot}
                                onChange={(event, value) => setSelectedLot(value)}
                            />
                        </FormControl>
                    </Box>
                }
                actions={
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end' }} width="100%">
                        <Button variant="text" onClick={closeAddDialog} disabled={onVaccinated}>
                            Cancel
                        </Button>
                        <LoadingButton
                            variant="contained"
                            onClick={addVaccinated}
                            loading={onVaccinated}
                        >
                            Add
                        </LoadingButton>
                    </Box>
                }
            />
        </>
    );
};

export default UserVaccine;
