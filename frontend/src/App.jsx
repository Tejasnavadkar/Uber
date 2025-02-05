
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import Captainlogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import { UserLogOut } from './pages/UserLogout'
import { CaptainLogOut } from './pages/CaptainLogout'
import CaptainHome from './pages/CaptainHome'
import CaptainProtectedWrapper from './pages/CaptainProtectedWrapper'

function App() {


  return (
    <>

      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/captain-login' element={<Captainlogin />} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />

        <Route path='/user/logout' element={
          <UserProtectedWrapper>
            <UserLogOut />
          </UserProtectedWrapper>
        } />

        <Route path='/captain/logout' element={
          <CaptainProtectedWrapper>
            <CaptainLogOut />
          </CaptainProtectedWrapper>
        } />

        <Route path='/captain-home' element={
          <CaptainProtectedWrapper>
            <CaptainHome/>
          </CaptainProtectedWrapper>
        } />
      </Routes>

    </>
  )
}

export default App

