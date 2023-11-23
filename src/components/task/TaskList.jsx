import React, { useState, useEffect } from 'react'
import TaksForm from './TaskForm.jsx'
import TaskDetail from './TaskDetail.jsx'

const TaskList = () => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const storedTask = JSON.parse(localStorage.getItem('tasks'));
        if (storedTask) {
          setTasks(storedTask);
        }
      }, []);

    const deleteOne = (id) => {
        const actualizatedTask = tasks.filter(task => task.id !== id)
        setTasks(actualizatedTask)

        localStorage.setItem('tasks', JSON.stringify(actualizatedTask));
    }

    const completedTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.map((prevTask) => (prevTask.id === taskId ? { ...prevTask, status: !prevTask.status } : prevTask)));

        const storedTasks = localStorage.getItem('tasks') 
        const existingTasks = storedTasks ?  JSON.parse(storedTasks) : [];

        const updatedTasks = existingTasks.map((task) =>
            task.id === taskId ? { ...task, status: !task.status } : task
        );

        localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      };
    
    const deleteList = () => {
        localStorage.removeItem('tasks')
        setTasks([]);
    }


    return (
        <>
            <TaskDetail tasks={tasks}
                        deleteList={deleteList}
                        completedTask={completedTask}
                        deleteOne={deleteOne}></TaskDetail>
            <TaksForm setTask={setTasks}/>
        </>
  )
}

export default TaskList