import Layout from "./Layout.jsx"
import { Routes, Route } from 'react-router-dom'
import Dashboard from "./Pages/Dashboard.jsx"
import TaskManager from "./Pages/TaskManager"
import Budget from "./Pages/Budget"

function App() {
  return (
    <>
      {
        <Routes>

          <Route element={<Layout/>}>
            <Route path="/" element={<Dashboard/>}></Route>
            <Route path="/task" element={<TaskManager/>}></Route>
            <Route path="/budget" element={<Budget/>}></Route>
          </Route>
          
        </Routes>
      }
    </>
  )
}

export default App
