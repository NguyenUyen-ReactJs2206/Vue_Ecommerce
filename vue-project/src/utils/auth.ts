import { User } from 'src/types/user.type';

// ACCESS TOKEN --- LS
export const saveAccessTokenToLS = (access_token: string) => {
  localStorage.setItem('access_token', access_token);
};

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem('access_token');
};

export const getAccessTokenFromLS = () => localStorage.getItem('access_token' || '');

// PROFILE --- LS
export const saveProfileToLS = (profile: User) => {
  localStorage.setItem('profile', JSON.stringify(profile));
};

export const clearProfileFromLS = () => {
  localStorage.removeItem('profile');
};

export const getProfileFromLocalStorage = () => {
  const result = localStorage.getItem('profile');
  return result ? JSON.parse(result) : null;
};
