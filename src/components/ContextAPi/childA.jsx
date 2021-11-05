import React from "react";
import ChildB from "./childB";
import PropTypes from "prop-types";

// const ChildA = (props) => {
//   console.log(props.name);

// };

// export default ChildA;

// ChildA.propType = {
//   name: PropType.string,
// };


class ChildA extends React.Component {
    
    render() { 
        console.log(this.props);
        console.log(typeof(this.props));
        return (
            <React.Fragment>
              
              <ChildB />
              <div>{this.props.name.name}</div>
              <div>{this.props.name.age}</div>
            </React.Fragment>
          );
    }
}
 
export default ChildA;

ChildA.propTypes = {
  name: PropTypes.shape({
      name: PropTypes.string,
      age: PropTypes.string
  }),
 
};