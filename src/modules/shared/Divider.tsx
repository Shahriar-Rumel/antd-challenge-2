import { Divider as AntdDivider } from 'antd';

interface dividerProps {
  type?: 'vertical' | 'horizontal';
}
const Divider = ({ type }: dividerProps) => {
  return (
    <AntdDivider
      type={type ? type : 'vertical'}
      className="w-[2px] h-[20px] bg-gray-200"
    />
  );
};

export default Divider;
