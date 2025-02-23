import React, { useState } from "react";

function Tasks(props) {

    const [isHovered, setIsHovered] = useState(false)
    const mouseEnter = () => setIsHovered(true);
    const mouseLeave = () => setIsHovered(false)
    //Aquí creo las variables para que la "X" de eliminar tareas solamente se vea cuando pasas 
    //el cursor por la tarea, creo que se podría hacer con ternario pero me parecio más sencillo de esta
    //manera, creando un useState false (que no se vea) y dos variables para establecerlo
    return (
        <>
            <div className="card mb-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                {/* Aqui creo las card de las tax asi coon las variabels para cuando el raton entra y 
                sale del div que aparezca o no el boton de cerrar */}
                <div className="card-body d-flex justify-content-between align-items-center">

                    <div>
                        <h5>
                            {props.task.title}
                            {/* le paso la props de title para las tareas asi como abajo las id */}
                        </h5>
                        <p className="text-muted mb-0"> ID: {props.task.id} </p>
                    </div>
                    {isHovered && (
                        <div className="ms-auto ">
                            <button type="button" className="btn btn-danger " aria-label="Cerrar"
                                onClick={() => console.log(`Deleting task ${props.task.id}`)}> X </button>
                        </div>)}
                        {/* Aquí en resumen establezco un console log ademas del boton para eliminar tareas
                        el console.log es simplemente por ahora para comprobar que funciona (a posteriori
                        meteré una función de eliminar tareas seguramente con un .filter ya en el componente 
                        de Tasklist) */}
                </div>


            </div>
        </>
    )
}

export default Tasks;