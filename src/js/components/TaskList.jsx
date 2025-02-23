import React from "react";
import Tasks from "./Tasks";



function TaskList() {
    const tasksHardcoded = [
        {
            "id": 1,
            "title": "Aprender React",
            "completed": false
        },
        {
            "id": 2,
            "title": "Estudiar JavaScript",
            "completed": true
        },
        {
            "id": 3,
            "title": "Practicar ejercicios de programación",
            "completed": false
        },
        {
            "id": 4,
            "title": "Leer documentación de TypeScript",
            "completed": false
        },
        {
            "id": 5,
            "title": "Construir una pequeña app",
            "completed": true
        }
    ]


    return (
        <div>
            <h2>Esto es la lista de tareas
            </h2>
            <div>
                {tasksHardcoded.map((task, index) => {
                    return (<div key={index}>

                        <Tasks task={task} />
                 </div>)

                })}
            </div>
           </div>
    )
}

export default TaskList;