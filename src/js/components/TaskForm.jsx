import React, { useState } from "react";

function Taskform(props) {
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");
    // Aqui siguiendo las clases grabadas empece con el tittle y el error para que no pudiera quedar vacío el imput

    function handleSubmit(e) {
        e.preventDefault()

        if (title.trim() === "") {
            setError("El campo de tarea no puede ir vacío");
            return;
        }
        props.onAddTask(title);
        setTitle("");
        setError("");
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>Añadir nueva Tarea</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="taskTitle" className="form-label">
                        Título de la tarea
                    </label>
                    <input
                        type="text"
                        className={`form-control ${error ? "is-invalid" : ""}`}
                        id="taskTitle"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Ej: Comprar leche"
                    />
                    {error && <div className="invalid-feedback">{error}</div>}
                    <button type="submit" className="btn btn-primary mt-2">
                        Agregar tarea
                    </button>
                </form>
                {/* arriba un poco tanto diseño como estructura principal por ejemplo del titulo de la tarela con label, o del imput 
                con los valores, un placeholder y el ternario para, si llega a ocurrir el error se pondria con el borde rojo de inválido de bootstrap
                y si nmo pues normal, y un onChanfe que en resumen cambien el estado del usestate (titulo) cuando ocure el cambio y por ultimo
                pues si adeas del erro, hay un invalid feedback (lo que explique antes) salta el mensaje de erro que pusimos al principio */}
            </div>
        </div>
    );
}
export default Taskform