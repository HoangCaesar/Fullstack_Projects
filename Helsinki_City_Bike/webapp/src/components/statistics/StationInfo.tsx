import PropTypes from 'prop-types';
import { memo } from 'react';

// material-ui
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// project import
import { Station } from '../../models';

// styles
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

// helpers
const createData = (name?: string, info?: string | number) => {
    return {
        name,
        info,
    };
};

// ==============================|| STATISTICS - STATION INFORMATION  ||============================== //

interface StationInfoProps {
    station?: Station;
}

const StationInfo = ({ station }: StationInfoProps) => {
    const rows = [
        createData('Address', station?.station?.address?.address?.label || 'Not available'),
        createData(
            'State',
            station?.station?.address
                ? `${station?.station?.address?.address?.state} (${station?.station?.address?.address?.stateCode})`
                : 'Not available'
        ),
        createData('County', station?.station?.address?.address?.county || 'Not available'),
        createData('District', station?.station?.address?.address?.district || 'Not available'),
        createData(
            'Total number of journeys ending from the station in May',
            station?.station?.count?.returnCount?.returnCountMay || 0
        ),
        createData(
            'Total number of journeys ending from the station in June',
            station?.station?.count?.returnCount?.returnCountJune || 0
        ),
        createData(
            'Total number of journeys ending from the station in July',
            station?.station?.count?.returnCount?.returnCountJuly || 0
        ),
        createData(
            'Total number of journeys starting from the station in May',
            station?.station?.count?.departureCount?.departureCountMay || 0
        ),
        createData(
            'Total number of journeys starting from the station in June',
            station?.station?.count?.departureCount?.departureCountJune || 0
        ),
        createData(
            'Total number of journeys starting from the station in July',
            station?.station?.count?.departureCount?.departureCountJuly || 0
        ),
    ];

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="left">...</StyledTableCell>
                        <StyledTableCell align="center">Info</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.info}</StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

StationInfo.propTypes = {
    color: PropTypes.string,
    title: PropTypes.string,
    count: PropTypes.number,
    days: PropTypes.number,
    percentage: PropTypes.number,
    isLoss: PropTypes.bool,
    extra: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
};

StationInfo.defaultProps = {
    color: 'primary',
};

export default memo(StationInfo);
