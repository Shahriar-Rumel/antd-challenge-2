import React from 'react';
import { InfoCircleOutlined, UserOutlined } from '@ant-design/icons';
import { Input as AntdInput, Tooltip } from 'antd';

interface inputProps {
  placeholder: string;
  title: string;
  prefixIcon: any;
}

const Input = ({ placeholder, title, prefixIcon }: inputProps) => {
  return (
    <AntdInput
      placeholder={placeholder}
      prefix={prefixIcon}
      suffix={
        <Tooltip title={title}>
          <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
        </Tooltip>
      }
      className="py-3 border-0 text-[16px] my-4 shadow-primary w-[100%]"
    />
  );
};

export default Input;
