import './movie-list.css'
import Movielistitem from '../movie-list-item/movie-list-item'
const Movielist = () => {
  return (
    <div className='movie-list'>
      <Movielistitem/>
      <Movielistitem/>
      <Movielistitem/>
      <Movielistitem/>
    </div>
  )
}

export default Movielist