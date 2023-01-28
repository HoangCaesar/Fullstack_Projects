import { useEffect, useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography,
    useTheme,
} from '@mui/material';

// project import
import { AnalyticTotal, MainCard } from '../../components';

// api
import highlightsApi from '../../api/highlight.api';

// models

// ==============================|| DASHBOARD - DEFAULT ||============================== //

const DashboardDefault = () => {
    const theme = useTheme();
    const error = theme.palette.error.main;
    const warning = theme.palette.warning.main;

    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Dashboard</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <AnalyticTotal />
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
