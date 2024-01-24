// import React, { useContext, useEffect, useState } from 'react';
// import SelectCustom from '../SelectCustom';
// import { Flex, Space, notification } from 'antd';
// import InputCustom from '../InputCustom';
// import TextAreaCustom from '../TextAreaCustom';
// import ModalLocationSelectCustom from '../ModalLocationSelectCustom';

// import { PreviewDataContext } from '@/app/(app)/(HeaderLayout)/(Auth)/layout';
// import HorizontalSelect from '../HorizontalSelect';
// import { IJobPostCreate } from '@/types/Job';

// export default function CreatePostCarForm() {
//   const previewData = useContext(PreviewDataContext);

//   useEffect(() => {
//     // fetchCareerList().then((res) => setCareerList(res.data.data || []));
//     // fetchExperienceList().then((res) => setExperienceList(res.data.data || []));
//     // fetchPayFormsList().then((res) => setPayFormsList(res.data.data || []));
//     // fetchWorkTypeList().then((res) => setWorkTypeList(res.data.data || []));
//   }, []);
//   const titleClassName = 'pt-[20px] text-[20px] font-semibold';
//   return (
//     <Flex vertical gap={20}>
//       <p className={titleClassName}>Thông tin chi tiết</p>
//       <Flex gap={10}>
//         <SelectCustom
//           // className="flex-1"
//           required
//           defaultValue={previewData.previewData?.Title}
//           onChange={(e) => onChangeData({ Title: e as string })}
//           label={'Hãng'}
//           data={[{ id: 1, Name: 'asdassda' }]}
//         />
//         <InputCustom
//           // className="flex-1"
//           required
//           type="number"
//           defaultValue={previewData.previewData?.Number_of_recruitment}
//           onChange={(e) => onChangeData({ Number_of_recruitment: e as number })}
//           label={'Năm Sản xuất'}
//         />
//       </Flex>
//       <HorizontalSelect
//         label="Hộp số"
//         data={[
//           { id: 1, Name: 'asdassda1' },
//           { id: 2, Name: 'asdassda2' },
//           { id: 3, Name: 'asdassda3' },
//           { id: 4, Name: 'asdassda4' },
//           { id: 5, Name: 'asdassda5' },
//         ]}
//       />
//       <HorizontalSelect
//         label="Nhiên liệu"
//         data={[
//           { id: 1, Name: 'asdassda1' },
//           { id: 2, Name: 'asdassda2' },
//           { id: 3, Name: 'asdassda3' },
//           { id: 4, Name: 'asdassda4' },
//         ]}
//       />
//       <Flex gap={10}>
//         <SelectCustom
//           // className="flex-1"
//           required
//           defaultValue={previewData.previewData?.Title}
//           onChange={(e) => onChangeData({ Title: e as string })}
//           label={'Bảo hành'}
//           data={[{ id: 1, Name: 'asdassda' }]}
//         />
//         <InputCustom
//           // className="flex-1"
//           required
//           type="number"
//           defaultValue={previewData.previewData?.Number_of_recruitment}
//           onChange={(e) => onChangeData({ Number_of_recruitment: e as number })}
//           label={'Số chỗ'}
//         />
//       </Flex>
//       <HorizontalSelect
//         label="Tình trạng"
//         data={[
//           { id: 1, Name: 'Đã sử dụng' },
//           { id: 2, Name: 'Mới' },
//         ]}
//       />
//       <Flex gap={10}>
//         <SelectCustom
//           // className="flex-1"
//           required
//           defaultValue={previewData.previewData?.Title}
//           onChange={(e) => onChangeData({ Title: e as string })}
//           label={'Số km đã đi'}
//           data={[{ id: 1, Name: 'asdassda' }]}
//         />
//         <InputCustom
//           // className="flex-1"
//           required
//           type="number"
//           defaultValue={previewData.previewData?.Number_of_recruitment}
//           onChange={(e) => onChangeData({ Number_of_recruitment: e as number })}
//           label={'Giá'}
//         />
//       </Flex>
//       <p className={titleClassName}>Tiêu đề tin đăng và mô tả chi tiết</p>
//       <InputCustom required label={'Tiêu đề tin đăng'} maxLength={70} />
//       <TextAreaCustom required label={'Mô tả chi tiết'} maxLength={200} />
//       <p className={titleClassName}>Thông tin người bán</p>
//       <HorizontalSelect
//         label="Bạn là"
//         data={[
//           { id: 1, Name: 'Cá nhân' },
//           { id: 2, Name: 'Bán chuyên' },
//         ]}
//       />
//       <ModalLocationSelectCustom label={'Địa chỉ'} />
//     </Flex>
//   );
// }
