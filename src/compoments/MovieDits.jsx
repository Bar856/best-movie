import React from 'react';
import { useState } from 'react';
// import { Navigate } from 'react-router';
import 'react-toastify/dist/ReactToastify.css';
// import { useEffect } from 'react';

export default function MovieDits(props) {

  // const [navToHome, setNavToHome] = useState(false)
  // const backToHome = () => setNavToHome(true);
  // useEffect(() => {
  //   setNavToHome(false);
  // });
  const [rating, setRating] = useState(0)
  const addStars = () =>{
    props.addStarsToMovie(rating)
    props.setTopThreeArr([...props.movies].sort((a,b) =>  (b.getRate() - a.getRate()) ))
  }
  return (
    <div className='black'>
      <div className='container'>
        <img className='movieSq' src={props.movieSelected.img} alt="movieSelected" /><br/>
        {props.movieSelected.name}<br/>
        rate:{props.movieSelected.getRate()}<br/>
        {props.movieSelected.describe}<br/>
        <input type={'number'} onChange={(e)=>setRating(e.target.value)}/>
        <input type={'button'} onClick={addStars} value='Rate!'></input>
        {/* <input type={'button'} onClick={backToHome} value='back'></input> */}
      {/* {navToHome && <Navigate replace to='/'/>} */}
      </div>
    </div>
  )
}
