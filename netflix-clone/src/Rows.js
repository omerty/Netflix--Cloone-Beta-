import React, {useState, useEffect} from 'react'
import "./Rows.css";
import axios from './axios';

function Rows({ title, fetchUrl, isLargeRow = false }) {
    const [movies, setMovies] = useState([]);
    const base_URL = "https://image.tmdb.org/t/p/original/";
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const request = await axios.get(fetchUrl);
          setMovies(request.data.results);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    
      fetchData();
    }, [fetchUrl]);
      
    return (
      <div className="Rows">
        <h2>{title}</h2>

        <div className = "Row_Posters">
          {movies && movies.map((movie) => (
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
                <img
                    className = {`row__poster ${isLargeRow && "row__posterLarge"}`}
                    key={movie.id}
                    src={`${base_URL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                />
            )))}
        </div>
      </div>
    );
  }
  
  export default Rows;
  