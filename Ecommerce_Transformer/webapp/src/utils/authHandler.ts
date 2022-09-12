import authApi from '../api/authApi';
import { useAppDispatch } from '../app/hooks'
import { authActions } from '../features/authentication/authSlice'

export const isAuthenticated = async () => {
    const token = localStorage.getItem('token');
    if(!token) return false;

    try {
        await authApi.checktoken();
        return true;
    }
    catch (err) {
        return false;
    }
}