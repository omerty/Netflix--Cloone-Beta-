import React from 'react';
import "./HomeScreen.css";
import Nav from '../Nav';
import Banner from '../Banner';
import Rows from '../Rows';
import Requests from '../Requests';

function HomeScreen() {
  return (
    <div className = "HomeScreen">  
        <Nav />
    
        <Banner />

        <Rows 
          title='NETFLIX ORIGINALS'
          fetchUrl={Requests.fetchNetflixOriginals}
          isLargeRow 
          />
        <Rows title = 'Trending Now' fetchUrl ={Requests.fetchTrending}/>
        <Rows title = 'Top Rated' fetchUrl ={Requests.fetchTopRated}/>
        <Rows title = 'Action Movies' fetchUrl ={Requests.fetchActionMovies}/>
        <Rows title = 'Comedy Movies' fetchUrl ={Requests.fetchComedyMovies}/>
        <Rows title = 'Horror Movies' fetchUrl ={Requests.fetchHorrorMovies}/>
        <Rows title = 'Romance Movies' fetchUrl ={Requests.fetchRomanceMovies}/>
        <Rows title = 'Documentaries' fetchUrl ={Requests.fetchDocumentaries}/>

    </div>
  );
}

export default HomeScreen;