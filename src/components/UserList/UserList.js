import React from "react";
import Card from "../UI/Card/Card";
import './UserList.css';

const UserList = (props) => {
  const renderedUsers = props.users.map((user) => {
    return <Card name={user.age} age={user.name} />;
  });
  return <div className="userlist">{renderedUsers}</div>;
};

export default UserList;
