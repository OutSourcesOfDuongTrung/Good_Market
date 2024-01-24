'use client';
import ModalCategorySelectCustom from '@/components/common/ModalCategorySelectCustom';
import PreviewProduct from '@/components/common/PreviewProduct';
import {
  InboxOutlined,
  PlusOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import {
  Flex,
  GetProp,
  Image,
  Modal,
  Space,
  UploadFile,
  UploadProps,
  notification,
} from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import Link from 'next/link';
import { useContext, useEffect, useState } from 'react';
import { PreviewDataContext } from '../layout';
import { fetchCreateWorkPost } from '@/api/jobRequest';
import CreatePostGooHouse from '@/components/common/Form/CreatePostGooHouse';
import CreatePostMotelRoomForm from '@/components/common/Form/CreatePostMotelRoomForm';
import getBase64, { FileType } from '@/services/getBase64';

export default function CreatePostPage() {
  const previewData = useContext(PreviewDataContext);
  const [categoryId, setCategoryId] = useState<string | number>();
  const [preview, setPreview] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>(
    previewData.previewData?.images_A1_data || []
  );
  const [videoFileList, setVideoFileList] = useState<UploadFile[]>(
    previewData.previewData?.Video || []
  );

  // useEffect(() => {

  // }, [fileList]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview: (file: UploadFile) => Promise<void> = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj as FileType);
    }

    setPreviewImage(file.url || (file.preview as string));
    setPreviewOpen(true);
    setPreviewTitle(
      file.name ||
        (file.url ? file.url.substring(file.url.lastIndexOf('/') + 1) : '')
    );
  };

  const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
    const newList: UploadFile<any>[] = newFileList.map((item) => ({
      ...item,
      status: 'done',
    }));
    setFileList(newList);
    previewData.setPreviewData?.((prevData) => ({
      ...prevData,
      images_A1_data: newList,
    }));
  };
  const handleChangeVideo: UploadProps['onChange'] = ({
    fileList: newFileList,
  }) => {
    const newList: UploadFile<any>[] = newFileList.map((item) => ({
      ...item,
      status: 'done',
    }));
    setVideoFileList(newList);
    previewData.setPreviewData?.((prevData) => ({
      ...prevData,
      images_A1_data: newList,
    }));
  };

  const onSubmit = async () => {
    const isValid = !Object.values(previewData).some((value) => !value);

    if (!isValid) {
      return notification.error({
        message: 'Dữ liệu bạn nhập không đủ hoặc không đúng!',
        description: 'Vui lòng kiểm tra lại.',
      });
    }

    await fetchCreateWorkPost(previewData.previewData)
      .then((res) =>
        notification.success({
          message: 'Đã tạo',
          description: 'Đã tạo bài đăng',
        })
      )
      .catch((err) =>
        notification.error({
          message: 'Lỗi',
          description: 'Tạo bài đăng thất bại',
        })
      );
  };
  return (
    <div className="w-3/5 flex flex-col gap-y-5 py-[20px] px-[10px] m-auto bg-white mt-[20px] rounded-lg">
      {preview ? (
        <PreviewProduct onCancel={() => setPreview(false)} />
      ) : (
        <CreatePostMotelRoomForm />
        // <div className="w-full flex gap-x-5">
        //   <div className="flex-1">
        //     <b>Ảnh / video sản phẩm</b>
        //     <Space className="flex text-[#9b9b9b] text-[13px]">
        //       Xem thêm về
        //       <Link href="/">
        //         <p className="text-blue-500 underline text-wrap">
        //           Quy định đăng tin của chợ tốt
        //         </p>
        //       </Link>
        //     </Space>
        //     <div className="w-[300px] min-h-[200px] flex items-center justify-center">
        //       <Dragger
        //         className="truncate"
        //         name="images_A1_data"
        //         listType="picture"
        //         fileList={fileList}
        //         onPreview={handlePreview}
        //         onChange={handleChange}
        //       >
        //         <p className="ant-upload-drag-icon">
        //           <InboxOutlined />
        //         </p>
        //         <p className="ant-upload-text">
        //           Click or drag file to this area to upload
        //         </p>
        //       </Dragger>
        //       <Modal
        //         open={previewOpen}
        //         title={previewTitle}
        //         footer={null}
        //         onCancel={handleCancel}
        //       >
        //         <Image
        //           alt="example"
        //           style={{ width: '100%' }}
        //           src={previewImage}
        //         />
        //       </Modal>
        //     </div>
        //     <div className="w-[300px] min-h-[200px] flex items-center justify-center">
        //       <Dragger
        //         className="truncate"
        //         name="Video"
        //         listType="picture"
        //         fileList={videoFileList}
        //         // onPreview={handlePreview}
        //         onChange={handleChangeVideo}
        //       >
        //         <p className="ant-upload-drag-icon">
        //           <VideoCameraOutlined />
        //         </p>
        //         <p className="ant-upload-text">
        //           Click or drag file to this area to upload
        //         </p>
        //       </Dragger>
        //       <Modal
        //         open={previewOpen}
        //         title={previewTitle}
        //         footer={null}
        //         onCancel={handleCancel}
        //       >
        //         <Image
        //           alt="example"
        //           style={{ width: '100%' }}
        //           src={previewImage}
        //         />
        //       </Modal>
        //     </div>
        //   </div>
        //   <div className="flex-[2_2_0%]">
        //     <ModalCategorySelectCustom
        //       // onChange={(e) => setCategoryId(e)}
        //       label="Danh mục tin đăng"
        //     />
        //     <CreatePostMotelRoomForm />
        //     {/* <CreatePostGooHouse /> */}
        //     {/* <ElectronicDeviceForm /> */}
        //     {/* <CarForm /> */}
        //     {/* <CreatePostWorkForm onPreview={() => setPreview(true)} /> */}
        //     <Flex gap={20} className="my-[20px]">
        //       <button
        //         onClick={() => setPreview(true)}
        //         className="flex-1 py-[10px] rounded-lg border text-[#da7502] border-[#da7502]  hover:bg-[#ffe9c2]"
        //       >
        //         Xem trước
        //       </button>
        //       <button
        //         onClick={onSubmit}
        //         className="flex-1 py-[10px] rounded-lg border text-white bg-[#da7502] border-[#da7502] hover:text-white hover:bg-[#da6702]"
        //       >
        //         Đăng tin
        //       </button>
        //     </Flex>
        //   </div>
        // </div>
      )}
    </div>
  );
}
