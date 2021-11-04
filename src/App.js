// import logo from './logo.svg';
import { Component } from "react";
import { Route, Switch, Redirect} from "react-router-dom";
import Movies from "./components/movies";
import NavBar from "./components/common/navbar";
import Rental from "./components/rentals";
import Customer from "./components/customers";
import MovieDetails from "./components/movieDetails";
import NotFound from "./components/not-found";
import LoginFrom from "./components/loginForm";
import "./App.css";

function App() {
  return (
    <div>
      <NavBar />
      <main className="container">
        <Switch>
        <Route path="/login" component={LoginFrom}/>
          <Route path="/movies/:id" component={MovieDetails}/>
          <Route path="/movies" component={Movies}/>
          <Route path="/rental" component={Rental}/>
          <Route path="/customer" component={Customer}/>
          <Route path="/not-found" component={NotFound}/>
          <Redirect exact from="/" to="/movies"/>
          <Redirect to="/not-found"/>
        </Switch>
      </main>
    </div>
  );
}

export default App;

//register urls here
//path for url and component that should be displayed
//there is a slight problem over here coz react mathces the path /home/about to /home
//use exact to counter this problem it will look for exact path
/* <Route path="/" exact component={Movies}/> */
//or use switch statement
/* <switch>
  <Route path="/" component={Movies} />
</switch>; */

//if you want to send props to route component 
//use render insted of component than arrow function and your component

//now to pass standard props as well we have to pass props as arg in arrow function 
//and than use spred operator to send standard props 

//to send params form url use :param for multiple params use /:param/:param/:param

//generally optional parameters are avoided
//use query string which is in search property 
//and to read this query string install npm i query-string to parse the query string

//to redirect form a page when user submits a form etc
// handleSubmit = ()=> { this.props.history.push("/otherPage"); };
// handleSubmit = ()=> { this.props.history.replce("/otherPage"); };
//developers use replace() more often





//   <Route path="/like" component={Like} />
//   <Route path="/like" render={(props)=><Like sentProp="iWasSend" {...props}/>} />
//   <Route path="/" exact component={Movies} />

//  <Route path="/products/:id" component="componentName"/>
//   <Route path="/products/:id/:name" component="componentName"/>
//   <Route path="/products/:id?/:name?" component="componentName"/> for optional params
  
//  <Route path="/not-found" exact component={NotFound} />
//  <Redirect to="/not-found" component="notfoundcomponent"/>

// <Redirect from="/messages" to="/posts"/> 

//clxx lib