import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TaskList from './components/task/TaskList'
import TaskItem from './components/task/TaskItem'
import NavBar from './components/navbar/NavBar'
import Home from './components/home/Home'

function App() {

  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/list' element={<TaskList/>}/>
        <Route exact path='/:id'  element={<TaskItem/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
