import { memo } from 'react';
import PropTypes from 'prop-types';

// material-ui
import { Chip, Grid, Stack, Typography } from '@mui/material';

// project import
import MainCard from '../MainCard';

// assets
import { SyncOutlined } from '@ant-design/icons';

// ==============================|| STATISTICS - ECOMMERCE CARD  ||============================== //

interface AnalyticEcommerceProps {
    color?: 'secondary' | 'default' | 'primary' | 'error' | 'info' | 'success' | 'warning';
    title?: string;
    count?: number;
    days?: number;
}

const AnalyticEcommerce = ({ color, title, count, days }: AnalyticEcommerceProps) => {
    return (
        <MainCard contentSX={{ p: 2.25 }}>
            <Stack spacing={0.5}>
                <Typography variant="h6" color="textSecondary">
                    {title}
                </Typography>
                <Grid container alignItems="center">
                    <Grid item>
                        <Typography variant="h4" color="inherit">
                            {count || 0}
                        </Typography>
                    </Grid>
                    {days && (
                        <Grid item>
                            <Chip
                                variant="filled"
                                color={color}
                                icon={
                                    <>
                                        {
                                            <SyncOutlined
                                                style={{ fontSize: '0.75rem', color: 'inherit' }}
                                            />
                                        }
                                    </>
                                }
                                label={`${days} days`}
                                sx={{ ml: 1.25, pl: 1 }}
                                size="small"
                            />
                        </Grid>
                    )}
                </Grid>
            </Stack>
        </MainCard>
    );
};

AnalyticEcommerce.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.number,
    days: PropTypes.number,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

AnalyticEcommerce.defaultProps = {
    color: 'primary',
};

export default memo(AnalyticEcommerce);
