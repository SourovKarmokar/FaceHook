import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProfilePage from './pages/ProfilePage'
import RegistrationPage from './pages/RegistrationPage'
import NoFoundPage from './pages/NoFoundPage'

function App() {
  
  
  return (
    <>
    <Routes>
      <Route element={<HomePage/>} path='/' exact />
      <Route element={<LoginPage/>} path='/login' />
      <Route element={<ProfilePage/>} path='/me' />
      <Route element={<RegistrationPage/>} path='/register' />


      <Route element={<NoFoundPage/>} path='*' />


    </Routes>
    </>
  )
}

export default App
