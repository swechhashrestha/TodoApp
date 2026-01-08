import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import ToDo from './pages/ToDo'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Header/>
      <Routes>
         <Route path='/' element={<Home/>} />
          <Route path='/toDo' element={<ToDo/>} />
      </Routes>
    </div>
  )
}

export default App
