import { useContext } from 'react';
import Input from '../Input';
import UserContext from '../../contexts/UserContext';
import Avatar from '../Avatar';

const Topbar = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="flex items-center justify-between w-full h-[60px] mt-5">
      <div className="pl-10 w-1/5">
        <Input onChange={() => {}} placeholder="Search something..." value="" />
      </div>
      <div className="flex items-center gap-4 pr-10">
        <Avatar name={user?.login ?? ''} />
        <div className="flex flex-col">
          <span className="font-medium text-deepNavy-500 font-bold">
            {user?.login}
          </span>
          <span className="text-sm font-normal text-gray-500">
            {user?.email}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
