import './App.css'
import { Header } from './Header'
import { Subheader } from './Subheader'
import { ListHeader } from './ListHeader'
import { ItemList } from './ItemList'
import { ListContainer } from './ListContainer'
import { TaskForm } from './TaskForm'
import { useTodos } from '../hooks/useTodos'

const App = () => {
    const { todos, handleCreateTask } = useTodos();

    return (
        <>
        <Header/>
        <Subheader subtitle="Todo List Manager"/>
        <TaskForm addTask={handleCreateTask}/>
        <ListContainer>
            <ListHeader content="Todo List"/>
            <ItemList itemList={todos} />
        </ListContainer>
        </>
    )
}

export default App
