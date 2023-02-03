import { useEffect } from 'react';

// material-ui
import { Box, Grid, LinearProgress, Stack, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// project import
import { AnalyticTotal, DurationPieChart, MainCard, MonthAreaChart } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    highlightsActions,
    selectHighlightsList,
    selectHighlightsLoading
} from './dashboard.slice';

// models
import AverageBarChart from '../../components/dashboard-charts/AverageBarChart';
import { Highlight } from '../../models';

// Styled component
const StyledLinearProgress = styled(LinearProgress)`
    position: absolute;
    top: 12%;
    width: 100%;
`;

// helpers
const secondToHour = (duration: number) => {
    const SECONDS_IN_A_HOUR = 60 * 60; // second * minute
    const newDuration = Math.floor(duration / SECONDS_IN_A_HOUR);
    return newDuration;
};

const secondToDay = (duration: number) => {
    const SECONDS_IN_A_DAY = 60 * 60 * 24; // second * minute * hour
    const newDuration = Math.floor(duration / SECONDS_IN_A_DAY);
    return newDuration;
};

const hourToDay = (duration: number) => {
    const newDuration = Math.floor(duration / 24);
    return newDuration;
};

const calculateTotalDuration = (list: Highlight[]) => {
    const totalDurationInMay = list[0]['totalDuration(hours)'];
    const totalDurationInJune = list[1]['totalDuration(hours)'];
    const totalDurationInJuly = list[2]['totalDuration(hours)'];
    const total = totalDurationInMay + totalDurationInJune + totalDurationInJuly;
    return total;
};

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const dispatch = useAppDispatch();
    const highlightsList = useAppSelector(selectHighlightsList);
    const loading = useAppSelector(selectHighlightsLoading);

    useEffect(() => {
        dispatch(highlightsActions.fetchHighlightsList());
    }, [dispatch]);

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {loading && <StyledLinearProgress />}

            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal
                    title={`Longest Using Time in May (hour)`}
                    count={secondToHour(highlightsList[0]?.longestDuration)}
                    days={secondToDay(highlightsList[0]?.longestDuration)}
                    color="success"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal
                    title={`Total Using Time in June (hour)`}
                    count={highlightsList[1]?.['totalDuration(hours)']}
                    days={hourToDay(highlightsList[1]?.['totalDuration(hours)'])}
                    color="primary"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal
                    title={`Total Using Time In 3 Months (hour)`}
                    count={
                        highlightsList.length !== 0
                            ? calculateTotalDuration(highlightsList)
                            : undefined
                    }
                    days={
                        highlightsList.length !== 0
                            ? hourToDay(calculateTotalDuration(highlightsList))
                            : undefined
                    }
                    color="error"
                />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal
                    title={`Average Using Time in July (second)`}
                    count={highlightsList[2]?.averageDuration}
                    color="success"
                />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

            {/* row 2 */}
            <Grid item xs={12} md={7} lg={8}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Total Using Distance In 3 Months (Km)</Typography>
                    </Grid>
                </Grid>
                <MainCard content={false} sx={{ mt: 1.5 }}>
                    <Box sx={{ pt: 1, pr: 2 }}>
                        <MonthAreaChart
                            distanceInMay={highlightsList[0]?.['totalDistance(km)']}
                            distanceInJune={highlightsList[1]?.['totalDistance(km)']}
                            distanceInJuly={highlightsList[2]?.['totalDistance(km)']}
                        />
                    </Box>
                </MainCard>
            </Grid>
            <Grid item xs={12} md={5} lg={4}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">Total Using Time Every Month (hour)</Typography>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 2 }} content={false}>
                    <Box sx={{ p: 3, pb: 4 }}>
                        <Stack spacing={4}>
                            <Typography variant="h6" color="textSecondary">
                                Total per month / total 3 months
                            </Typography>
                            <Typography variant="h3">Year: 2021</Typography>
                        </Stack>
                    </Box>
                    <DurationPieChart
                        infoOfMay={highlightsList?.[0]}
                        infoOfJune={highlightsList?.[1]}
                        infoOfJuly={highlightsList?.[2]}
                    />
                </MainCard>
            </Grid>

            {/* row 3 */}
            <Grid item xs={12} md={12} lg={12}>
                <Grid container alignItems="center" justifyContent="space-between">
                    <Grid item>
                        <Typography variant="h5">
                            Average Duration/Distance Per A Single Journey
                        </Typography>
                    </Grid>
                </Grid>
                <MainCard sx={{ mt: 1.75 }}>
                    <AverageBarChart infoList={highlightsList} />
                </MainCard>
            </Grid>
        </Grid>
    );
};

export default DashboardDefault;
