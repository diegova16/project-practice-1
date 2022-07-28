import React from 'react';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';
import { useState } from "react";

const INITIAL_USERS = [
  {
    key: "u1",
    name: "Diego",
    age: 37
  },
  { 
    key: "u2", 
    name: "Monica", 
    age: 35
  },
  {
    key: "u3",
    name: "Noah",
    age: 1
  }
];

function App() {
  const[users, setUsers] = useState(INITIAL_USERS);

  const addUserDataHandler = (user) => {
    setUsers(prevUsers => {
      return [user, ...prevUsers];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserDataHandler} />
      <UserList users={users}/>
    </div>
  );
}

export default App;
