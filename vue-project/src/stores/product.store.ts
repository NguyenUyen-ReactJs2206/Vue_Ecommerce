import { defineStore } from 'pinia';
import { getProductsApi } from 'src/apis/product.api';
import { ProductList } from 'src/types/product.type';

export const useProductStore = defineStore('product', {
  state: () => ({ productList: {} as ProductList }),
  getters: {},
  actions: {
    async getProducts(queryParams: any) {
      try {
        const response = await getProductsApi(queryParams);

        this.productList = response.data.data;
        console.log(this.productList, 'pppppppppppp');
      } catch (error) {}
    }
  }
});
