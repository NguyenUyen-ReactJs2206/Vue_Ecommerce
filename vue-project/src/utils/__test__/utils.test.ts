import { describe, expect, it, test } from 'vitest';
import { formatCurrency, formatNumberToSocialStyle, isAxiosError, isAxiosUnprocessableEntityError } from '../utils';
import { AxiosError } from 'axios';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';

// describe dùng để mô tả tập hợp các ngữ cảnh
// hoặc 1 đơn vị cần test: Ví dụ function, component
// describe('isAxiosError', () => {
//   it('isAxiosError trả về boolean', () => {
//     //expect dùng để mong đợi giá trị trả về
//     expect(isAxiosError(new Error())).toBe(false);
//     expect(isAxiosError(new AxiosError())).toBe(true);
//   });
// });

//Cách khác
describe('isAxiosError', () => {
  test('trả về true cho AxiosError', () => {
    const error = new AxiosError('Lỗi Axios');
    expect(isAxiosError(error)).toBe(true);
  });

  test('trả về false cho Error thông thường', () => {
    const error = new Error('Lỗi thông thường');
    expect(isAxiosError(error)).toBe(false);
  });
});

describe('isAxiosUnprocessableEntityError', () => {
  it('isAxiosUnprocessableEntityError trả về boolean', () => {
    expect(isAxiosUnprocessableEntityError(new Error())).toBe(false);
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          //test thử lỗi 500
          status: HttpStatusCode.InternalServerError,
          data: null
        } as any)
      )
    ).toBe(false);
    expect(
      isAxiosUnprocessableEntityError(
        new AxiosError(undefined, undefined, undefined, undefined, {
          status: HttpStatusCode.UnprocessableEntity,
          data: null
        } as any)
      )
    ).toBe(true);
  });
});

describe('Format Utilities', () => {
  test('formatCurrency formats currency correctly', () => {
    const result = formatCurrency(1000);
    expect(result).toBe('1.000');
  });
  test('formatNumberToSocialStyle formats number to social style', () => {
    const result = formatNumberToSocialStyle(1500);
    expect(result).toBe('1,5k');
  });
});
