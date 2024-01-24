import CreatePostElectronicDeviceForm from '@/components/common/Form/CreatePostElectronicDeviceForm';
import CreatePostWholeHouse from '@/components/common/Form/CreatePostWholeHouse';
import CreatePostWorkForm from '@/components/common/Form/CreatePostWorkForm';

const getFormByKey = (key: string) => {
  switch (key) {
    case 'CAR':
      return;
    case 'MOTEL-ROOM-DORMITORY':
      return <CreatePostWholeHouse />;
    case 'MOTORBIKE':
      return;
    case 'COMMON-VEHICLE':
      return;
    case 'PHONE':
      return;
    case 'LAPTOP':
      return;
    case 'TABLET':
      return;
    case 'DESKTOP':
      return;
    case 'COMMON-ELECTRONICE-DEVICE':
      return <CreatePostElectronicDeviceForm />;
    case 'COMMON-SERVICE':
      return;
    case 'COMMON-FURNITURE-APPLIANCES':
      return;
    case 'COMMON-VIETSHOP':
      return;
    case 'WORK':
      return <CreatePostWorkForm />;
    // case 'CAR':
    //   return;
    // case 'CAR':
    //   return;
    // case 'CAR':
    //   return;

    default:
      break;
  }
};
export default getFormByKey;
