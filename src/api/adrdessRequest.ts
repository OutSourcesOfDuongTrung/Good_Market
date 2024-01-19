import instanceAxios from './instanceAxios';

export const fetchAreaList = async (
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
