import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import CMSCategory from '@/components/CMSCategory';
import {
  CloseOutlined,
  ColumnHeightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Form, Image, Input, Modal, Popconfirm, Switch, message } from 'antd';
import { useForm } from 'antd/es/form/Form';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useCallback, useEffect, useState } from 'react';
import useSWR, { useSWRConfig } from 'swr';
import { useEffectOnce } from 'usehooks-ts';

export default function CategoryElectronicDevicePage() {
  const [categoryList, setCategoryList] = useState<IJob[]>([]);
  const [valueFilter, setValueFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [dataTotal, setDataTotal] = useState(0);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [currentID, setCurrentID] = useState(0);
  const [currentValue, setcurrentValue] = useState('');
  const { mutate } = useSWRConfig();
  const [form] = useForm();

  const onFinish = async (e: any) => {
    await instanceAxios
      .patch(`ElectronicDevice/category/${currentID}/`, e)
      .then((res) => {
        form.resetFields();
        setOpenModalCreate(false);
        message.success('Đã cập nhật');
        mutate('fetchCategoryElectronicDeviceList');
      })
      .catch((err) => {
        message.error('Thao tác thất bại');
      });
  };

  const onSearch = (e: string) => {
    setValueFilter(e);
  };
  const onChangPage = (e: number) => {
    setCurrentPage(e);
  };

  const fetchDelete = async (id: number) => {
    await instanceAxios
      .delete(`ElectronicDevice/category/${id}/`)
      .then((res) => {
        message.success('Xóa thành công');
        mutate('fetchCategoryElectronicDeviceList');
      })
      .catch((err) => {
        message.error('Thao tác thất bại');
      });
  };

  const fetchCategoryElectronicDeviceList = useCallback(async () => {
    await instanceAxios
      .get(`ElectronicDevice/category/`, {
        params: {
          ...(valueFilter && { search: valueFilter }),
          page_size: currentPage,
        },
      })
      .then((res) => {
        setDataTotal(res.data.data.count || [...res.data.data].length);
        setCategoryList(res.data.data || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, valueFilter]);
  useSWR(
    'fetchCategoryElectronicDeviceList',
    fetchCategoryElectronicDeviceList
  );

  useEffect(() => {
    fetchCategoryElectronicDeviceList();
  }, [fetchCategoryElectronicDeviceList]);
  // useEffect(() => {
  //   fetchUserList(valueFilter);
  // }, [fetchUserList, valueFilter]);
  const columns: ColumnsType<IJob> = [
    {
      title: '#',
      render: (value, record, index) => <ColumnHeightOutlined />,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (value, record, index) => record.id,
    },
    {
      title: 'Tên danh mục',
      dataIndex: 'Name',
    },
    {
      title: 'Hành động',
      width: 150,
      className: 'flex item-center justify-center',
      render: (value, record, index) => (
        <div className="flex gap-x-5 text-[20px] text-[#aea9c6]">
          <FormOutlined
            onClick={() => {
              setcurrentValue(record.Name || '');
              setCurrentID(record.id || 0);
              setOpenModalCreate(true);
            }}
          />
          <Popconfirm
            title={'Xác nhận xóa'}
            onConfirm={() => fetchDelete(record.id || 0)}
          >
            <CloseOutlined />
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <CMSCategory
        label="Các loại công việc của hệ thống"
        onChangPage={onChangPage}
        dataTotal={dataTotal}
        onSearch={onSearch}
        data={categoryList}
        createAble={true}
        create={{
          url: 'ElectronicDevice/category/',
          inputName: ['Name'],
          // body: { asdas: 'asdd' },
          onSucces(res) {
            mutate('fetchCategoryElectronicDeviceList');
            message.success(res.data.message);
          },
          onFailed(err) {
            message.error(err.response.data.detail);
          },
        }}
        columns={columns}
      />
      <Modal
        styles={{
          mask: {
            backdropFilter: 'blur(5px)',
          },
        }}
        centered
        title={<p className="text-center">Chỉnh sửa</p>}
        open={openModalCreate}
        onCancel={() => setOpenModalCreate(false)}
        onOk={() => form.submit()}
      >
        <Form form={form} onFinish={onFinish} name="basic" layout="vertical">
          <Form.Item label={'Tên'} name={'Name'} rules={[{ required: true }]}>
            <Input defaultValue={currentValue} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
