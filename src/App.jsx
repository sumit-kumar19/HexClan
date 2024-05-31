
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import { useEffect } from 'react'
import Certificate from './pages/Certificate'

function App() {

  useEffect(()=>{
    console.log(window.location)
  })

  return (
    <>
    <BrowserRouter basename="/HexClan">
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/certificate' element={<Certificate/>}/>
      <Route path='*' element={<h1 style={{color:"black"}}>Not Found 404</h1>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
