import {useContext,useState} from 'react'
import {actions, ListContext} from '../contexts/List.Context'

function TaskForm() {
    const [task, setTask] = useState('')
    const {dispatch} = useContext(ListContext)

    function handleSubmit() {
        dispatch({type: actions.add, payload: task})
        setTask('')
    };

    return (
        <section>
        <input
        type = "text"
        value = {task}
        onChange = {(e) => setTask(e.target.value)}
        />
        <button onClick={handleSubmit}>Añadir Tarea</button>
        </section>
    )
}

export default TaskForm