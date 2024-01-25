import instanceAxios from './instanceAxios';

export const fetchTaxiPost = async (data?: FormData) => {
  return await instanceAxios.post(`/taxi/items/`, data);
};
export const fetchTaxiPostedNewsList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`taxi/posted-news/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchTaxiPosterInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`taxi/poster-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
