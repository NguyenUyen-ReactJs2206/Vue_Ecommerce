import { defineStore } from 'pinia';
import { getProductDetailApi, getProductsApi } from 'src/apis/product.api';
import { ProductDetail, ProductList } from 'src/types/product.type';

export const useProductStore = defineStore('product', {
  state: () => ({ productList: {} as ProductList, pageSize: 1 as number, productDetail: {} as ProductDetail }),
  getters: {},
  actions: {
    async getProducts(queryParams: any) {
      try {
        const response = await getProductsApi(queryParams);

        this.productList = response.data.data;
        this.pageSize = response.data.data.pagination.page_size;
      } catch (error) {}
    },
    async getProductDetail(id: string) {
      try {
        const response = await getProductDetailApi(id);

        this.productDetail = response.data.data;
        return response;
      } catch (error) {}
    }
  }
});
