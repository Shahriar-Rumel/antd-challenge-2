import MainLayout from '../../layout/MainLayout';
import Collapsible from '../../shared/Collapsible';
import Input from '../../shared/Input';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import UserTable from './components/UserTable';
import UserHeader from './components/UserHeader';

const SearchWithFilter = () => {
  return (
    <div className="flex gap-4 items-center">
      <Input
        placeholder="Search by name, edu, exp or #tag"
        prefixIcon={<SearchOutlined className="text-[20px] text-slate-400" />}
        title="Extra information"
      />
      <Button
        icon={<FilterOutlined className="text-slate-500 text-[20px]" />}
        className="bg-white border-0 h-[50px]"
      />
    </div>
  );
};

const Home = (props: any) => {
  return (
    <MainLayout>
      <section className={styles.wrapper}>
        <div className="flex gap-6">
          <aside className="w-[35%]">
            <Collapsible />
            <SearchWithFilter />
            <UserTable />
          </aside>
          <div className="w-[65%]">
            <UserHeader />
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'w-[90%] ml-[100px] mx-auto my-[30px]'
};

export default Home;
