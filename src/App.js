import React, {useState} from 'react';
import Form from './components/Form';
import UserList from './components/UserList';
import './App.css';

const EnteredUsers = [

];


function App() {
  const [users, setUsers] = useState(EnteredUsers);

  const addUsers = (newUser) => {
    setUsers(prevUsers => {
      return [newUser, ...prevUsers];
    })
  };

  return (
    <div className="App">
            <Form addUsers={addUsers} user={users}/>
            <UserList allUsers={users}/>
    </div>
  );
}

export default App;
