import { initialUserData } from 'common/constants';
import { UserData } from 'common/types';
import React, { createContext, useState } from 'react';

export type UserType = {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
};

export const UserContext = createContext<UserType>({
  user: initialUserData,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData>(initialUserData);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
