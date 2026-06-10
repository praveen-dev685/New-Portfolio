
import {Route, Routes} from "react-router-dom"
import Lock from './components/Lock'
import Token from './components/Token'
import Verification from './components/Verification'


function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Lock/>} />
      <Route path="/token" element={<Token/>} />
      <Route path="/verification" element={<Verification/>} />
    </Routes>
  )
}

export default App
