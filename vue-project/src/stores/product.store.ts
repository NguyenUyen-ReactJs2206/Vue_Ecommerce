import { defineStore } from 'pinia';
import { getProductDetailApi, getProductsApi } from 'src/apis/product.api';
import { ProductDetail, ProductList, ProductListConfig } from 'src/types/product.type';

export const useProductStore = defineStore('product', {
  state: () => ({
    productList: {} as ProductList,
    pageSize: 1 as number,
    productDetail: {} as ProductDetail,
    queryConfig: {
      limit: '20',
      page: '1',
      category: ''
    } as ProductListConfig
  }),
  getters: {},
  actions: {
    async getProducts(queryParams: any) {
      try {
        const response = await getProductsApi(queryParams);

        this.productList = response.data.data;
        this.pageSize = response.data.data.pagination.page_size;
        return response;
      } catch (error) {}
    },
    async getProductDetail(id: string) {
      try {
        const response = await getProductDetailApi(id);

        this.productDetail = response.data.data;

        this.queryConfig.category = this.productDetail.category._id;
        return response;
      } catch (error) {}
    }
  }
});
