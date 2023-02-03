// Project import
import authApi from '../api/auth.api';

// ==============================|| AUTH HANDLER UTILS ||============================== //

const authHandler = async (time: string) => {
    const refreshToken = localStorage.getItem('refreshToken');
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

export default authHandler;
