import React, { useState } from "react";
import AddUser from "./components/AddUser/AddUser";
import UserList from "./components/UserList/UserList";
import ErrorModal from "./components/ErrorModal/ErrorModal";

function App() {
  const [showModal, setShowModal] = useState(true);

  const [users, setUsers] = useState([
    { name: "Norie", age: 54 },
    { name: "Bob", age: 33 }])
  
  const addNewUser = (user) => {
    setUsers((prev) => [...users, user])
  }  

  const toggleModal =  (showHide) => {
    setShowModal(showHide)
  }

  return (
    <div>
      {showModal && <ErrorModal showModal={toggleModal}/>}
      <AddUser addUser={addNewUser} showModal={toggleModal}/>
      <UserList users={users} />
    </div>
  );
}

export default App;
