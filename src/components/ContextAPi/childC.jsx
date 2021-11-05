//class components must have consumer 

// import React, { Component} from "react";
// import {ContextApi} from "./parent";

// class ChildC extends React.Component {
//   render() {
     
//     return (
//       <React.Fragment>
//         <ContextApi.Consumer>
//           {(obj) => {
//             return <div>{obj.lap}</div>;
//           }}
//         </ContextApi.Consumer>
//       </React.Fragment>
//     );
//   }
// }

// export default ChildC;

//consumers only take function



//----------------------------------------------------------------------//
//if consuming more than 1 providers
import React, { Component, useContext } from 'react';

import { ContextApi, SecondContextApi } from "./parent";

const ChildC = () => {
    const obj = useContext(ContextApi);
    const obj2 = useContext(SecondContextApi);
    return ( <React.Fragment>
        <div>{obj.name}</div>
        <div>{obj2.name}</div>
    </React.Fragment> );
}
 
export default ChildC;


//useEffect is used same as the hoooks used in lifecycle
//componentdidMount etc are used in classes only so wanting same functionality in functions 