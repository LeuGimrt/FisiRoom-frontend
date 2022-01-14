import { UserData } from 'common/types';
import { nullToString } from 'common/utils/isNull';
import React, { createContext, useState } from 'react';

export type UserType = {
  user: UserData;
  setUser: React.Dispatch<React.SetStateAction<UserData>>;
};

const initialUserData = localStorage.getItem('user-data');
let initialUserDataObject: UserData;

if (initialUserData === null) {
  initialUserDataObject = {
    id: 1,
    username: '',
    first_name: 'default',
    last_name: '',
    email: '',
    token: '',
    last_login: '',
    is_superuser: false,
    is_staff: false,
    is_active: true,
    date_joined: '',
    groups: [{}],
    user_permissions: [{}],
  };
} else {
  initialUserDataObject = JSON.parse(nullToString(initialUserData));
}

export const UserContext = createContext<UserType>({
  user: initialUserDataObject,
  setUser: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserData>(initialUserDataObject);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
