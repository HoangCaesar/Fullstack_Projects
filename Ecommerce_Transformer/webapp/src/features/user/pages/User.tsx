import { useAppDispatch } from '../../../app/hooks';
import { Appbar, Sidebar } from '../../../components/user';
import { authActions } from '../../../features/authentication/authSlice';
import { useCallback } from 'react';
import './User.scss';

const User = () => {
    const dispatch = useAppDispatch();
    const logOut = useCallback(() => {
        dispatch(authActions.logout());
    }, []);

    return (
        <div className="user">
            <Appbar logOut={logOut} />
            <Sidebar />
        </div>
    );
};

export default User;
