import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './compoments/Header'
import TopThree from './compoments/TopThree';
import spiderman from './imgs/spiderman.jpeg'
import MovieDits from './compoments/MovieDits'
import jurassic from './imgs/jurassicWorld.jpg'
import MsMarvel from './imgs/msmarvel.jpeg'
import avangers from './imgs/avangers.jpg'
import MoviesByName from './compoments/MoviesByName';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const getSumOfRates = (arr) =>{
    let sum = 0;
    arr.forEach(m=>{
        sum+=m;
    })
    return (sum/arr.length);
  }

  class MovieClass{
    constructor(name,describe,img,rateArray){
        this.name = name;
        this.describe = describe;
        this.img = img;
        this.rateArray = rateArray;
    }   
    getRate(){
      return getSumOfRates(this.rateArray);
    }
    addRate(r){
      this.rateArray.push(r);
    }
}

let movie1=new MovieClass('Avangers','describe1',avangers,[1,1,1])
let movie2=new MovieClass('Spider-Man No Way Home','describe2',spiderman,[2,2,2])
let movie3=new MovieClass('Jurassic World Dominion','describe3',jurassic,[3,3,3])
let movie4=new MovieClass('Ms. Marvel','describe4',MsMarvel,[4,4,4])

  const [movies, setMovies] = useState([movie1,movie2,movie3,movie4]);  
  const [movieSelected, setMovieSelected] = useState(movies[0]);
  const [TopThreeArr, setTopThreeArr] = useState([...movies].sort((a,b) =>  (b.getRate() - a.getRate()) ));
  const getMovieLink = () =>{
    return '/best-movie/' + movieSelected.name.replaceAll(' ','-');
  }
  const addStarsToMovie = (rating) =>{
    let tmpMovies = [...movies];
    tmpMovies.forEach((r,i)=>{
      if (r===movieSelected){
        tmpMovies[i].addRate(Number(rating));
        setMovies(tmpMovies);
      }
    })
  }
  return (
    
    <div className="App">
      <Router>
        <Header title="BestMovie"/>
        {/* <HomePage setTopThreeArr={setTopThreeArr} TopThreeArr={TopThreeArr} addStarsToMovie={addStarsToMovie} movieSelected={movieSelected} getMovieLink={getMovieLink} setMovieSelected={setMovieSelected} movies={movies}  /> */}
        <div className='container'>
        <TopThree TopThreeArr={TopThreeArr} movies={movies}  getMovieLink={getMovieLink} setMovieSelected={setMovieSelected}/>
        </div>
        <div className='container'>
          {/* sidebar movies */}
          <div className='row'>
            <MoviesByName movies={movies}  getMovieLink={getMovieLink} setMovieSelected={setMovieSelected}/>
            {/* sidebar movie deateils */}
            <div className='col-8'>
              <Routes>
                <Route path={'/best-movie'} element={<MovieDits addStarsToMovie={addStarsToMovie} setTopThreeArr={setTopThreeArr} movieSelected={movieSelected} movies={movies}/>}/>
                <Route path={getMovieLink()} element={<MovieDits addStarsToMovie={addStarsToMovie} setTopThreeArr={setTopThreeArr} movieSelected={movieSelected} movies={movies}  />}/>
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
