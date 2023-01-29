import PropTypes from 'prop-types';
import { useEffect, useState, memo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import

// chart options
const areaChartOptions = {
    chart: {
        height: 450,
        type: 'area',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    grid: {
        strokeDashArray: 0,
    },
};

// ==============================|| MONTH AREA CHART ||============================== //

interface AreaChartProps {
    distanceInMay?: number;
    distanceInJune?: number;
    distanceInJuly?: number;
}

const AreaChart = ({
    distanceInMay,
    distanceInJune,
    distanceInJuly,
}: AreaChartProps) => {
    const theme: any = useTheme();

    const { primary, secondary } = theme.palette.text;
    const line = theme.palette.divider;
    const [options, setOptions] = useState<any>(areaChartOptions);

    useEffect(() => {
        setOptions((prevState: any) => ({
            ...prevState,
            colors: [theme.palette.success.main, theme.palette.primary.main],
            xaxis: {
                categories: ['May', 'June', 'July'],
                labels: {
                    style: {
                        colors: [secondary, secondary, secondary],
                    },
                },
                axisBorder: {
                    show: true,
                    color: line,
                },
                tickAmount: 3,
            },
            yaxis: {
                labels: {
                    style: {
                        colors: [secondary],
                    },
                },
            },
            grid: {
                borderColor: line,
            },
            tooltip: {
                theme: 'light',
            },
        }));
    }, [primary, secondary, line, theme]);

    const [series, setSeries] = useState([
        {
            name: '2021',
            data: [0, 86, 28],
        },
    ]);

    useEffect(() => {
        setSeries([
            {
                name: '2021',
                data: [distanceInMay || 0, distanceInJune || 0, distanceInJuly || 0],
            },
        ]);
    }, [distanceInMay, distanceInJune, distanceInJuly]);

    return <ReactApexChart options={options} series={series} type="area" height={450} />;
};

AreaChart.propTypes = {
    slot: PropTypes.string,
};

export default memo(AreaChart);
