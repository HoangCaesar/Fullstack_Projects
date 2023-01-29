import PropTypes from 'prop-types';
import { useEffect, useState, memo } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';

// third-party
import ReactApexChart from 'react-apexcharts';

// project import
import { Highlight } from '../../models';

// chart options
const barChartOptions: any = {
    chart: {
        type: 'bar',
        height: 440,
        stacked: true,
    },
    colors: ['#008FFB', '#FF4560'],
    plotOptions: {
        bar: {
            horizontal: true,
            barHeight: '80%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 1,
        colors: ['#fff'],
    },

    grid: {
        xaxis: {
            lines: {
                show: false,
            },
        },
    },
    yaxis: {
        min: -20,
        max: 20,
        title: {
            text: 'Month',
        },
    },
    tooltip: {
        shared: false,
        x: {
            formatter: function (val: any) {
                return val;
            },
        },
        y: {
            formatter: function (val: any) {
                return Math.abs(val) + '%';
            },
        },
    },
    title: {
        text: 'Average Distance/Duration per journey over total Distance/Duration of each month',
    },
    xaxis: {
        categories: ['July', 'June', 'May'],
        title: {
            text: 'Percent (Multiplied By 100000)',
        },
        labels: {
            formatter: function (val: any) {
                return Math.abs(Math.round(val)) + '%';
            },
        },
    },
};

// ==============================|| AVERAGE BAR CHART ||============================== //

interface AverageBarChartProps {
    infoList?: Highlight[];
}

const AverageBarChart = ({ infoList }: AverageBarChartProps) => {
    const theme: any = useTheme();

    const [series, setSeries] = useState<any>([]);
    const line = theme.palette.divider;
    useEffect(() => {
        setSeries([
            {
                name: 'Distance',
                data: [
                    Number(
                        (
                            ((infoList?.[0]?.averageDistance || 0) /
                                1000 / // average distance (m) divide 1000
                                (infoList?.[0]?.['totalDistance(km)'] || 1)) *
                            100 *
                            100000
                        )
                            .toFixed(2)
                            .toString()
                    ),
                    Number(
                        (
                            ((infoList?.[1]?.averageDistance || 0) /
                                1000 / // average distance (m) divide 1000
                                (infoList?.[1]?.['totalDistance(km)'] || 1)) *
                            100 *
                            100000
                        )
                            .toFixed(2)
                            .toString()
                    ),
                    Number(
                        (
                            ((infoList?.[2]?.averageDistance || 0) /
                                1000 / // average distance (m) divide 1000
                                (infoList?.[2]?.['totalDistance(km)'] || 1)) *
                            100 *
                            100000
                        )
                            .toFixed(2)
                            .toString()
                    ),
                ],
            },
            {
                name: 'Duration',
                data: [
                    -Number(
                        (
                            ((infoList?.[0]?.averageDuration || 0) /
                                3600 / // average duration (sec) divide 3600
                                (infoList?.[0]?.['totalDuration(hours)'] || 1)) *
                            100 *
                            100000
                        )
                            .toFixed(2)
                            .toString()
                    ),
                    -Number(
                        (
                            ((infoList?.[1]?.averageDuration || 0) /
                                3600 / // average duration (sec) divide 3600
                                (infoList?.[1]?.['totalDuration(hours)'] || 1)) *
                            100 *
                            100000
                        )
                            .toFixed(2)
                            .toString()
                    ),
                    -Number(
                        (
                            ((infoList?.[2]?.averageDuration || 0) /
                                3600 / // average duration (sec) divide 3600
                                (infoList?.[2]?.['totalDuration(hours)'] || 1)) *
                            100 *
                            100000
                        )
                            .toFixed(2)
                            .toString()
                    ),
                ],
            },
        ]);
    }, [infoList]);

    return <ReactApexChart options={barChartOptions} series={series} type="bar" height={200} />;
};

AverageBarChart.propTypes = {
    slot: PropTypes.string,
};

export default memo(AverageBarChart);
