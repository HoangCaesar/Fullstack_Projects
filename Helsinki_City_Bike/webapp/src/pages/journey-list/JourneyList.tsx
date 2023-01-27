import { useEffect } from 'react';

// Project import
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
    selectJourneyFilter,
    selectJourneyList,
    selectJourneyLoading,
    selectJourneyPagination,
    journeyActions,
} from './journeyList.slice';

// ==============================|| JOURNEY LIST  ||============================== //

const JourneyList = () => {
    const dispatch = useAppDispatch();
    const journeyList = useAppSelector(selectJourneyList);
    const filter = useAppSelector(selectJourneyFilter);

    console.log(journeyList);

    useEffect(() => {
        dispatch(journeyActions.fetchJourneyList(filter));
    }, []);
    return <div>JourneyList</div>;
};

export default JourneyList;
