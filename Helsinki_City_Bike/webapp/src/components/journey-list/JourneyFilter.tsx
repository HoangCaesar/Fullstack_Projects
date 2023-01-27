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

    const handleSortChange = (e: SelectChangeEvent<{ name?: string; value?: string }>) => {
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
            _page: 1,
            name_like: undefined,
            city: undefined,
            _sort: undefined,
            _order: undefined,
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
                        <InputLabel htmlFor="searchByName">Search by name</InputLabel>
                        <Input
                            id="searchByName"
                            endAdornment={<Search />}
                            onChange={handleSearchChange}
                            inputRef={searchRef}
                        />
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

                            <MenuItem value="name.asc">Name ASC</MenuItem>
                            <MenuItem value="name.desc">Name DESC</MenuItem>
                            <MenuItem value="mark.asc">Mark ASC</MenuItem>
                            <MenuItem value="mark.desc">Mark DESC</MenuItem>
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
