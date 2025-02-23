import React, {useState} from "react";

function Tasks(props) {

    const [isHovered, setIsHovered] = useState (false)
    const mouseEnter = () => setIsHovered(true);
    const mouseLeave = () => setIsHovered(false)
    return(
        <>
            <div className="card mb-2" onMouseEnter={mouseEnter} onMouseLeave={mouseLeave}>
                <div className="card-body d-flex justify-content-between align-items-center">

                    <div>
                        <h5 className={props.task.completed ? "text-decoration-line-through" :
                            ""} >
                            {props.task.title}
                        </h5>
                        <p className="text-muted mb-0"> ID: {props.task.id} </p>
                    </div>
                    {isHovered && (
                    <div className="ms-auto ">
                        <button type="button" className="btn btn-danger " aria-label="Cerrar"
                        onClick={()=> console.log(`Deleting task ${props.task.id}`)}> X </button>
                    </div>)}
                </div>


            </div>
        </>
    )
}

export default Tasks;