import React from "react";
import Card from "../UI/Card/Card";

const UserList = (props) => {
  const renderedUsers = props.users.map((user) => {
    return <Card name={user.age} age={user.name} />;
  });
  return <div>{renderedUsers}</div>;
};

export default UserList;
