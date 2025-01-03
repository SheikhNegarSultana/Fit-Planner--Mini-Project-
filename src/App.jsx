import './App.css'
import ProgressPage from './Pages/Progress Page/ProgressPage'
import PlanPage from './Pages/Plan Page/PlanPage'
import HomePage from './Pages/HomePage/HomePage'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

  <Router>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/plan" element={<PlanPage />} />
        <Route path="/progress" element={<ProgressPage />} />
      </Routes>
  </Router>

    </>
  )
}

export default App
