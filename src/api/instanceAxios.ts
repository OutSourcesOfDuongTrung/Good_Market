import axios, { AxiosResponse } from 'axios';
import { getCookie, deleteCookie } from 'cookies-next';

const cookie = getCookie('access');
const instanceAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_ORIGIN,
  // withCredentials: true,
  // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // },
  //   timeout: 1000,
});
// const handleSuccess = (res: AxiosResponse) => {
//   return res.data;
// };

// const handleError = async (error: any) => {};

// instanceAxios.interceptors.response.use(handleSuccess, handleError);
if (cookie)
  instanceAxios.defaults.headers.common.Authorization = `Bearer ${cookie}`;
export default instanceAxios;
