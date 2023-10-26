import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../Constants/Constants'
function Banner() {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    axios.get(`/tv/37854?api_key=${API_KEY}`).then((response) => {
      setMovie(response.data)
    })
  }, [])

  return (
    <div
      className="banner"
      style={{ backgroundImage:`url(${imageUrl+movie.backdrop_path})` }}
    >
      <div className="content">
        <h1 className="title">{movie.name}</h1>
        <div className="banner_buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie.overview}</h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  )
}

export default Banner
