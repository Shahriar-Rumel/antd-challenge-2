import { Space, Tabs, TabsProps, Typography } from 'antd';
import React from 'react';
import ProfileTab from './ProfileTab';

const TabLabel = (props: any) => {
  return (
    <span className="text-[14px] text-center font-medium">{props.label}</span>
  );
};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <TabLabel label="Profile" />,
    children: <ProfileTab />
  },
  {
    key: '2',
    label: <TabLabel label="Video" />,
    children: 'Content of Tab Pane 2'
  },
  {
    key: '3',
    label: <TabLabel label="Evaluation" />,
    children: 'Content of Tab Pane 3'
  },
  {
    key: '4',
    label: <TabLabel label="Placement" />,
    children: 'Content of Tab Pane 3'
  },
  {
    key: '5',
    label: <TabLabel label="Compliance" />,
    children: 'Content of Tab Pane 3'
  },
  {
    key: '6',
    label: <TabLabel label="Notes" />,
    children: 'Content of Tab Pane 3'
  }
];
const Container = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <div className="mt-6 w-[100%] relative">
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
        className="w-[100%]"
      />
    </div>
  );
};

export default Container;
