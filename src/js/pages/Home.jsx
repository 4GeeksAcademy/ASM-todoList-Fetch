import React, { useState, useEffect } from "react";
import Taskform from "../components/TaskForm";
import TaskList from "../components/TaskList";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])

	const API_URL = "https://playground.4geeks.com/todo";
	const ID_USER = "Alfredo";
	// vale, en general empiezo estableciendo un useState de un array vacio, ya que es lo que buscamos aqui, una lista de tareas, un array de objetos, abajo justo
	// creo una función donde establezca el objeto con un titulo, y una id y si está realizada (aunque despues no use ese dato la verdad).

	useEffect(() => {
		const fetchTareas = async () => {
			try {
				const response = await fetch(`${API_URL}/users/${ID_USER}`);
				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}
				const data = await response.json();
				setTasks(data.todos);
			} catch (error) {
				console.error("Hubo un problema con la solicitud:", error);
			}
		};
		fetchTareas();
	}
		, []);



	const addTasks = async (title) => {

		
		try {
			const response = await fetch(`${API_URL}/todos/${ID_USER}`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json"
				},
				body: JSON.stringify({
					id: Date.now(),
					title,
					is_done: false,
				})
			});
			if (!response.ok) {
				throw new Error(`Error HTTP! Estado: ${response.status}`);
			}
			
			const newTask = await response.json();
            setTasks((prevTasks) => [...prevTasks, newTask]);
		} catch (error) {
			console.error("Hubo un problema con la solicitud:", error);
		}

	}


	// Aqui cambiamos el array con SetTaks con una funcion flecha y un expansor poniendo que leyera todo de las anteriores tareas y, agregase la nueva 



const handleDelete = async (taskId) => {
	try {
		const response = await fetch(`${API_URL}/todos/${taskId}`, {
			method: "DELETE",
		});
		if (!response.ok) {
			throw new Error(`Error HTTP! Estado: ${response.status}`);
		}
		setTasks((prevtasks) => prevtasks.filter(task => task.id !== taskId));
	} catch (error) {
		console.error("Hubo un problema al eliminar la tarea:", error.message);
	}

}

// DELETE
// una simple fuinción .filter para que borre la tarea cuando la queramos eliminar 
return (
	<div className="container mt-4">
		<h1 className="mb-4">Gestor de Tareas</h1>
		<Taskform onAddTask={addTasks} />
		<TaskList tasks={tasks} onDelete={handleDelete} />
	</div>
);
};


export default Home

//y por ultimo he consultado el chat principalmente pq con los props me cuesta mucho aun de oasarlo al padre y de este al hijo y asi sobre todo la manera de 
// escribirlo que a veces van con prop. y otras veces {} bueno, que pediré me ntoría ya que es un campo que de especial me está constando