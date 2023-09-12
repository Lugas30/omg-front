import './assets/global.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import { Work } from './pages/Work'
import { NotFound } from './pages/NotFound'
import { DetailWork } from './pages/DetailWork'


// base URL API
// const baseUrl = "http://localhost:3000"
const baseUrl = "https://backendapi.omgroup.id"

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About baseUrl={baseUrl} />} />
          <Route path="/Contact" element={<Contact baseUrl={baseUrl} />} />
          <Route path="/Work" element={<Work baseUrl={baseUrl} />} />
          <Route path="/Work/:id" element={<DetailWork baseUrl={baseUrl} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
  )
}

export default App
