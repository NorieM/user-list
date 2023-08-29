import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";

const ErrorModal = (props) => {
  const handleClick = () => {
    console.log("Button clicked");
    props.showModal(false);
  };

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="content">
          <Card>
            <div className="header">
              <h2>Invalid Input</h2>
            </div>
            <div className="actions">
              <Button onClick={handleClick}>Okay</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
