import { defineStore } from 'pinia';
import { getProductsApi } from 'src/apis/product.api';
import { ProductList } from 'src/types/product.type';

export const useProductStore = defineStore('product', {
  state: () => ({ productList: {} as ProductList, pageSize: 1 as number }),
  getters: {},
  actions: {
    async getProducts(queryParams: any) {
      try {
        const response = await getProductsApi(queryParams);

        this.productList = response.data.data;
        this.pageSize = response.data.data.pagination.page_size;
      } catch (error) {}
    }
  }
});
