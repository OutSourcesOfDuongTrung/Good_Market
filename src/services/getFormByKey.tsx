import CreatePostAirConditionForm from '@/components/common/Form/CreatePostAirConditionForm';
import CreatePostBusinessPremisesForm from '@/components/common/Form/CreatePostBusinessPremisesForm';
import CreatePostCarForm from '@/components/common/Form/CreatePostCarForm';
import CreatePostCommonVehicleForm from '@/components/common/Form/CreatePostCommonVehicleForm';
import CreatePostDesktopForm from '@/components/common/Form/CreatePostDesktopForm';
import CreatePostElectronicDeviceForm from '@/components/common/Form/CreatePostElectronicDeviceForm';
import CreatePostFridgeForm from '@/components/common/Form/CreatePostFridgeForm';
import CreatePostHomeApplianceForm from '@/components/common/Form/CreatePostHomeApplianceForm';
import CreatePostLaptopForm from '@/components/common/Form/CreatePostLaptopForm';
import CreatePostMachineryEquipmentForm from '@/components/common/Form/CreatePostMachineryEquipmentForm';
import CreatePostMotobikeForm from '@/components/common/Form/CreatePostMotobikeForm';
import CreatePostPhoneForm from '@/components/common/Form/CreatePostPhoneForm';
import CreatePostServiceForm from '@/components/common/Form/CreatePostServiceForm';
import CreatePostTabletForm from '@/components/common/Form/CreatePostTabletForm';
import CreatePostTaxiForm from '@/components/common/Form/CreatePostTaxiForm';
import CreatePostWholeHouse from '@/components/common/Form/CreatePostWholeHouse';
import CreatePostWorkForm from '@/components/common/Form/CreatePostWorkForm';

const getFormByKey = (key: string, data?: any) => {
  switch (key) {
    case 'CAR':
      return <CreatePostCarForm data={data} />;
    case 'MOTEL-ROOM-DORMITORY':
      return <CreatePostWholeHouse data={data} />;
    case 'WHOLE-HOUSE':
      return <CreatePostWholeHouse data={data} />;
    case 'BUSINESS-PREMISES':
      return <CreatePostBusinessPremisesForm data={data} />;
    case 'FRIDGE':
      return <CreatePostFridgeForm data={data} />;
    case 'AIR-CONDITIONING-AIR-CONDITIONING':
      return <CreatePostAirConditionForm data={data} />;
    case 'WASHING-MACHINE':
      return <CreatePostFridgeForm data={data} />;
    case 'MOTORBIKE':
      return <CreatePostMotobikeForm data={data} />;
    case 'COMMON-VEHICLE':
      return <CreatePostCommonVehicleForm data={data} />;
    case 'PHONE':
      return <CreatePostPhoneForm data={data} />;
    case 'LAPTOP':
      return <CreatePostLaptopForm data={data} />;
    case 'TABLET':
      return <CreatePostTabletForm data={data} />;
    case 'DESKTOP':
      return <CreatePostDesktopForm data={data} />;
    case 'COMMON-ELECTRONICE-DEVICE':
      return <CreatePostElectronicDeviceForm data={data} />;
    case 'COMMON-SERVICE':
      return <CreatePostServiceForm data={data} />;
    case 'COMMON-FURNITURE-APPLIANCES':
      return <CreatePostHomeApplianceForm data={data} />;
    case 'COMMON-VIETSHOP':
      return;
    case 'MACHINE':
      return <CreatePostMachineryEquipmentForm data={data} />;
    case 'WORK':
      return <CreatePostWorkForm data={data} />;
    case 'TAXI':
      return <CreatePostTaxiForm data={data} />;
    // case 'CAR':
    //   return;
    // case 'CAR':
    //   return;

    default:
      break;
  }
};
export default getFormByKey;
