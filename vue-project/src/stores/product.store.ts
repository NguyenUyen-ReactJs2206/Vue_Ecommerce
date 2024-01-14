import { defineStore } from 'pinia';
// import { getProductsApi } from 'src/apis/product.api';

export const useProductStore = defineStore('product', {
  state: () => ({ productList: [] }),
  getters: {},
  actions: {
    // async getProducts() {
    //   try {
    //     const response = await getProductsApi()
    //   } catch (error) {
    //   }
    // }
  }
});
