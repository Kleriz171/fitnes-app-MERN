import { Routes, Route, BrowserRouter} from 'react-router-dom'
//pages and components
import Home from './Pages/home'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className='pages'>
      <Routes>
        <Route path='/' element = {<Home/>} />
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
