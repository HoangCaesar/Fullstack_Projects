import AddModeratorOutlinedIcon from '@mui/icons-material/AddModeratorOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import { Box, Card, CardContent, CardHeader, Grid, Stack, Typography, Button } from '@mui/material';
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import adminApi from '../api/adminApi';
import { DataGrid } from '@mui/x-data-grid';
import moment from 'moment';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    const [summaryData, setSummaryData] = useState();

    useEffect(() => {
        const getData = async () => {
            try {
                const res = await adminApi.getSummary();
                setSummaryData(res);
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);

    return (
        <Stack spacing={4}>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <Card elevation={0}>
                            <CardContent>
                                {summaryData && (
                                    <SummaryInfo
                                        title="Total User"
                                        number={summaryData.totalUser.toLocaleString('fi-FI')}
                                        icon={
                                            <PersonOutlineOutlinedIcon
                                                sx={{ fontSize: '3rem' }}
                                                color="warning"
                                            />
                                        }
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={0}>
                            <CardContent>
                                {summaryData && (
                                    <SummaryInfo
                                        title="User Vaccinated"
                                        number={summaryData.userVaccinated.toLocaleString('fi-FI')}
                                        icon={
                                            <VerifiedUserOutlinedIcon
                                                sx={{ fontSize: '3rem' }}
                                                color="success"
                                            />
                                        }
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={0}>
                            <CardContent>
                                {summaryData && (
                                    <SummaryInfo
                                        title="Available Vaccine Dose"
                                        number={summaryData.availableVaccineDose.toLocaleString(
                                            'fi-FI'
                                        )}
                                        icon={
                                            <AddModeratorOutlinedIcon
                                                sx={{ fontSize: '3rem' }}
                                                color="primary"
                                            />
                                        }
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={3}>
                        <Card elevation={0}>
                            <CardContent>
                                {summaryData && (
                                    <SummaryInfo
                                        title="Total Places"
                                        number={summaryData.totalPlace.toLocaleString('fi-FI')}
                                        icon={
                                            <RoomOutlinedIcon
                                                sx={{ fontSize: '3rem' }}
                                                color="error"
                                            />
                                        }
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Card elevation={0}>
                            <CardHeader title={<Typography>Vaccinated Analyst</Typography>} />
                            <CardContent>
                                {summaryData && (
                                    <VaccinatedChart
                                        chartData={summaryData.userVaccinatedAnalyst}
                                    />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={8}>
                        <Card elevation={0}>
                            <CardHeader
                                title={<Typography>Latest Vaccine Lots</Typography>}
                                action={
                                    <Button variant="text" disableElevation component={Link} to='/vaccine'>
                                        Manage Vaccine
                                    </Button>
                                }
                            />
                            <CardContent>
                                {summaryData && (
                                    <LatestVaccineLotTable list={summaryData.latestVaccineLot} />
                                )}
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </div>
        </Stack>
    );
};

const SummaryInfo = ({ title, number, icon }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack>
                <Typography variant="body2" fontWeight="600">
                    {title}
                </Typography>
                <Typography variant="h4" fontWeight="600">
                    {number}
                </Typography>
            </Stack>
            <div>{icon}</div>
        </Box>
    );
};

const VaccinatedChart = ({ chartData }) => {
    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
        labels: [
            `1 dose ${Math.floor((chartData.userWithOneDose / chartData.totalUser) * 100)}%`,
            `Upper 2 doses ${Math.floor(
                (chartData.userWithAboveTwoDose / chartData.totalUser) * 100
            )}%`,
            `0 dose ${Math.floor((chartData.userWithZeroDose / chartData.totalUser) * 100)}%`,
        ],
        datasets: [
            {
                label: 'Vaccinated Analyst',
                data: [
                    chartData.userWithOneDose,
                    chartData.userWithAboveTwoDose,
                    chartData.userWithZeroDose,
                ],
                backgroundColor: ['yellow', 'green', 'red'],
                borderColor: ['yellow', 'green', 'red'],
                borderWidth: 1,
            },
        ],
    };
    return (
        <Pie
            data={data}
            options={{
                plugins: {
                    legend: {
                        position: 'bottom',
                    },
                },
            }}
        />
    );
};

const LatestVaccineLotTable = ({ list }) => {
    const tableHeader = [
        {
            field: 'name',
            headerName: 'Lot number',
            width: 200,
        },
        {
            field: 'vaccine',
            headerName: 'Vaccine',
            width: 200,
            renderCell: (params) => params.value.name,
        },
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 150,
            align: 'right',
            renderCell: (params) => params.value.toLocaleString('fi-FI'),
        },
        {
            field: 'createdAt',
            headerName: 'Time',
            flex: 1,
            renderCell: (params) => moment(params.value).format('DD-MM-YYYY HH-mm-ss'),
        },
    ];
    return (
        <DataGrid
            autoHeight
            rows={list}
            columns={tableHeader}
            hideFooter
            density="comfortable"
            showCellRightBorder
            showColumnRightBorder
            disableSelectionOnClick
        />
    );
};

export default Dashboard;
