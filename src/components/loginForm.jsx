import React, { Component } from "react";

import Input from "./common/input";

class LoginFrom extends React.Component {
  state = {
    account: { username: "", password: "" },
    errors: {
      username: "",
      password: "",
    },
  };

  //createing a reaferance for input and use ref={this.username}
  // <input ref={this.username} id="username" type="text" className="form-control" />
  //   username = React.createRef();

  validate = () => {
    const errors = {};
    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required";
    if (account.password.trim() === "")
      errors.password = "Password is required";

    // console.log(errors);
    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = (e) => {
    //prevent the form to submit on server and relaod whole page
    e.preventDefault();
    //validation
    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    //old way
    // const username = document.getElementById("username").value();
    //new way to avoid DOM and use react
    // const username = this.username.current.value();

    //call server without page reload
    console.log("form submitted");
  };

  validateInput = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "User Name is Required";
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is Required";
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMessage = this.validateInput(input);
    if (errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];
    // console.log(errors);
    this.setState({ errors });

    const account = { ...this.state.account };

    //e.currentTarget.value will get the value form the input
    // account.username = e.currentTarget.value;

    // dynamically store properties
    account[input.name] = input.value;
    this.setState({ account });
  };

  render() {
    const { account } = this.state;
    const { errors } = this.state;

    return (
      <div className="container">
        <h1 className="my-5">Login</h1>

        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            label="User Name"
            value={account.username}
            type="text"
            onChange={this.handleChange}
            error={errors.username}
          />

          <Input
            name="password"
            label="Password"
            value={account.password}
            type="password"
            onChange={this.handleChange}
            error={errors.password}
          />

          {/* <div className="form-group">
            <label htmlFor="username">User Name</label>
            <input
              value={account.username}
              onChange={this.handleChange}
              autoFocus
              name="username"
              id="username"
              type="text"
              className="form-control"
            />
          </div> */}

          <button disabled={this.validate()} className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default LoginFrom;

//dont use ref only use them when you really mean it

//conrtrolled components get there data via props and pass data via event handlers
//same goes with controlled inputs that take data form props and pass them through event handlers

//working dynamically with property we use bracket notation [] instead of dot . notation
//e.g this.accoount.username to this.account['username']

//null and undefined can't be passed in controlled input

//Auth using session storage
// const token = { user: "user", pasd: 123 };
// //Store Token
// sessionStorage.setItem("token", JSON.stringify(token)); //to create a token in sessionStorage
// //To get token
// const tokenString = sessionStorage.getItem("token");
// console.log(tokenString);
// const userToken = JSON.parse(tokenString);
// console.log(userToken);
// console.log(userToken.user);

//Auth using local storage
// const token = { user: "user", pasd: 123 };
// //Store Token
// sessionStorage.setItem("token", JSON.stringify(token)); //to create a token in sessionStorage
// //To get token
// const tokenString = sessionStorage.getItem("token");
// console.log(tokenString);
// const userToken = JSON.parse(tokenString);
// console.log(userToken);
// console.log(userToken.user);

