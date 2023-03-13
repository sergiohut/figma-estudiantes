import { useState } from 'react'
import './App.css'
import Topbar from './components/TopBar'
import Dashboard from "./pages/Dashboard"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <Topbar/>
    <Dashboard/>
    </div>
  )
}

export default App
