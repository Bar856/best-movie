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
        <input type={'button'} value="1" onClick={()=>setRating(1)}></input>
        <input type={'button'} value="2" onClick={()=>setRating(2)}></input>
        <input type={'button'} value="3" onClick={()=>setRating(3)}></input>
        <input type={'button'} value="4" onClick={()=>setRating(4)}></input>
        <input type={'button'} value="5" onClick={()=>setRating(5)}></input>
        <input type={'button'} onClick={addStars} value='Rate!'></input>
        {/* <input type={'button'} onClick={backToHome} value='back'></input> */}
      {/* {navToHome && <Navigate replace to='/'/>} */}
      </div>
    </div>
  )
}
