import React from 'react';
import { Menu as AntdMenu } from 'antd';
import {
  TeamOutlined,
  CalendarOutlined,
  ShareAltOutlined,
  HomeOutlined,
  FileTextOutlined,
  LayoutOutlined,
  HeartOutlined,
  SettingOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';

const Menu = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };
  const menuItems = [
    { key: '1', icon: <HomeOutlined style={{ fontSize: '24px' }} /> },
    { key: '2', icon: <TeamOutlined style={{ fontSize: '24px' }} /> },
    { key: '3', icon: <CalendarOutlined style={{ fontSize: '24px' }} /> },
    { key: '4', icon: <ShareAltOutlined style={{ fontSize: '24px' }} /> },
    { key: '5', icon: <FileTextOutlined style={{ fontSize: '24px' }} /> },
    { key: '6', icon: <LayoutOutlined style={{ fontSize: '24px' }} /> },
    { key: '7', icon: <HeartOutlined style={{ fontSize: '24px' }} /> }
  ];
  return (
    <AntdMenu
      defaultSelectedKeys={['4']}
      mode="vertical"
      style={{
        width: '80px',
        position: 'fixed',
        bottom: 0,
        top: 0,
        paddingTop: '60px',
        zIndex: 999
      }}
    >
      {menuItems.map((item) => (
        <AntdMenu.Item
          key={item.key}
          icon={item.icon}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60px',
            marginTop: '5px'
          }}
        />
      ))}
      <AntdMenu.Item
        key={8}
        icon={<SettingOutlined style={{ fontSize: '24px' }} />}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '60px',
          marginTop: '20vh'
        }}
      />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '40px',
          width: '40px',
          margin: '0 auto',
          backgroundColor: '#D7E5FD',
          color: '#B1CDFD',
          borderRadius: '50%',
          fontWeight: 600
        }}
      >
        <span>AS</span>
      </div>
    </AntdMenu>
  );
};

export default Menu;
