import instanceAxios from './instanceAxios';

export const fetchMachineryEquipmentPost = async (data?: FormData) => {
  return await instanceAxios.post(`/machinery-equipment/items/`, data);
};
export const fetchMachineryEquipmentGuaranteeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/machinery-equipment/guarantee/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchMachineryEquipmentSellerInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/machinery-equipment/seller-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchMachineryEquipmentUsageStatusList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/machinery-equipment/usage-status/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
