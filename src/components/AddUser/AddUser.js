import React , { useState } from "react";
import "./AddUser.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

function AddUser(props) {
  const [userInput, setUserInput] = useState({});

  const handleFormSubmit = (event) => {
    event.preventDefault();
    props.addUser(userInput);
    console.log(userInput);
  };

  const handleChange = (input, value) => {
    console.log(value)
    setUserInput((prev) => ({...prev, [input]:value}));
    console.log(userInput);
  };

  return (
    <div className="input">
      <Card>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
          <label htmlFor="age">Age:</label>
          <input
            type="text"
            name="age"
            id="age"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
          />
          <Button label="Submit" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
