import React, { Component } from "react";
import axios from "axios";

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.state >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    console.log("logging the error");
    alert("unexpected error happens");
  }
});

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

class App extends React.Component {
  state = {
    posts: [],
  };

  async componentDidMount() {
    //async promise > resolved (success) || rejected(fail)
    // const promise = axios.get('https://jsonplaceholder.typicode.com/posts');
    // console.log(promise);
    const { data: posts } = await axios.get(apiEndpoint);
    console.log(posts);
    this.setState({ posts });
  }

  handleAdd = async () => {
    console.log("add");
    const obj = {
      title: "a",
      body: "b",
    };

    const { data: post } = await axios.post(apiEndpoint, obj);
    const posts = [post, ...this.state.posts];

    this.setState({ posts });
    console.log(this.state.posts);
  };
  //pessimistic Updates
  handleUpdate = async (post) => {
    post.title = "update";
    //one or more properties
    // axios.patch(apiEndpoint+'/'+post.id), post.id, {title: post.title};
    //all properties
    await axios.put(apiEndpoint + "/" + post.id, post);

    const posts = [...this.state.posts];
    const index = posts.indexOf(post);
    console.log(index);
    console.log(post);
    posts[index] = { ...post };
    this.setState({ posts });
  };

  handleEdit = () => {
    console.log("edit");
  };

  handleDelete = async (post) => {
    //optimistic approach
    const origianlPosts = this.state.posts;
    const posts = this.state.posts.filter((p) => p.id !== post.id);
    this.setState({ posts });
    try {
      await axios.delete(apiEndpoint + "/" + post.id);
      // throw new Error("error i am here"); simulate error for visual example that after deleting post will be back
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        alert("this post has already been deleted");
      this.setState({ posts: origianlPosts });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="container mt-5">
          <button
            className="btn btn-primary btn-sm my-2"
            onClick={this.handleAdd}
          >
            Add
          </button>
          <table className="table">
            <thead>
              <tr>
                <th>title</th>
                <th>update</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.posts.map((p) => (
                <tr>
                  <td>{p.title}</td>
                  <td>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => this.handleUpdate(p)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => this.handleDelete(p)}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default App;

//pessimistic update -> send server req than waits for it causes delay and if server fails our posts wont be updated
//optimestic update -> first update the UI than update server than call server but if something goes wrong than render previous state
//that is why we always clone the posts
//await is used in try catch

//expected error are the errors that api will response with error code i.e 404, 500
//unexpected error that happen what we dont know or unexpeded  (network down, database down, bugin app) // we log them and disply generic friednly messagees

//try catch for specific error handling
//otherwise use interceptors globally