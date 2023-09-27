import React, { useState } from 'react';
import { Space, Table, Tag, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import Divider from '../../../shared/Divider';

const { Text } = Typography;
interface DataType {
  key: React.Key;
  name: any;
}

const TableHeader = ({
  label,
  count,
  active
}: {
  label: string;
  count: number;
  active?: boolean;
}) => {
  return (
    <Text
      className={`${
        active ? 'text-blue-500 font-semibold' : 'font-regular text-slate-800'
      } inline-flex items-center text-[12px]`}
    >
      {label}
      <span
        className={`bg-blue-100 ${
          active ? 'bg-blue-100 text-blue-500' : 'bg-slate-100 text-slate-500'
        } ml-2  text-[10px] px-1 py-1 rounded-full`}
      >
        {count}
      </span>
    </Text>
  );
};

const columns: ColumnsType<DataType> = [
  {
    title: (
      <Space className="flex items-center gap-2 justify-between">
        <TableHeader label="Qualified" count={324} active={true} />
        <Divider />
        <TableHeader label="Task" count={324} />
        <Divider />
        <TableHeader label="Disqualified" count={324} />
      </Space>
    ),
    dataIndex: 'name'
  }
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: (
      <Space className="items-center gap-4 hover:bg-blue-50 px-2 py-2 rounded-lg">
        <Space className="w-[60px] h-[60px] flex items-center justify-center bg-slate-50 text-slate-400 font-semibold rounded-full text-[20px]">
          FR
        </Space>

        <Space direction="vertical" className="w-[100%]">
          <Text className="text-[14px] font-bold">Frances R. Kostka</Text>
          <Text className="text-[10px] font-bold my-1">Saudi Arabia</Text>
          <Text className="text-[10px] font-regular">
            Bachelor in Information Technology and Cyber Security (2023-2023)
          </Text>
          <Space className="gap-2">
            <Tag
              bordered={false}
              className="text-[8px] bg-transparent text-slate-400"
            >
              #top_candidate
            </Tag>
            <Tag
              bordered={false}
              className="text-[8px] bg-transparent text-slate-400"
            >
              #top_candidate
            </Tag>
          </Space>
          <Space className="flex gap-2 mt-1">
            <Tag bordered={false} className="bg-slate-200 text-[8px]">
              New York
            </Tag>
            <Tag bordered={false} className="bg-slate-200 text-[8px]">
              Marketing
            </Tag>
            <Tag bordered={false} className="bg-slate-200 text-[8px]">
              London
            </Tag>
          </Space>
        </Space>
      </Space>
    )
  });
}

const UserTable = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    onChange: (selectedRowKeys: React.Key[], selectedRows: DataType[]) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        'selectedRows: ',
        selectedRows
      );
    },
    getCheckboxProps: (record: DataType) => ({
      disabled: record.name === 'Disabled User', // Column configuration not to be checked
      name: record.name
    })
  };
  return (
    <Table
      pagination={false}
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data}
      className="custom-table"
    />
  );
};

export default UserTable;
