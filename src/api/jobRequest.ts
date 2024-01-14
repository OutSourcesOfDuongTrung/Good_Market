import { message } from 'antd';
import instanceAxios from './instanceAxios';

export const fetchCareerList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`job/career/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
// export const fetchJobList = async (
//   searchData?: string,
//   currentPage?: number
// ) => {
//   return await instanceAxios.get(`users/`, {
//     params: {
//       ...(searchData && { search: searchData }),
//       page_size: currentPage,
//     },
//   });
// };
