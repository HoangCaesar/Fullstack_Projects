import { useEffect, useState } from 'react';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Box, Grid, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

// Project Import
import stationListApi from '../../../api/stationList.api';

// Models
import { Station } from '../../../models';
import { MainCard, StationInfo } from '../../../components';

// ==============================|| STATION VIEW  ||============================== //

const StationView = () => {
    const { stationId } = useParams<{ stationId: string }>();
    const [station, setStation] = useState<Station>();

    useEffect(() => {
        if (!stationId) return;

        (async () => {
            try {
                const response: Station = await stationListApi.getOne(stationId);
                setStation(response);
            } catch (err) {
                console.log('Failed to load this student');
            }
        })();
    }, [stationId]);

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Link to="/stationlist" style={{ textDecoration: 'none' }}>
                    <Typography
                        variant="caption"
                        style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}
                    >
                        <ArrowCircleLeftIcon /> &nbsp; Back to station list
                    </Typography>
                </Link>
            </Grid>

            {/* Column 1 */}
            <Grid item xs={12} md={6} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">
                            Information about{' '}
                            <Typography sx={{ display: 'inline-block', color: '#d50000' }}>
                                {station?.station.station}
                            </Typography>
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ pt: 1, pr: 2 }}>
                    <StationInfo station={station} />
                </Box>
            </Grid>
            {/* Column 2 */}
            <Grid item xs={12} md={6} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Location On The Map</Typography>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Box sx={{ p: 3, pb: 4 }}>Map</Box>
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default StationView;
