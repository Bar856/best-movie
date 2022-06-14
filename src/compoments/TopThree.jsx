import React from 'react'
import Movie from './Movie'
import { useState } from 'react'
export default function TopThree(props) {

  
  return (
    <div className='container'>
        {/* // top 3 movies */}
        <div className='row'>
            {
              props.TopThreeArr.map((m,i)=>{
                  if (i<3){
                      return  (
                          <div className='col' >
                              <h3>{i+1}st Place</h3>
                              <Movie key={i} getMovieLink={props.getMovieLink} setMovieSelected={props.setMovieSelected} movie={m} />
                          </div>)
                  }
                })
            }
        </div>
    </div>
  )
}
