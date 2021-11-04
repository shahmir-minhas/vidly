import React, { Component } from 'react';

const Input = ({name, label, value, onChange, type, error}) => {

    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input
              value={value}
              onChange={onChange}
              name={name}
              id={name}
              type={type}
              className="form-control"
            />
            {error && <div className="alert alert-danger my-1">{error}</div>}
          </div>
     );
}
 
export default Input;