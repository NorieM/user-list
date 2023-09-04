import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModal";

const AddUser = (props) => {
  const initialUserInput  = { name: "", age: "" };

  const [userInput, setUserInput] = useState(initialUserInput);
  
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (!userInput.name || +userInput.age < 1) {
      setUserInput(initialUserInput);
      setError({
        title: 'Invalid Input',
        message: 'Please enter a valid name and age!'
      })
      return;
    }
    props.onAddUser(userInput);
    setUserInput({ name: "", age: "" });
  };

  const handleChange = (input, value) => {
    setUserInput((prev) => ({ ...prev, [input]: value }));
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title={error.title} message={error.message}  onConfirm={errorHandler}/>}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
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
    </div>
  );
};

export default AddUser;
