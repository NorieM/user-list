import React from "react";
import Card from "../UI/Card/Card";
import "./UserList.css";

const UserList = (props) => {
  const renderedUsers = props.users.map((user) => {
    return <li key={user.name+user.age}>{user.name} ({user.age} years old)</li>;
  });
  return (
    <div className="userlist">
      <Card>
      <ul>{renderedUsers}</ul>
      </Card>
    </div>
  );
};

export default UserList;
