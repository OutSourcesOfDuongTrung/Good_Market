import { IGoodHousePostCreate, IJob } from '@/types/Job';
import instanceAxios from './instanceAxios';

export const fetchInteriorConditionList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`good-house/interior-condition/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};

export const fetchCreateGoodHousePost = async (
  data?: IGoodHousePostCreate | FormData
) => {
  return await instanceAxios.post(`good-house/items/`, data);
};
export const fetchCreateGoodHouseCategory = async (data?: IJob) => {
  return await instanceAxios.post(`good-house/category/`, data);
};
