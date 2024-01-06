import { AuthResponse } from 'src/types/auth.type';
import http from 'src/utils/http';

export const URL_LOGIN = 'login';
export const URL_REGISTER = 'registerr';
export const URL_LOGOUT = 'logout';

export const registerAccount = (body: { email: string; password: string }) =>
  http.post<AuthResponse>(URL_REGISTER, body);
export const loginAccount = (body: { email: string; password: string }) => http.post<AuthResponse>(URL_LOGIN, body);
export const logout = () => http.post(URL_LOGOUT);
