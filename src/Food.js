import React from 'react';

function Food({name, picture, rating}) {
  return (  
  <div>
    <h2>I love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} alt={name} />
  </div>
  );
}

export default Food;
