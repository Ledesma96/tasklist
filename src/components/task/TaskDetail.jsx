import React from 'react'
import { Link } from 'react-router-dom'

const TaskDetail = ({tasks, deleteList, completedTask, deleteOne}) => {
  return (
    <>
    {tasks.length > 0 ?
        <div className='delete_list' onClick={() => deleteList()}>
            <svg className='trash' xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
            </svg>
            <p>Vaciar</p>
        </div> : 
        <div className='first_task'>
            <h3>Agrega tu primer tarea</h3>
        </div>}
        {tasks.map((task) =>(
            <div className='conteiner' key={task.id}>
                <div className='list_conteiner'>
                    <p className='list_conteiner_name'>{task.name}</p>
                    <div className='list_conteiner_check'>
                        <div className={task.status ? 'list_conteiner_check_div_on' : 'list_conteiner_check_div_off'}>
                            <svg className='list_conteiner_check_svg' xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"/>
                                <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='conteiner_btn'>
                    <Link to={`/${task.id}`}>Detalles</Link>
                    <button onClick={() => completedTask(task.id)}>{task.status ? 'Reacer' : 'Terminar'}</button>
                    <button onClick={() => deleteOne(task.id)}>Eliminar</button>
                </div>
            </div>
        ))}</>
  )
}

export default TaskDetail