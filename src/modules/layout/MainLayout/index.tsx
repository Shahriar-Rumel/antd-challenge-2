import { useLocation } from 'react-router-dom';
import Menu from '../../shared/Menu';

const MainLayout = ({ children }: any) => {
  const location = useLocation();
  return (
    <div className="mx-auto">
      <Menu />
      <>{children}</>
    </div>
  );
};

export default MainLayout;
