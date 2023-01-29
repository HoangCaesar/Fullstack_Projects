import PropTypes from 'prop-types';
import { useEffect, useState, memo, useMemo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import { Highlight } from '../../models';

// chart options
const pieChartOptions: any = {
    chart: {
        type: 'donut',
    },
    labels: ['May', 'June', 'July'],
    responsive: [
        {
            breakpoint: 480,
            options: {
                chart: {
                    width: 400,
                },
                legend: {
                    position: 'center',
                },
            },
        },
    ],
};

// ==============================|| DURATION PIE CHART ||============================== //

interface DurationPieChartProps {
    infoOfMay?: Highlight;
    infoOfJune?: Highlight;
    infoOfJuly?: Highlight;
}

const DurationPieChart = ({ infoOfMay, infoOfJune, infoOfJuly }: DurationPieChartProps) => {
    const theme: any = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;

    const [series, setSeries] = useState([44, 55, 41, 17, 15, 18, 20]);

    useEffect(() => {
        setSeries([
            infoOfMay?.['totalDuration(hours)'] || 0,
            infoOfJune?.['totalDuration(hours)'] || 0,
            infoOfJuly?.['totalDuration(hours)'] || 0,
        ]);
    }, [infoOfMay, infoOfJune, infoOfJuly]);

    return <ReactApexChart options={pieChartOptions} series={series} type="donut" />;
};

DurationPieChart.propTypes = {
    slot: PropTypes.string,
};

export default memo(DurationPieChart);
