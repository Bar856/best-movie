import React from 'react'
import { Navigate } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Movie(props) {
  const [navToMovie, setNavToMovie] = useState(false)
  useEffect(()=>{
    setNavToMovie(false);
  }) 
  const goToMovie = () =>{
    props.setMovieSelected(props.movie);
    setNavToMovie(true);
  }
  return (
    <div className='row'>
      <div>        
        <img onClick={goToMovie} className='movieSq' src={props.movie.img} alt={props.movie.name} />
      </div>
        {navToMovie && <Navigate replace to={props.getMovieLink()}/>}
    </div>
  )
}
