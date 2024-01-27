import instanceAxios from './instanceAxios';

export const fetchCreateHomeAppliancePost = async (data?: FormData) => {
  return await instanceAxios.post(`ElectronicDevice/items/`, data);
};

export const fetchHomeApplianceGuaranteeList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/home-appliance/guarantee/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchHomeApplianceSellerInformationList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/home-appliance/seller-information/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
export const fetchHomeApplianceUsageStatusList = async (
  searchData?: string,
  currentPage?: number
) => {
  return await instanceAxios.get(`/home-appliance/usage-status/`, {
    params: {
      ...(searchData && { search: searchData }),
      page_size: currentPage,
    },
  });
};
