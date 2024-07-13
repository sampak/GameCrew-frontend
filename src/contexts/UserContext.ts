import { createContext } from 'react';
import { IUser } from '../dto/base/IUser';

type IUserContext = {
  user: IUser | null;
  setUser: (user: IUser | null) => void;
};

const UserContext = createContext<IUserContext>({
  user: null,
  setUser: () => {},
});

export default UserContext;
