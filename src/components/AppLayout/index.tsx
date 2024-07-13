import Menu from '../Menu';
import Topbar from '../Topbar';
import { FC, Props } from './typings';

const AppLayout: FC<Props> = ({ children }) => {
  return (
    <div className="flex h-[100vh]">
      <Menu />
      <div className="w-full px-4">
        <Topbar />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;
