import { describe, expect, it } from 'vitest';
import {
  clearAccessTokenFromLS,
  clearProfileFromLS,
  getAccessTokenFromLS,
  getProfileFromLocalStorage,
  saveAccessTokenToLS,
  saveProfileToLS
} from '../auth';
import { beforeEach } from 'node:test';

const access_token =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OTZlNmZjYjExNDAwODkzZGY3MjNlMCIsImVtYWlsIjoidXllbjk5bnR0QGdtYWlsLmNvbSIsInJvbGVzIjpbIlVzZXIiXSwiY3JlYXRlZF9hdCI6IjIwMjQtMDEtMTdUMTU6MzE6MjguODU1WiIsImlhdCI6MTcwNTUwNTQ4OCwiZXhwIjoxNzA2MTEwMjg4fQ.21-kctuxANPcYdLHE0vxC2zrDvpnoyU2c_zV9yV60rU';

const profile =
  '{"_id":"6596e6fcb11400893df723e0","roles":["User"],"email":"uyen99ntt@gmail.com","createdAt":"2024-01-04T17:12:28.574Z","updatedAt":"2024-01-04T17:12:28.574Z","__v":0}';

beforeEach(() => {
  localStorage.clear();
});

describe('saveAccessTokenToLS', () => {
  it('access_token được xét vào LS', () => {
    saveAccessTokenToLS(access_token);
    expect(getAccessTokenFromLS()).toBe(access_token);
  });
});

describe('getAccessTokenFromLS', () => {
  it('Lấy access_token', () => {
    saveAccessTokenToLS(access_token);
    expect(getAccessTokenFromLS()).toBe(access_token);
  });
});

describe('clearAccessTokenFromLS', () => {
  it('Xóa access_token', () => {
    saveAccessTokenToLS(access_token);
    clearAccessTokenFromLS();
    expect(getAccessTokenFromLS()).toBe('');
  });
});

describe('saveProfileToLS', () => {
  it('profile được xét vào LS', () => {
    saveProfileToLS(JSON.parse(profile));
    expect(localStorage.getItem('profile')).toBe(profile);
  });
});

describe('getProfileFromLocalStorage', () => {
  it('Lấy profile', () => {
    saveProfileToLS(JSON.parse(profile));
    expect(localStorage.getItem('profile')).toBe(profile);
  });
});

describe('clearProfileFromLS', () => {
  it('Xóa profile', () => {
    saveProfileToLS(JSON.parse(profile));
    clearProfileFromLS();
    expect(getProfileFromLocalStorage()).toBe(null);
  });
});

//toEqual tương tự toBe
//toEqual có thể kiểm tra được 2 object có bằng nhau còn toBe thì không
