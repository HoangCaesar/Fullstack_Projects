// Project import
import authApi from '../api/auth.api';

// ==============================|| AUTH HANDLER UTILS ||============================== //
const refreshToken = localStorage.getItem('refreshToken');

const authHandler = async () => {
    if (!refreshToken) return false;

    try {
        const accessTokenResponse = await authApi.checkAccessToken();
        if (accessTokenResponse.status === 'success') {
            return true;
        }
        const refreshTokenResponse = await authApi.checkRefreshToken(refreshToken);
        if (refreshTokenResponse.status === 'success') {
            return true;
        }
        return false;
    } catch (err) {
        return false;
    }
};

const logout = async (navigate: any) => {
    await authApi.logout(refreshToken as string);
    localStorage.removeItem('username');
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/login');
};

export { logout };
export default authHandler;
