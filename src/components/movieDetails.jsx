import React, { Component } from "react";

class MovieDetails extends React.Component {
    handleSave = () => {
        console.log("save");
        this.props.history.replace("/movies");
    }
  render() {
      
    return (
      <div>
        <h1>Movie id: {this.props.match.params.id}</h1>
        <button className="btn btn-primary btn-sm" onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default MovieDetails;
