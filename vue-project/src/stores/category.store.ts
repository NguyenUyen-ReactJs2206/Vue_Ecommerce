import { defineStore } from 'pinia';
import getCategoriesAPI from 'src/apis/category.api';
import { Category } from 'src/types/category.type';

export const useCategoriesStore = defineStore('categories', {
  state: () => ({ categories: [] as Category[] }),
  getters: {},
  actions: {
    async getCategories() {
      try {
        const response = await getCategoriesAPI();

        this.categories = response.data.data;
        console.log(this.categories, 'caaaaaaaa');
      } catch (error) {}
    }
  }
});
