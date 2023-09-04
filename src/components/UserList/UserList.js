import React from "react";
import Card from "../UI/Card/Card";
import classes from  "./UserList.module.css";

const UserList = (props) => {
  const renderedUsers = props.users.map((user) => {
    return <li key={user.name+user.age}>{user.name} ({user.age} years old)</li>;
  });
  return (

      <Card className={classes.users}>
      <ul>{renderedUsers}</ul>
      </Card>
  );
};

export default UserList;
