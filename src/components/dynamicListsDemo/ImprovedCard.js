import React from "react";



const ImprovedCard = props => {
  return (
    <div className="movies-list-item">
      <h2>{props.title}</h2>
      <p>{props.director}</p>
      <button onClick={props.clickToDelete}>Delete</button>
      <button onClick={props.clickToAdd}>Add</button>

    </div>
  );
};

export default ImprovedCard;
