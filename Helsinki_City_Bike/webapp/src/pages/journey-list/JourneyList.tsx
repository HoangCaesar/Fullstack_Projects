import { useEffect } from 'react';

// Project import
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { journeyActions, selectJourneyFilter, selectJourneyList } from './journeyList.slice';
import { JourneyTable } from '../../components';

// ==============================|| JOURNEY LIST  ||============================== //

const JourneyList = () => {
    const dispatch = useAppDispatch();
    const journeyList = useAppSelector(selectJourneyList);
    const filter = useAppSelector(selectJourneyFilter);

    console.log(journeyList);

    useEffect(() => {
        dispatch(journeyActions.fetchJourneyList(filter));
    }, []);
    return (
        <>
            <JourneyTable journeyList={journeyList} />
        </>
    );
};

export default JourneyList;
