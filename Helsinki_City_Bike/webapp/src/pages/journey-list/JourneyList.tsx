import { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, LinearProgress, Pagination, Typography } from '@mui/material';

// Project import
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    journeyActions,
    selectJourneyFilter,
    selectJourneyList,
    selectJourneyPagination,
    selectJourneyLoading,
} from './journeyList.slice';
import { JourneyTable } from '../../components';

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

// ==============================|| JOURNEY LIST  ||============================== //

const JourneyList = () => {
    const dispatch = useAppDispatch();

    const journeyList = useAppSelector(selectJourneyList);
    const filter = useAppSelector(selectJourneyFilter);
    const pagination = useAppSelector(selectJourneyPagination);
    const loading = useAppSelector(selectJourneyLoading);

    const count = Math.ceil(pagination._totalRows / pagination._limit);

    useEffect(() => {
        dispatch(journeyActions.fetchJourneyList(filter));
    }, [dispatch, filter]);

    const handlePageChange = (e: any, page: number) => {
        dispatch(
            journeyActions.setFilter({
                ...filter,
                _page: page,
            })
        );
    };
    return (
        <StyledChildBox>
            {/* Loading */}
            {loading && <StyledLinearProgress />}

            {/* Journey Table */}
            <JourneyTable journeyList={journeyList} />

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

export default JourneyList;
