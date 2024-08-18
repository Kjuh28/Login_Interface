import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 

import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Success } from './pages/Success'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Login /> } />
        <Route path='/Register' element={ <Register/> } />
        <Route path='/Success' element={ <Success /> } />
      </Routes>
    </Router>
  )
}

export default App
