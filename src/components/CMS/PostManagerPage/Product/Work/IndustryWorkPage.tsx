import instanceAxios from '@/api/instanceAxios';
import { useAppDispatch } from '@/app/hooks';
import CMSCategory from '@/components/CMSCategory';
import {
  CloseOutlined,
  ColumnHeightOutlined,
  FormOutlined,
} from '@ant-design/icons';
import { Image, Switch, message } from 'antd';
import Table, { ColumnsType } from 'antd/es/table';
import React, { useCallback, useEffect, useState } from 'react';
import { useEffectOnce } from 'usehooks-ts';

export default function IndustryWorkPage() {
  const [workList, setWorkList] = useState<IUser[]>([]);
  const [valueFilter, setValueFilter] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const dispatch = useAppDispatch();

  const onSearch = (e?: string) => {
    if (e) setValueFilter(e);
  };
  const onChangPage = (e: number) => {
    setCurrentPage(e);
  };

  const fetchUserList = useCallback(async () => {
    await instanceAxios
      .get(`job/career/`, {
        params: {
          ...(valueFilter && { search: valueFilter }),
          page_size: currentPage,
        },
      })
      .then((res) => {
        setWorkList(res.data.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage, valueFilter]);
  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);
  // useEffect(() => {
  //   fetchUserList(valueFilter);
  // }, [fetchUserList, valueFilter]);
  const columns: ColumnsType<IUser> = [
    {
      render: (value, record, index) => <ColumnHeightOutlined />,
    },
    {
      title: 'ID',
      dataIndex: 'id',
      render: (value, record, index) => record.id,
    },
    {
      title: 'Ảnh',
      dataIndex: 'avatar',
      render: (value, record, index) => (
        <Image
          className="rounded"
          alt=""
          src={record.avatar || ''}
          width={100}
          height={60}
        />
      ),
    },
    {
      title: 'Tên đăng nhập',
      dataIndex: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Họ',
      dataIndex: 'last_name',
    },
    {
      title: 'Tên',
      dataIndex: 'first_name',
    },
    {
      title: 'Chức vụ',
      dataIndex: 'address',
      render: (value, record, index) =>
        !record.is_staff && !record.is_staff ? 'ADMIN' : 'MEMBER',
    },
  ];

  return (
    <CMSCategory
      label="Người dùng"
      onChangPage={onChangPage}
      dataTotal={100}
      onSearch={onSearch}
      data={workList}
      createAble={true}
      create={{
        url: 'job/career/',
        body: { asdas: 'asdd' },
        onSucces(res) {
          alert('OK');
        },
        onFailed(err) {
          message.error(err.response.data.detail);
        },
      }}
      columns={columns}
    />
  );
}
