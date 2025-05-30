import {React, useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import DashboardPage from './Pages/Dashboard'
import Homepage from './Pages/Home'
import EditPage from './Pages/Edit'
import { AnimatePresence } from 'framer-motion'
import QuizPage from './Components/Quiz'

function App() {
  return (
    <AnimatePresence mode="wait">
      <div className="App">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/edit" element={<EditPage />} />
        <Route path="/quiz" element= {<QuizPage />} />
        </Routes>
      </div>
  </AnimatePresence>
  );
}

export default App;
