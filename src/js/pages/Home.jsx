import React, { useState } from "react";
import Taskform from "../components/TaskForm";
import TaskList from "../components/TaskList";

//create your first component
const Home = () => {
	const [tasks, setTasks] = useState([])
// vale, en general empiezo estableciendo un useState de un array vacio, ya que es lo que buscamos aqui, una lista de tareas, un array de objetos, abajo justo
// creo una función donde establezca el objeto con un titulo, y una id y si está realizada (aunque despues no use ese dato la verdad).
	function addTasks(title) {
		const newTask = {
			id: Date.now(),
			title,
			is_done: false,
		};
	
		setTasks((prevtasks) => [...prevtasks, newTask]);
	// Aqui cambiamos el array con SetTaks con una funcion flecha y un expansor poniendo que leyera todo de las anteriores tareas y, agregase la nueva 
	}

	const handleDelete = (taskId) => {
		setTasks((prevtasks) => prevtasks.filter(task => task.id !== taskId));
	}
	// una simple fuinción .filter para que borre la tarea cuando la queramos eliminar 
	return (

		<div className="container mt-4">
			<h1 className="mb-4">  Gestor de tareas</h1>
			<Taskform onAddTask={addTasks} />
			<TaskList tasks={tasks} onDelete={handleDelete} />
		</div>
	);
}

export default Home

//y por ultimo he consultado el chat principalmente pq con los props me cuesta mucho aun de oasarlo al padre y de este al hijo y asi sobre todo la manera de 
// escribirlo que a veces van con prop. y otras veces {} bueno, que pediré me ntoría ya que es un campo que de especial me está constando