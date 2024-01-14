import { Product, ProductList, ProductListConfig } from 'src/types/product.type';
import { SuccessResponseApi } from 'src/types/utils.type';
import http from 'src/utils/http';

const URL = 'products';

export const getProductsApi = (params: ProductListConfig) =>
  http.get<SuccessResponseApi<ProductList>>(URL, {
    params
  });

export const getProductDetailApi = (id: string) => http.get<SuccessResponseApi<Product>>(`${URL}/${id}`);
