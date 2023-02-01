import { Box, LinearProgress, Pagination } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ListParams } from '../../models';

// Project import
import { StationFilter, StationTable } from '../../components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    selectStationFilter,
    selectStationList,
    selectStationLoading,
    selectStationPagination, stationActions
} from './stationList.slice';

// Styled component
const StyledLinearProgress = styled(LinearProgress)`
    position: absolute;
    top: 18%;
    width: 100%;
`;

const StyledChildBox = styled(Box)`
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: center;
    width: 100%;
`;

// ==============================|| STATION LIST  ||============================== //

const StationList = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const stationList = useAppSelector(selectStationList);
    const filter = useAppSelector(selectStationFilter);
    const pagination = useAppSelector(selectStationPagination);
    const loading = useAppSelector(selectStationLoading);

    const count = Math.ceil(pagination._totalRows / pagination._limit);

    useEffect(() => {
        dispatch(stationActions.fetchStationList(filter));
    }, [dispatch, filter]);

    const handlePageChange = (e: any, page: number) => {
        dispatch(
            stationActions.setFilter({
                ...filter,
                _page: page,
            })
        );
    };

    // Search/Filter Logic
    const handleSearchChange = (newFilter: ListParams) => {
        dispatch(stationActions.setFilterWithDebounce(newFilter));
    };

    const handleFilterChange = (newFilter: ListParams) => {
        dispatch(stationActions.setFilter(newFilter));
    };

    const handleNavigate = (id: string) => {
        navigate(`${location.pathname}/${id}`);
    };
    return (
        <StyledChildBox>
            {/* Loading */}
            {loading && <StyledLinearProgress />}

            {/* {Search/Filter} */}
            <Box mb={3} sx={{ width: '100%' }}>
                {/* Filter */}
                <StationFilter
                    filter={filter}
                    onSearchChange={handleSearchChange}
                    onChange={handleFilterChange}
                />
            </Box>

            {/* Station Table */}
            <StationTable stationList={stationList} handleNavigate={handleNavigate} />

            {/* Pagination */}
            <Box mt={2} display="flex" justifyContent="center">
                <Pagination
                    count={count}
                    boundaryCount={2}
                    page={pagination._page}
                    onChange={handlePageChange}
                    color="primary"
                />
            </Box>
        </StyledChildBox>
    );
};

export default StationList;
