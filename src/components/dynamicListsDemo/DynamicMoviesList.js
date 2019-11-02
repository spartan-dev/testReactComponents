import React, { Component } from "react";
import ImprovedCard from './ImprovedCard'; // <== don't forget to import 

class DynamicMoviesList extends Component {
  constructor() {
    super();
    this.state = {
      movies: [
        { title: "The Godfather", director: "Francis Coppola" },
        { title: "Star Wars", director: "Rian Johnson" },
        { title: "The Shawshank Redemption", director: "Frank Darabont" },
        { title: "Por tus pujidos nos cacharon", director: "Alfonso Sayas" }
      ]
    };
  }
  deleteMovieHandler  = (movieIndex) => {
      const moviesCopy = [...this.state.movies];
      moviesCopy.splice(movieIndex, 1);
      this.setState({
          movies: moviesCopy
      })
  }

  addMovieHandler = () =>{
    const moviesCopy = [...this.state.movies];
    moviesCopy.push({title:"Harry Popotes y las princesas ", director:"Cuaron"})
    this.setState({
        movies:moviesCopy
    })
  }
  render() {
    console.log(this.state.movies);
    let { deleteMovieHandler, addMovieHandler } = this
    return (
      <div>
        {this.state.movies.map((oneMovie, index) =>
         <ImprovedCard  
         key={index} 
         {...oneMovie} 
         clickToAdd={() => addMovieHandler()}
         clickToDelete={() => deleteMovieHandler(index)}/>)}
      </div>
    );
  }
}

export default DynamicMoviesList;
