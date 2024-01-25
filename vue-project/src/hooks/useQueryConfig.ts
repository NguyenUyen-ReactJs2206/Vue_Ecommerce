import { isUndefined, omitBy } from 'lodash';
import { QueryConfig } from 'src/pages/ProductList/ProductList.vue';
import { Ref } from 'vue';
const useQueryConfig = (queryParams: Ref<QueryConfig>) => {
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.value.page || '1',
      limit: queryParams.value.limit || '10',
      sort_by: queryParams.value.sort_by,
      exclude: queryParams.value.exclude,
      name: queryParams.value.name,
      order: queryParams.value.order,
      price_max: queryParams.value.price_max,
      price_min: queryParams.value.price_min,
      rating_filter: queryParams.value.rating_filter,
      category: queryParams.value.category
    },
    isUndefined
  );
  return queryConfig;
};

export default useQueryConfig;
