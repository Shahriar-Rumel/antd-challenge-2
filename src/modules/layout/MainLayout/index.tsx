import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }: any) => {
  const location = useLocation();
  return (
    <div className="mx-auto">
      <>{children}</>
    </div>
  );
};

export default MainLayout;
