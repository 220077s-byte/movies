import Appinfo from '../app-info/app-info'
import Searchpanel from '../search-panel/search-panel'
import Appfilter from '../app-filter/app-filter'
import './app.css'
import Movielist from '../movie-list/movie-list'
import Moviesaddform from '../movies-add-form/movies-add-form'
const App =()=>{
    return (
    <div className='app font-monospace'>
        <div className='content'>
            <Appinfo/>
            <div className='search-panel'>
            <Searchpanel/>
            <Appfilter/>
            </div>
            <Movielist/>
            <Moviesaddform/>
        </div>
    </div>
)
}


export default App