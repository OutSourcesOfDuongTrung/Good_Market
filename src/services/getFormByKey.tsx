import CreatePostAirConditionForm from '@/components/common/Form/CreatePostAirConditionForm';
import CreatePostBusinessPremisesForm from '@/components/common/Form/CreatePostBusinessPremisesForm';
import CreatePostCarForm from '@/components/common/Form/CreatePostCarForm';
import CreatePostCommonVehicleForm from '@/components/common/Form/CreatePostCommonVehicleForm';
import CreatePostDesktopForm from '@/components/common/Form/CreatePostDesktopForm';
import CreatePostElectronicDeviceForm from '@/components/common/Form/CreatePostElectronicDeviceForm';
import CreatePostFridgeForm from '@/components/common/Form/CreatePostFridgeForm';
import CreatePostHomeApplianceForm from '@/components/common/Form/CreatePostHomeApplianceForm';
import CreatePostLaptopForm from '@/components/common/Form/CreatePostLaptopForm';
import CreatePostMotobikeForm from '@/components/common/Form/CreatePostMotobikeForm';
import CreatePostPhoneForm from '@/components/common/Form/CreatePostPhoneForm';
import CreatePostServiceForm from '@/components/common/Form/CreatePostServiceForm';
import CreatePostTabletForm from '@/components/common/Form/CreatePostTabletForm';
import CreatePostTaxiForm from '@/components/common/Form/CreatePostTaxiForm';
import CreatePostWholeHouse from '@/components/common/Form/CreatePostWholeHouse';
import CreatePostWorkForm from '@/components/common/Form/CreatePostWorkForm';

const getFormByKey = (key: string) => {
  switch (key) {
    case 'CAR':
      return <CreatePostCarForm />;
    case 'MOTEL-ROOM-DORMITORY':
      return <CreatePostWholeHouse />;
    case 'WHOLE-HOUSE':
      return <CreatePostWholeHouse />;
    case 'BUSINESS-PREMISES':
      return <CreatePostBusinessPremisesForm />;
    case 'FRIDGE':
      return <CreatePostFridgeForm />;
    case 'AIR-CONDITIONING-AIR-CONDITIONING':
      return <CreatePostAirConditionForm />;
    case 'WASHING-MACHINE':
      return <CreatePostFridgeForm />;
    case 'MOTORBIKE':
      return <CreatePostMotobikeForm />;
    case 'COMMON-VEHICLE':
      return <CreatePostCommonVehicleForm />;
    case 'PHONE':
      return <CreatePostPhoneForm />;
    case 'LAPTOP':
      return <CreatePostLaptopForm />;
    case 'TABLET':
      return <CreatePostTabletForm />;
    case 'DESKTOP':
      return <CreatePostDesktopForm />;
    case 'COMMON-ELECTRONICE-DEVICE':
      return <CreatePostElectronicDeviceForm />;
    case 'COMMON-SERVICE':
      return <CreatePostServiceForm />;
    case 'COMMON-FURNITURE-APPLIANCES':
      return <CreatePostHomeApplianceForm />;
    case 'COMMON-VIETSHOP':
      return;
    case 'MACHINE':
      return;
    case 'WORK':
      return <CreatePostWorkForm />;
    case 'TAXI':
      return <CreatePostTaxiForm />;
    // case 'CAR':
    //   return;
    // case 'CAR':
    //   return;

    default:
      break;
  }
};
export default getFormByKey;
