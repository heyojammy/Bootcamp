import { useState } from 'react';
import './App.css';
import keys from './config/dev';

function App() {
  const [ movies, setMovies ] = useState([])
  const [keyword, setKeyword] = useState() //use controlled input; assign useState to value of search input

  //https://dmitripavlutin.com/controlled-inputs-using-react-hooks/

  const searchMovies = (keyword) => {
    const url = 'https://api.themoviedb.org/3'
    const movieRoute = `/search/movie?api_key=${keys.tmbd_key}&query=${keyword}`
    const endpoint = url + movieRoute;

    fetch(endpoint)
    .then(response => {
      return response.json();
    })
    .then(searchResults => {
        if(searchResults.results) {
          setMovies(searchResults.results)
        }
    })
    .catch(error => {
      console.error(`Error coming from API: ${error}`);
    })
  }

  const submitHandler = event => {
    event.preventDefault();
    console.log("I am the event", event.target.value);
    searchMovies(event.target.value);
  }

  return (
    <div>
      <h1>Movie Search</h1>
      <form>
      <input 
        type="text" 
        placeholder="movie name" 
        id="inputField"
      ></input>
        <button onClick={(event) => submitHandler(event)} type='submit'>Gimme movies!</button>
       </form>
{
  movies.map(movie => (
    <div className="formatReults">
    <div className = 'listFormat' key={movie.id}>
      <img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="poster" />
      <br/>
      <p className="movieTitle"><strong>{movie.title}</strong></p>
      <br/>
      <p><strong>Summary: </strong>{movie.overview}</p>
      <br/>
      <p><strong>Release Date: </strong>{movie.release_date}</p>
      <br/>
      <p><strong>Average Score: </strong>{movie.vote_average} out of 10</p>
      </div>
      </div>
  ))
}
    </div>
  );
}

export default App;