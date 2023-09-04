import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {

  const [users, setUsers] = useState([
    { name: "Norie", age: 54 },
    { name: "Bob", age: 33 }])
  
  const addNewUser = (user) => {
    setUsers((prev) => [...users, user])
  }  

  return (
    <div>
      <AddUser onAddUser={addNewUser}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
