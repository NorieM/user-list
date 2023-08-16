import React from 'react';
import UserList from './components/UserList/UserList';

function App() {

  const users = [{name:'Norie', age: 54}, {name:'Bob', age:33}]
  return (
    <div>
      <UserList users={users}/>
    </div>
  );
}

export default App;
