import { useLayoutEffect } from 'react';

// material-ui
import { Grid, LinearProgress, Typography, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

// project import
import { AnalyticTotal } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    highlightsActions,
    selectHighlightsList,
    selectHighlightsLoading,
} from './dashboard.slice';

// models
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
    let highlightsList = useAppSelector(selectHighlightsList);
    const loading = useAppSelector(selectHighlightsLoading);

    const theme = useTheme();
    const error = theme.palette.error.main;
    const warning = theme.palette.warning.main;

    useLayoutEffect(() => {
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
                    count={calculateTotalDuration(highlightsList)}
                    days={hourToDay(calculateTotalDuration(highlightsList))}
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
            <Grid item xs={12} md={7} lg={8}></Grid>
            <Grid item xs={12} md={5} lg={4}></Grid>

            {/* row 3 */}
            <Grid item xs={12} md={7} lg={8}></Grid>
            <Grid item xs={12} md={5} lg={4}></Grid>
        </Grid>
    );
};

export default DashboardDefault;
