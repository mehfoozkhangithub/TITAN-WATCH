import { axiosInstance } from '../../Util/Api';

export const loginApi = (data) => {
  return axiosInstance.post('/login', data);
};

export const signupApi = (data) => {
  return axiosInstance.post('/signup', data);
};
