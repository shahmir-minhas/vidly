import React, { Component } from "react"; //imrc
import { getMovies } from "../services/fakeMoviesService";
import { getGenres } from "../services/fakeGenreService";
import "./movies.css";
import Like from "./common/like";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { pagination } from "./utilities/paginate";
import { Link } from "react-router-dom";

//cc
class Movies extends Component {
  state = {
    movies: [],
    genre: [],
    pageSize: 4,
    currentPage: 1,
    selectedGenre: "All Genres",
  };
  //before a component is mounted this hook will get data from server
  //we usually dont initialize states. i.e mount hook get data from server and update the state
  componentDidMount() {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genre: genres });
  }

  handleDelete = (movie) => {
    console.log(movie);

    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    //   this.setState({movies: movies});
    // or we can simply write it like this b/c its a single obj
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index].liked = !movie.liked;
    this.setState(movies);
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  handleGenreSelected = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };

  render() {
    const { length: count } = this.state.movies;
    const {
      currentPage,
      pageSize,
      movies: allMovies,
      selectedGenre,
    } = this.state;

    if (count === 0) return <p>There are no movies in the database</p>;

    const filtered =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((movie) => movie.genre._id === selectedGenre._id)
        : allMovies;

    const movies = pagination(filtered, currentPage, pageSize);
    return (
      <React.Fragment>
        <div className="my-4">
          <p>There are {filtered.length} movies</p>
        </div>
        <div className="row">
          <div className="col-3">
            <ListGroup
              items={this.state.genre}
              textProperty="name"
              valueProperty="_id"
              selectedGenre={selectedGenre}
              onitemSelect={this.handleGenreSelected}
            />
          </div>

          <div className="col">
            <table className="table m-3">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Genre</th>
                  <th>Stock</th>
                  <th>Rate</th>
                  <th>Like</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie) => (
                  <tr key={movie._id}>
                    <td>
                      <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
                    </td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td>
                      <Like
                        liked={movie.liked}
                        onClick={() => this.handleLike(movie)}
                      />
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(movie)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              itemsCount={filtered.length}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Movies;
