import React, { Component } from "react";
import ChildA from "./childA";

const obj = {
  name: "shahmir",
  last: "minhas",
  age: 30,
};
const obj2 = {
  name: "second",
  last: "last Second",
};
const ContextApi = React.createContext(obj);
const SecondContextApi = React.createContext(obj2);

function Parent() {
  return (
    <React.Fragment>
      <h1>Parent </h1>
      {/* <SecondContextApi.Provider value={obj2}> */}   
        {/* <ContextApi.Provider value={obj}> */}
          <ChildA name={obj}/>
        {/* </ContextApi.Provider> */}
      {/* </SecondContextApi.Provider> */}
    </React.Fragment>
  );
}

export default Parent;
export { ContextApi, SecondContextApi };


//when using useContext we can exclude provider and consumer wrappers 
//but default objs must be assigned for passing data
