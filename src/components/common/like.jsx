
import React, { Component } from "react";

// input: liked:boolean
//output: onClick - changeHeart
//when using functions props are passed as an arg
//this is used in classes

const Like = (props) => {
  let classes = "fa fa-heart";
  if (!props.liked) classes += "-o";
  return (
    <React.Fragment>
      <span>
        <i
          onClick={props.onClick}
          className={classes}
          aria-hidden="true"
          style={{ cursor: "pointer"}}
        ></i>
      </span>
    </React.Fragment>
  );
};

export default Like;
