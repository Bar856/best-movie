import React from 'react'
import Movie from './Movie'
export default function MoviesByName(props) {
  return (
    
    <div className='col-3'>
      {
        [...props.movies].sort((a,b) =>  a.name.localeCompare(b.name)).map((m,i)=>{
          return  (
              <div className='col' >
                  <Movie getMovieLink={props.getMovieLink} setMovieSelected={props.setMovieSelected} movie={m} key={i}/>
              </div>)
          })
      }
    </div>
  )
}
