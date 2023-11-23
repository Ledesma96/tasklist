import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const TaskItem = () => {
    const {id} = useParams()
    const [tasks, setTasks] = useState([])
    const [task, setTask] = useState({})

    useEffect(() =>{ 
        const storedTask = JSON.parse(localStorage.getItem('tasks'))
        if(storedTask){
            setTasks(storedTask)
        }
    }, [])
    
    useEffect(() => {
        const selectTask = tasks.find(task => task.id == id)
        setTask(selectTask)
    }, [tasks])

  return (
    <div className="task-details-container">
      <h2 className='task_name'>{task?.name}</h2>
      <p className='task_description'>{task?.description}</p>
      {task?.status ? <p className='completa'>Completa</p> : <p className='pendiente'>Pendiente</p>}
    </div>
  )
}

export default TaskItem

