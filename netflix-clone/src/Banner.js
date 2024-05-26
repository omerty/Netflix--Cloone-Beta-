import React, {useState, useEffect} from 'react';
import "./Banner.css";
import axios from "./axios";
import Requests from './Requests';

function Banner() {

  const[movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(Requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log("API response:", request.data);
      return request;
    }

    fetchData();
  }, [])

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n-1) + "..." : string;
  }

  return (
    <header className ="Banner" style = {{
        backgroundSize: "cover",
        bacgroundPosition: "center center",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
    }
    }>
        <div className = "Banner_Contents">
            <h1 className ="Banner_Title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className = "Banner_Button">
                <button className = "Banner_Buttons">Play</button>
                <button className = "Banner_Buttons">My List</button>
            </div>
            <h1 className = "Banner_Description"> {truncate(movie?.overview , 150)} </h1>
        </div>

        <div className = "Banner_FadeBottom" />
    </header>
  );
}

export default Banner;
