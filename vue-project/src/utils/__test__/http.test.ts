import { describe, expect, it } from 'vitest';
import http from '../http';
import HttpStatusCode from 'src/constants/httpStatusCode.enum';
describe('http axios', () => {
  it('Gọi API', async () => {
    //Không nên đụng đến thư mục API
    //Vì chúng ta test riêng file http thì chỉ nên dùng http thôi
    //Lỡ như API thay đổi thì ta cũng không cần thay đổi file test này
    const res = await http.get('products');
    expect(res.status).toBe(HttpStatusCode.Ok);
  });
  it('Auth Request', async () => {
    await http.post('login', {
      email: 'uyen99ntt@gmail.com',
      password: '123123I'
    });
    const res = await http.get('me');
    expect(res.status).toBe(HttpStatusCode.Ok);
  });
});
