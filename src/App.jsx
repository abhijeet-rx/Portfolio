import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Developer from './pages/Developer'
import Designer from './pages/Designer'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/designer" element={<Designer />} />
      </Routes>
    </Router>
  )
}

export default App
