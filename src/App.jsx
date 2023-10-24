import { Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Contacto from './components/pages/Contacto/Contacto'
import Home from './components/pages/Home/Home'
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
    </>
  )
}

export default App
