import { useContext } from 'react'
import {actions, ListContext} from '../contexts/List.Context'


function TaskList() {
    const {task, dispatch} = useContext(ListContext)

    return(
        <section>
            {task.map((task) => (
                <div key={task.id}>
                    <input 
                    type='checkbox' 
                    checked= {task.completed}
                    onChange={() => 
                        dispatch({type: actions.complete, payload: task.id})
                    }
                    />
                    <p>{task.task}</p>
                    <button
                    onClick={()=> dispatch({type: actions.remove, payload: task.id})}
                    >
                        Eliminar
                    </button>
                </div>
            ))}
            <button onClick={()=> dispatch({type: actions.completeAll})}>Completar todo</button>
            <button onClick={() => dispatch({type: actions.removeAll})}>Borrar todo</button>
        </section>
    )
}

export default TaskList