import React, { useState } from 'react';

const TaksForm = ({ setTask }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name == '' || description == ''){
        alert('Competar todos los campos')
    }
    else {
        const data = {
            name: name,
            description: description,
            status: false,
          };
      
          const storedTasks = localStorage.getItem('tasks');
          const existingTasks = storedTasks ? JSON.parse(storedTasks) : [];
      
          data.id = existingTasks.length + 1;
      
          const updatedTasks = [...existingTasks, data];
      
          setTask(updatedTasks);
          localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      
          setName('');
          setDescription('');
    }
    
  };

  return (
    <form onSubmit={handleSubmit} className="formulario">
      <input
        type="text"
        placeholder="Nombre de tarea"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-form"
      />
      <input
        type="text"
        placeholder="Descripción"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="input-form"
      />
      <input type="submit" value={'Cargar'} className="boton-form" />
    </form>
  );
};

export default TaksForm;
