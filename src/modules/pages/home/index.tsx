import MainLayout from '../../layout/MainLayout';

const Home = (props: any) => {
  return (
    <MainLayout>
      <div className={styles.wrapper}></div>
    </MainLayout>
  );
};

const styles = {
  wrapper: 'mx-auto py-[100px] px-[100px]  my-[100px] '
};

export default Home;
