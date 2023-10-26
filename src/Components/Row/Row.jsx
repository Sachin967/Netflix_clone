import './Row.css'
import axios from '../../axios'
import { API_KEY, imageUrl } from '../Constants/Constants'
import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'

const Row = (props) => {
  const [movie, setMovie] = useState([])
  const [trailer, setTrailer] = useState('')
  const handleClick = (id) => {
    console.log(id)
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data.results)
        if (response.data.results.length !== 0) {
          setTrailer(response.data.results[0])
          console.log(response.data.results[0])
        }
      })
      .catch((error) => {
        console.error('An error occurred:', error)
      })
  }
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  }
  useEffect(() => {
    axios.get(props.url).then((response) => {
      setMovie(response.data.results)
    })
  }, [])
  return (
    <div className="row">
      <h1>{props.title}</h1>
      <div className="row-poster">
        {movie.map((tv) => {
          return (
            <div
              onClick={() => handleClick(tv.id)}
              className="poster-container"
              key={tv.id}
            >
              <img
                className={props.isSmall ? 'smallposter' : 'poster'}
                src={`${imageUrl + tv.backdrop_path}`}
                alt="Poster"
              />
              <div className="movie-info">
                {tv.name && <p className="movie-name">{tv.name}</p>}
              </div>
            </div>
          )
        })}
      </div>

      {trailer && <YouTube videoId={trailer.key} opts={opts} />}
    </div>
  )
}
export default Row
