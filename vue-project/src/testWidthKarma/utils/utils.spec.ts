// Update with your file path
import { AxiosError } from 'axios';
import { isAxiosError } from 'src/utils/utils';

describe('isAxiosError', () => {
  it('isAxiosError trả về boolean', () => {
    //expect dùng để mong đợi giá trị trả về
    expect(isAxiosError(new Error())).toBe(false);
    expect(isAxiosError(new AxiosError())).toBe(true);
  });
});
