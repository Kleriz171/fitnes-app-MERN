import { Routes, Route, BrowserRouter} from 'react-router-dom'
//pages and components
import Home from './Pages/home'
import Navbar from './components/Navbar'
import Login from './Pages/login'
import Signup from './Pages/signup'

function App() {
  return (
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route path='/' element = {<Home/>} />
          <Route path='/login' element = {<Login/>}/>
          <Route path='/signup' element = {<Signup/>}/>
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
