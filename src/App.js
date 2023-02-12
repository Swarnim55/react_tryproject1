import React, { useState } from 'react';

import AddUser from './Components/Users/AddUser';
import UsersList from './Components/Users/UsersList';

const App = () => {
  const [userList, setUserList] = useState([]);

  const userAddHandler = (ele) => {
    setUserList((prevUsers) => {
      return [ele, ...prevUsers];
    });
  };
  return (
    <div>
      <AddUser onUserAdd={userAddHandler} />
      <UsersList list={userList} />
    </div>
  );
};

export default App;
