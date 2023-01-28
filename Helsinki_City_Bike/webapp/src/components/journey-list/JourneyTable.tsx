import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import cryptoRandomString from 'crypto-random-string';

// Project import
import { Journey } from '../../models';
import { capitalizeString, getDistanceColor, getDurationColor } from '../../utils/common';
import convertTime from '../../utils/convertTime';

const StyledButton = styled(Button)`
    margin-right: 8px;
`;

export interface JourneyTableProps {
    journeyList: Journey[];
}

// ==============================|| JOURNEY LIST TABLE - LIST ALL JOURNEYS ||============================== //

function JourneyTable({ journeyList }: JourneyTableProps) {
    return (
        <Box sx={{ width: '100%' }}>
            {/* {Journey Table} */}
            <TableContainer component={Paper}>
                <Table aria-label="simple table" size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Departure Time</TableCell>
                            <TableCell>Return Time</TableCell>
                            <TableCell>Departure Station</TableCell>
                            <TableCell>Departure station Id</TableCell>
                            <TableCell>Return Station</TableCell>
                            <TableCell>Return station Id</TableCell>
                            <TableCell>Distance (m)</TableCell>
                            <TableCell>Duration (s)</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {journeyList.map((journey) => (
                            <TableRow
                                key={`${cryptoRandomString({ length: 10 })}`}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{convertTime(journey['Departure'])}</TableCell>
                                <TableCell>{convertTime(journey['Return'])}</TableCell>
                                <TableCell>
                                    {capitalizeString(journey['Departure station name'])}
                                </TableCell>
                                <TableCell>
                                    {capitalizeString(journey['Departure station id'])}
                                </TableCell>
                                <TableCell>
                                    {capitalizeString(journey['Return station name'])}
                                </TableCell>
                                <TableCell>
                                    {capitalizeString(journey['Return station id'])}
                                </TableCell>
                                <TableCell>
                                    <Box color={getDistanceColor(journey['Distance'])}>
                                        {journey['Distance']}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    <Box color={getDurationColor(journey['Duration'])}>
                                        {journey['Duration']}
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default JourneyTable;
