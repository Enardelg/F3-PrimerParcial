import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import { ListProvider } from "./contexts/List.Context";

const App = () => {
    return (
        <ListProvider>
        <TaskForm />
        <hr />
        <TaskList />
        </ListProvider>
    );
};

export default App