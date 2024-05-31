
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {


  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='*' element={<h1>Not Found 404</h1>}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
