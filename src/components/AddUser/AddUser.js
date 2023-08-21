import React from "react";
import "./AddUser.css";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";

function AddUser() {
  const handleClick = (event) => {
    event.preventDefault();
    console.log("Button clicked");
  };

  return (
    <div className="input">
      <Card>
        <form onSubmit={handleClick}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="" id="name" />
          <label htmlFor="age">Age:</label>
          <input type="text" name="" id="age" />
          <Button label="Submit" type="submit">
            Submit
          </Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
