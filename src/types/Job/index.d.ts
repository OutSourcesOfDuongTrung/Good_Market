interface IJob {
  id?: number;
  Name?: string;
  Url?: string;
  Creation_time?: string; // Nếu bạn muốn xử lý ngày thì có thể sử dụng kiểu Date
  Update_time?: string; // Tương tự, nếu muốn xử lý ngày thì có thể sử dụng kiểu Date
}

interface IImage {
  id: number;
  Image: string;
  Creation_time: string;
  Update_time: string;
  Job: number;
  Items: number;
}

interface ILocation {
  id: number;
  Name: string;
  Url: string | null;
  Creation_time: string;
  Update_time: string;
}

interface IAddress {
  id: number;
  Name: string;
  Name_en: string;
  Url: string | null;
  Creation_time: string;
  Update_time: string;
  Location: ILocation;
}

interface IJobPost {
  id: number;
  User: IUser;
  images_A1: IImage[];
  Location: ILocation;
  Address: IAddress;
  Career: IJob;
  Type_of_work: IJob;
  Pay_forms: IJob;
  Sex: IJob;
  Experience: IJob;
  Map: string;
  Title: string;
  Number_of_recruitment: string;
  Wage: string;
  Detailed_description: string;
  Minimum_age: string;
  Maximum_age: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}
interface IJobPostCreate {
  images_A1_data?: UploadFile<any>[];
  Location?: number | string;
  Address?: number | string;
  Career?: number | string;
  Type_of_work?: number | string;
  Pay_forms?: number | string;
  Sex?: number | string;
  Experience?: number | string;
  Map?: number | string;
  Title?: string;
  Number_of_recruitment?: number;
  Wage?: number;
  Detailed_description?: string;
  Minimum_age?: number;
  Maximum_age?: number;
  Video?: string;
  Contact_phone_number?: string;
  Url?: string;
}

interface IGoodHousePost {
  id: number;
  User: IUser;
  images_A2: IImage[];
  Location: {
    id: number;
    Address_Location: IAddress & { Location: ILocation }[];
    Name: string;
    Url: string | null;
    Creation_time: string;
    Update_time: string;
  };
  Address: IAddress & { Location: ILocation };
  Category: IJob;
  Interior_condition: IJob;
  Seller_information: IJob;
  Map: string;
  Acreage: string;
  Price: number | null;
  Deposit_amount: string;
  Title: string;
  Number_of_bedrooms: string;
  Number_of_bathrooms: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface IRefrigeratorPost {
  id: number;
  User: IUser;
  images_A3: IImage[];
  Location: ILocation & { Address_Location: IAddress[] };
  Address: IAddress;
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Volume: IJob;
  Wattage: IJob;
  Washing_volume: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface IMachinePost {
  id: number;
  User: IUser;
  images_A4: IImage[];
  Location: {
    id: number;
    Name: string;
    Url: string | null;
    Creation_time: string;
    Update_time: string;
    Address_Location: IAddress[];
  };
  Address: IAddress;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface ITaxiPost {
  id: number;
  User: IUser;
  images_A5: IImage[];
  Location: ILocation & { Address_Location: IAddress[] };
  Address: IAddress;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

// Vehicle

interface IVehicle {
  id: number;
  User: User;
  images_A3: Image[];
  Location: ILocation;
  Address: IAddress;
  Category: IJob;
  Map: string;
  Free_giveaway: string;
  Price: string;
  Title: string;
  Detailed_description: string;
  Video: string;
  Contact_phone_number: string;
  Url: string;
  Creation_time: string;
  Update_time: string;
}

interface IElectroDevice extends IVehicle {
  Color: Color;
  Hard_drive: HardDrive;
  Monitor_card: MonitorCard;
  Screen_size: ScreenSize;
}

interface IServices {
  id: number;
  User: User;
  images_A3: Image[];
  Location: ILocation;
  Address: IAddress;
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: null | string;
  Free_giveaway: null | string;
  Price: null | string;
  Title: null | string;
  Detailed_description: null | string;
  Video: null | string;
  Contact_phone_number: null | string;
  Url: null | string;
  Creation_time: string;
  Update_time: string;
}

interface IHomeAppliance {
  id: number;
  User: IUser;
  images_A3: IImage[];
  Location: ILocation;
  Address: IAddress & {
    Location: ILocation;
  };
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: null | string;
  Free_giveaway: null | string;
  Price: null | string;
  Title: null | string;
  Detailed_description: null | string;
  Video: null | string;
  Contact_phone_number: null | string;
  Url: null | string;
  Creation_time: string;
  Update_time: string;
}

interface IShopViet {
  id: number;
  User: IUser;
  images_A3: {
    id: number;
    Image: string;
    Creation_time: string;
    Update_time: string;
    Items: number;
  }[];
  Location: ILocation;
  Address: IAddress & {
    Location: ILocation;
  };
  Category: IJob;
  Usage_status: IJob;
  Seller_information: IJob;
  Guarantee: IJob;
  Map: null | string;
  Free_giveaway: null | string;
  Price: null | string;
  Title: null | string;
  Detailed_description: null | string;
  Video: null | string;
  Contact_phone_number: null | string;
  Url: null | string;
  Creation_time: string;
  Update_time: string;
}
