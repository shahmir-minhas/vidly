 

import React, { Component } from "react";

const listGroup = (props) => {
  const { items, textProperty, valueProperty, onitemSelect, selectedGenre } = props;
  return (
    <React.Fragment>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item[valueProperty]} 
          className={item === selectedGenre? "list-group-item active" : "list-group-item"}
          onClick={() => onitemSelect(item)}>
            {item[textProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );

  // eslint-disable-next-line no-unreachable
  listGroup.defaultProps = {
      textProperty : "name",
      valueProperty : "_id"
  }
};

export default listGroup;
