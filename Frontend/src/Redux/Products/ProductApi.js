import { axiosInstance } from '../../Util/Api';

export const productsApi = () => {
  return axiosInstance.get('/products');
};
