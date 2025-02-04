
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import Captainlogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'

function App() {
 

  return (
    <>
      
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<UserLogin/>}/>
            <Route path='/signup' element={<UserSignUp/>}/>
            <Route path='/captain-login' element={<Captainlogin/>}/>
            <Route path='/captain-signup' element={<CaptainSignUp/>}/>
        </Routes>
      
    </>
  )
}

export default App

