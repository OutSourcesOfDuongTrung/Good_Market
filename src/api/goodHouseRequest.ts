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
