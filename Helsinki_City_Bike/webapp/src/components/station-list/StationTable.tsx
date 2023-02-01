import { Box, Button, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import cryptoRandomString from 'crypto-random-string';
import { Link } from 'react-router-dom';

// Project import
import { Station } from '../../models';
import { capitalizeString } from '../../utils/common';

const StyledButton = styled(Button)`
    margin-right: 8px;
`;

export interface StationTableProps {
    stationList: Station[];
    handleNavigate?: (id: string) => void;
}

// ==============================|| STATION LIST TABLE - LIST ALL STATIONS ||============================== //

function StationTable({ stationList, handleNavigate }: StationTableProps) {
    return (
        <Box sx={{ width: '100%' }}>
            {/* {Station Table} */}
            <TableContainer component={Paper}>
                <Table aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Station Name</TableCell>
                            <TableCell>Address</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {stationList.map((station, index) => (
                            <TableRow
                                key={`${cryptoRandomString({ length: 10 })}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{index}</TableCell>
                                <TableCell>
                                    <Link
                                        to={`/stationlist/${station?.['_id']}`}
                                        style={{ textDecoration: 'none' }}
                                    >
                                        {capitalizeString(station?.station)}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {capitalizeString(
                                        station?.address?.address?.label || 'Not found'
                                    )}
                                </TableCell>
                                <TableCell>
                                    {' '}
                                    <StyledButton
                                        size="small"
                                        color="primary"
                                        onClick={() => handleNavigate?.(station?._id)}
                                    >
                                        View
                                    </StyledButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default StationTable;
