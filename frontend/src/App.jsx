import { Routes, Route, BrowserRouter, Navigate} from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

//pages and components
import Home from './Pages/home'
import Navbar from './components/Navbar'
import Login from './Pages/login'
import Signup from './Pages/signup'

function App() {
  const {user} = useAuthContext()

  return (
      <BrowserRouter>
      <Navbar/>
      <div className='pages'>
        <Routes>
          <Route 
          path='/' 
          element = {user ? <Home/> : <Navigate to="/login"/>} />
          <Route 
          path='/login' 
          element = {!user ? <Login/>: <Navigate to ="/"/>}  />
          <Route 
          path='/signup' 
          element = {!user ? <Signup/>: <Navigate to ="/"/>}  
          />
        </Routes>
      </div>
      </BrowserRouter>
  )
}

export default App
