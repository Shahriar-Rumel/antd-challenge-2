import MainLayout from '../../layout/MainLayout';
import Collapsible from '../../shared/Collapsible';

const Home = (props: any) => {
  return (
    <MainLayout>
      <div className={styles.wrapper}>
        <div className="flex gap-6">
          <div className="w-[35%]">
            <Collapsible />
          </div>
          <div className="w-[65%]"></div>
        </div>
      </div>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'w-[90%] ml-[100px] mx-auto my-[30px]'
};

export default Home;
