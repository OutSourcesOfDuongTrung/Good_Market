import { fetchCreateGoodHousePost } from '@/api/goodHouseRequest';
import {
  fetchCareerList,
  fetchCreateWorkPost,
  fetchExperienceList,
  fetchPayFormsList,
  fetchWorkTypeList,
} from '@/api/jobRequest';
import getBase64, { FileType } from '@/services/getBase64';
import { IJob } from '@/types/Job';
import { InboxOutlined, VideoCameraOutlined } from '@ant-design/icons';
import {
  Flex,
  Image,
  Modal,
  Space,
  UploadFile,
  UploadProps,
  notification,
} from 'antd';
import Dragger from 'antd/es/upload/Dragger';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import HorizontalSelect from '../HorizontalSelect';
import InputCustom from '../InputCustom';
import ModalCategorySelectCustom from '../ModalCategorySelectCustom';
import ModalLocationSelectCustom from '../ModalLocationSelectCustom';
import PreviewProduct from '../PreviewProduct';
import SelectCustom from '../SelectCustom';
import TextAreaCustom from '../TextAreaCustom';

interface Props {
  onPreview?: () => void;
}

export default function CreatePostWorkForm(props: Props) {
  const [preview, setPreview] = useState(false);
  const [careerList, setCareerList] = useState<IJob[]>([]);
  const [experienceList, setExperienceList] = useState<IJob[]>([]);
  const [payFormsList, setPayFormsList] = useState<IJob[]>([]);
  const [workTypeList, setWorkTypeList] = useState<IJob[]>([]);
  const [experienceId, setExperienceId] = useState<number | string>('');
  const [workTypeId, setWorkTypeId] = useState<number | string>('');
  const [locationId, setLocationId] = useState<number | string>('');
  const [addressId, setAddressId] = useState<number | string>('');
  const [careerId, setCareerId] = useState<number | string>('');
  const [title, setTitle] = useState<number | string>('');
  const [wage, setWage] = useState<number | string>('');
  const [recruitment, setRecruitment] = useState<number | string>('');
  const [payForm, setPayForm] = useState<number | string>('');
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(0);
  const [genderId, setGenderId] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');
  const [description, setDescription] = useState('');
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [videoFileList, setVideoFileList] = useState<UploadFile[]>([]);

  useEffect(() => {
    fetchCareerList().then((res) => setCareerList(res.data.data || []));
    fetchExperienceList().then((res) => setExperienceList(res.data.data || []));
    fetchPayFormsList().then((res) => setPayFormsList(res.data.data || []));
    fetchWorkTypeList().then((res) => setWorkTypeList(res.data.data || []));
  }, []);
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
  };
  const handleChangeVideo: UploadProps['onChange'] = ({
    fileList: newFileList,
  }) => {
    const newList: UploadFile<any>[] = newFileList.map((item) => ({
      ...item,
      status: 'done',
    }));
    setVideoFileList(newList);
  };

  const onSubmit = async () => {
    const formData = new FormData();
    formData.append('Address', addressId as string);
    formData.append('Location', locationId as string);
    formData.append('Title', title as string);
    formData.append('Number_of_recruitment', recruitment as string);
    formData.append('Career', careerId as string);
    formData.append('Type_of_work', workTypeId as string);
    formData.append('Pay_forms', payForm as string);
    formData.append('Wage', wage as string);
    formData.append('Detailed_description', description as string);
    formData.append('Minimum_age', minAge as unknown as string);
    formData.append('Maximum_age', maxAge as unknown as string);
    formData.append('Sex', genderId as unknown as string);
    formData.append('Experience', experienceId as string);
    // formData.append('Contact_phone_number', locationId as string);
    formData.append('Url', locationId as string);
    for (let index = 0; index < fileList.length; index++) {
      formData.append('images_A1_data', fileList[index]?.originFileObj as Blob);
    }
    formData.append('Video', videoFileList[0]?.originFileObj as Blob);

    await fetchCreateWorkPost(formData)
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
  const titleClassName = 'py-[30px] text-[20px] font-semibold';
  return preview ? (
    <PreviewProduct onCancel={() => setPreview(false)} />
  ) : (
    <div className="w-full flex gap-x-5">
      <div className="flex-1">
        <b>Ảnh / video sản phẩm</b>
        <Space className="flex text-[#9b9b9b] text-[13px]">
          Xem thêm về
          <Link href="/">
            <p className="text-blue-500 underline text-wrap">
              Quy định đăng tin của chợ tốt
            </p>
          </Link>
        </Space>
        <div className="w-[300px] min-h-[200px] flex items-center justify-center">
          <Dragger
            className="truncate w-full"
            name="images_A1_data"
            listType="picture"
            fileList={fileList}
            accept="image/*"
            onPreview={handlePreview}
            onChange={handleChange}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <Flex vertical justify="center">
              <p className="ant-upload-text !text-[14px]">
                Hình ảnh có kích thước tối thiệu{' '}
              </p>
              <p className="ant-upload-text !text-[14px]">240 x 240</p>
            </Flex>
          </Dragger>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <Image alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
        <div className="w-[300px] min-h-[200px] py-[20px] flex items-center justify-center">
          <Dragger
            className="truncate w-full"
            name="Video"
            listType="picture"
            fileList={videoFileList}
            maxCount={1}
            accept="video/*"
            // onPreview={handlePreview}
            onChange={handleChangeVideo}
          >
            <p className="ant-upload-drag-icon">
              <VideoCameraOutlined />
            </p>
            <p className="ant-upload-text !text-[14px]">Đăng tối đa 1 video </p>
          </Dragger>
          <Modal
            open={previewOpen}
            title={previewTitle}
            footer={null}
            onCancel={handleCancel}
          >
            <Image alt="example" style={{ width: '100%' }} src={previewImage} />
          </Modal>
        </div>
      </div>
      <div className="flex-[2_2_0%]">
        <ModalCategorySelectCustom
          // onChange={(e) => setCategoryId(e)}
          label="Danh mục tin đăng"
        />
        <Flex vertical>
          <p className={titleClassName}>Thông tin nhà tuyển dụng</p>
          <ModalLocationSelectCustom
            onChange={(location, address) => {
              setLocationId((location as number) || 0);
              setAddressId((address as number) || 0);
            }}
            label={'Địa chỉ'}
          />
          <p className={titleClassName}>Nội dung đăng tuyển</p>
          <Flex vertical gap={20}>
            <InputCustom
              required
              defaultValue={title}
              onChange={(e) => setTitle(e as string)}
              label={'Tiêu đề tin đăng'}
            />
            <InputCustom
              required
              type="number"
              defaultValue={recruitment}
              onChange={(e) => setRecruitment(e as number)}
              label={'Số lượng tuyển dụng'}
            />
            <SelectCustom
              onChange={(e) => setCareerId(e as number)}
              data={careerList}
              defaultValue={careerId}
              label={'Nghành nghề'}
            />
            <SelectCustom
              onChange={(e) => setWorkTypeId(e as number)}
              data={workTypeList}
              defaultValue={workTypeId}
              label={'Loại công việc'}
            />
            <SelectCustom
              onChange={(e) => setPayForm(e as number)}
              data={payFormsList}
              defaultValue={payForm}
              required
              label={'Hình thức trả lương'}
            />
            <InputCustom
              required
              defaultValue={wage}
              onChange={(e) => setWage(e as number)}
              type="number"
              label={'Lương'}
            />
            <TextAreaCustom
              onChange={(e) => setDescription(e as string)}
              required
              label={'Mô tả chi tiết'}
            />
            <p className="py-[10px] text-[20px] font-semibold">
              Thông tin thêm
            </p>

            <Flex gap={20}>
              <InputCustom
                required
                type="number"
                defaultValue={minAge}
                onChange={(e) => setMinAge(e as number)}
                label={'Độ tuổi tối thiểu'}
              />
              <InputCustom
                required
                defaultValue={maxAge}
                onChange={(e) => setMaxAge(e as number)}
                type="number"
                label={'Độ tuổi tối đa'}
              />
            </Flex>

            <Flex className="text-[14px] cursor-pointer" gap={10}>
              <HorizontalSelect
                onChange={(e) => setGenderId(e as number)}
                defaultValue={genderId}
                data={[
                  { id: 1, Name: 'Nam' },
                  { id: 2, Name: 'Nữ' },
                ]}
                label={'Giới tính'}
              />
            </Flex>
            <SelectCustom
              onChange={(e) => setExperienceId(e as number)}
              data={experienceList}
              defaultValue={experienceId}
              required
              label={'Kinh nghiệm'}
            />
          </Flex>
          <Flex gap={20} className="my-[20px]">
            <button
              onClick={() => setPreview(true)}
              className="flex-1 py-[10px] rounded-lg border text-[#da7502] border-[#da7502]  hover:bg-[#ffe9c2]"
            >
              Xem trước
            </button>
            <button
              onClick={onSubmit}
              className="flex-1 py-[10px] rounded-lg border text-white bg-[#da7502] border-[#da7502] hover:text-white hover:bg-[#da6702]"
            >
              Đăng tin
            </button>
          </Flex>
        </Flex>
      </div>
    </div>
  );
}
