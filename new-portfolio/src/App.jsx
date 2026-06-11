
import {Route, Routes} from "react-router-dom"
import Lock from './components/Lock'
import Token from './components/Token'
import Verification from './components/Verification'
import Home from './components/Home'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Lock/>} />
      <Route path="/token" element={<Token/>} />
      <Route path="/verification" element={<Verification/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
  )
}

export default App
