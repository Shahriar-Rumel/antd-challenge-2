import React, { useState } from 'react';
import { Table, Divider } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';

interface DataType {
  key: React.Key;
  name: any;
}

const columns: ColumnsType<DataType> = [
  {
    title: (
      <div className="flex items-center gap-2 justify-between">
        <h1 className="text-blue-500 inline-flex items-center">
          Qualified{' '}
          <span className="bg-blue-100 ml-2 text-blue-500 text-[12px] px-1 py-1 rounded-full">
            324
          </span>{' '}
        </h1>
        <Divider
          type="vertical"
          className=" ml-4 w-[2px] h-[20px] bg-gray-200"
        />
        <h1 className="inline-flex items-center">
          Task{' '}
          <span className="bg-slate-100 ml-2 slate-blue-500 text-[12px] px-1 py-1 rounded-full">
            324
          </span>
        </h1>
        <Divider
          type="vertical"
          className="ml-4 w-[2px] h-[20px] bg-gray-200"
        />
        <h1 className="inline-flex items-center">
          Disqualified
          <span className="bg-slate-100 ml-2 text-slate-500 text-[12px] px-1 py-1 rounded-full">
            324
          </span>
        </h1>
      </div>
    ),
    dataIndex: 'name'
  }
];

const data: DataType[] = [];
for (let i = 0; i < 10; i++) {
  data.push({
    key: i,
    name: (
      <div className="flex items-center gap-4 hover:bg-blue-50 px-2 py-2 rounded-lg">
        <div className="w-[60px] h-[60px] flex items-center justify-center bg-slate-50 text-slate-400 font-semibold rounded-full text-[20px]">
          FR
        </div>

        <div className="w-[75%]">
          <h2 className="text-[14px] font-bold">Frances R. Kostka</h2>
          <p className="text-[12px] font-bold my-2">Saudi Arabia</p>
          <p className="text-[14px] font-regular">
            Bachelor in Information Technology and Cyber Security (2023-2023)
          </p>
          <div className="flex gap-2 mt-2">
            <p className="text-[12px] text-slate-400">#top_candidate</p>
            <p className="text-[12px] text-slate-400">#top_candidate</p>
          </div>
          <div className="flex gap-2 mt-4">
            <p className="text-slate-600 bg-green-50  rounded-full px-3 py-1  text-[10px] font-semibold">
              New York
            </p>
            <p className="text-slate-600 bg-green-50 rounded-full px-3 py-1  text-[10px] font-semibold">
              Marketing
            </p>
            <p className="text-slate-600 bg-green-50 rounded-full  px-3 py-1  text-[10px] font-semibold">
              London
            </p>
          </div>
        </div>
      </div>
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
