import React from 'react';
import './Card.css';

const Card = (props) => {
  return (
    <div className='card'><p>{props.name}</p><p>{props.age}</p></div>
  )


}

export default Card
