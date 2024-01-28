import axios, { AxiosError } from 'axios';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';
import userImage from 'src/assets/images/user.svg';

export function isAxiosError<T>(error: unknown): error is AxiosError<T> {
  return axios.isAxiosError(error);
}

//Check AxiosError 422 - UnprocessableEntity
export function isAxiosUnprocessableEntityError<FormError>(error: unknown): error is AxiosError<FormError> {
  return isAxiosError(error) && error.response?.status === HttpStatusCode.UnprocessableEntity;
}

//Get URL AVATAR
export const getAvatarUrl = (avatarName?: string) =>
  avatarName ? `https://api-ecom.duthanhduoc.com/images/${avatarName}` : userImage;

//Format
export function formatCurrency(currency: number) {
  return new Intl.NumberFormat('de-DE').format(currency);
}
export function formatNumberToSocialStyle(value: number) {
  return Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 1
  })
    .format(value)
    .replace('.', ',')
    .toLowerCase();
}

export const rateSale = (original: number, sale: number) => Math.round(((original - sale) / original) * 100) + '%';

//Generate Name Id
const removeSpecialCharacter = (str: string) =>
  // eslint-disable-next-line no-useless-escape
  str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g, '');

export const generateNameId = ({ name, id }: { name: string; id: string }) => {
  //replace(/\s/g, '-') -- chuyen dau cach thanh dau -
  return removeSpecialCharacter(name).replace(/\s/g, '-') + `-i-${id}`;
};

//Get ID in URL
export const getIdFromNameId = (nameId: string) => {
  const arr = nameId.split('-i-');
  //lay item cuoi cung cua arr
  return arr[arr.length - 1];
};
