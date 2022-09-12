import { useAppDispatch } from '../../../app/hooks';
import { Appbar, Sidebar } from '../../../components/user';
import { authActions } from '../../../features/authentication/authSlice';
import { useCallback } from 'react';
import './User.scss';

const User = () => {
    const logOut = useCallback(() => {
        const dispatch = useAppDispatch();
        dispatch(authActions.logout());
    }, []);

    return (
        <div className="user">
            <Appbar logOut={logOut} />
            <h1>TEST</h1>
            <Sidebar />
        </div>
    );
};

export default User;
