import React from "react";
import Card from './Card'
// components/ListDemo.js
const movies = [  //modelo llamad a mi localhost://3000/pelis
  { title: "Jurassic Park", director: "Steven Spielberg" },
  { title: "Sharknado", director: "Anthony C. Ferrante" },
  { title: "Titanic", director: "James Cameron" }
];

 const MovieList = () => {
  return (
    <ul>
      {movies.map((oneMovie, index) => (
        <Card key={index} title={oneMovie.title} director={oneMovie.director} />
      ))}
    </ul>
  );
};
export default MovieList;