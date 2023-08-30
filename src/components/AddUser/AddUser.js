import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

const AddUser = (props) => {
  const [userInput, setUserInput] = useState({ name: "", age: "" });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!userInput.name || +userInput.age < 1) {
      props.showModal(true);
      return;
    }
    props.addUser(userInput);
    setUserInput({ name: "", age: "" });
  };

  const handleChange = (input, value) => {
    setUserInput((prev) => ({ ...prev, [input]: value }));
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          name="name"
          id="name"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
          value={userInput.name}
        />
        <label htmlFor="age">Age (years)</label>
        <input
          type="number"
          name="age"
          id="age"
          onChange={(e) => handleChange(e.target.id, e.target.value)}
          value={userInput.age}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
