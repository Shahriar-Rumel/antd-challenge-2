import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse as AntdCollapse, Divider } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const text = `
 No Content
`;

const items: CollapseProps['items'] = [
  {
    key: '2',

    label: (
      <div className="flex items-center gap-4">
        <div className="bg-slate-200 text-slate-800 font-medium w-[20px] h-[20px] p-4 flex items-center justify-center rounded-full">
          SIP
        </div>
        <Divider type="vertical" className="w-[2px] h-[20px] bg-gray-200" />
        <p className="font-medium text-[16px]">Oppurtunity Browsing</p>
        <Divider type="vertical" className="w-[2px] h-[20px] bg-gray-200" />
        <p className="font-medium text-[16px]">2325</p>
        <Divider type="vertical" className="w-[2px] h-[20px] bg-gray-200" />
      </div>
    ),
    children: <p>{text}</p>
  }
];

const Collapsible = () => {
  return (
    <AntdCollapse
      items={items}
      defaultActiveKey={['1']}
      //   expandIcon={<DownOutlined />}
      expandIcon={({ isActive }) => (
        <DownOutlined rotate={isActive ? 180 : 0} />
      )}
      expandIconPosition="end"
      className="shadow-sm bg-white border-0"
    />
  );
};

export default Collapsible;
