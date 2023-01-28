import { Search } from '@mui/icons-material';
import {
    Box,
    Button,
    FormControl,
    Grid,
    Input,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
} from '@mui/material';
import { ListParams } from '../../models';
import { ChangeEvent, useRef } from 'react';

export interface JourneyFilterProps {
    filter: ListParams;

    onChange?: (newFilter: ListParams) => void;
    onSearchChange?: (newFilter: ListParams) => void;
}

// ==============================|| JOURNEY FILTER - SEARCH/FILTER LIST ||============================== //

const JourneyFilter = ({ filter, onChange, onSearchChange }: JourneyFilterProps) => {
    const searchRef = useRef<HTMLInputElement>();

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (!onSearchChange) return;

        const newFilter: ListParams = {
            ...filter,
            name_like: e.target.value,
            _page: 1,
        };

        onSearchChange(newFilter);
    };

    const handleMonthChange = (e: SelectChangeEvent<{ name: string; value: string }>) => {
        if (!onChange) return;

        const newFilter: ListParams = {
            ...filter,
            _month: (e.target.value as any) || undefined,
            _page: 1,
        };

        onChange(newFilter);
    };

    const handleSortChange = (e: SelectChangeEvent<{ name?: string; value?: number }>) => {
        if (!onChange) return;

        const value = e.target.value;
        const [_sort, _order] = (value as string).split('.');
        const newFilter: ListParams = {
            ...filter,
            _sort: _sort || undefined,
            _order: (_order as 'asc' | 'desc') || undefined,
        };

        onChange(newFilter);
    };

    const handleClearFilter = () => {
        if (!onChange) return;

        const newFilter: ListParams = {
            ...filter,
            _month: 5,
            _page: 1,
            city: undefined,
            _sort: undefined,
            _order: undefined,
            name_like: undefined,
        };

        onChange(newFilter);

        if (searchRef.current) {
            searchRef.current.value = '';
        }
    };

    return (
        <Box>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard" sx={{ m: 1 }} size="small">
                        <InputLabel htmlFor="searchByStationName">
                            Search by station name
                        </InputLabel>
                        <Input
                            id="searchByStationName"
                            endAdornment={<Search />}
                            onChange={handleSearchChange}
                            inputRef={searchRef}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={3} mt={1}>
                    <FormControl fullWidth variant="standard" size="small">
                        <InputLabel id="filterByMonth">Filter by month</InputLabel>
                        <Select
                            labelId="filterByMonth"
                            id="demo-simple-select"
                            value={(filter._month as any) || ''}
                            label="Filter by month"
                            onChange={handleMonthChange}
                        >
                            <MenuItem value="">
                                <em>All</em>
                            </MenuItem>
                            <MenuItem value={5}>May</MenuItem>
                            <MenuItem value={6}>June</MenuItem>
                            <MenuItem value={7}>July</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={2} mt={1}>
                    <FormControl fullWidth variant="standard" size="small">
                        <InputLabel id="sortBy">Sort</InputLabel>
                        <Select
                            labelId="sortBy"
                            id="demo-simple-select"
                            value={filter._sort ? `${filter._sort}.${filter._order}` : ''}
                            label="Sort"
                            onChange={handleSortChange}
                        >
                            <MenuItem value="">
                                <em>No Sort</em>
                            </MenuItem>

                            <MenuItem value="Departure.asc">Departure Time ASC</MenuItem>
                            <MenuItem value="Departure.desc">Departure Time DESC</MenuItem>
                            <MenuItem value="Return.asc">Return Time ASC</MenuItem>
                            <MenuItem value="Return.desc">Return Time DESC</MenuItem>
                            <MenuItem value="Distance.asc">Distance ASC</MenuItem>
                            <MenuItem value="Distance.desc">Distance DESC</MenuItem>
                            <MenuItem value="Duration.asc">Duration ASC</MenuItem>
                            <MenuItem value="Duration.desc">Duration DESC</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6} lg={1} mt={1}>
                    <Button
                        fullWidth
                        sx={{ m: 1 }}
                        variant="outlined"
                        color="primary"
                        onClick={handleClearFilter}
                    >
                        Clear
                    </Button>
                </Grid>
            </Grid>
        </Box>
    );
};

export default JourneyFilter;
