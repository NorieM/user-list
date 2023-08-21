import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";

function App() {
  const [showModal, setShowModal] = useState(false);
  
  const users = [
    { name: "Norie", age: 54 },
    { name: "Bob", age: 33 },
  ];
  return (
    <div>
      <AddUser />
      <UserList users={users} />
    </div>
  );
}

export default App;
