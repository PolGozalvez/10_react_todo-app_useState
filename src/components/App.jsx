import './App.css'
import { Header } from './Header'
import { Subheader } from './Subheader'
import { ListHeader } from './ListHeader'
import { ItemList } from './ItemList'
import { ListContainer } from './ListContainer'

const itemList = [
    {
      uuid: "1",
      title: "Task A",
      description: "This is an updated description for Task A",
      status: "completed",
    },
    {
      uuid: "2",
      title: "Task B",
      description: "This is an updated description for Task B",
      status: "pending",
    },
    {
      uuid: "3",
      title: "Task C",
      description: "This is an updated description for Task C",
      status: "in progress",
    },
    {
        uuid: "4",
        title: "Task D",
        description: "This is an updated description for Task D",
        status: "completed",
      },
      {
        uuid: "5",
        title: "Task E",
        description: "This is an updated description for Task E",
        status: "pending",
      },
      {
        uuid: "6",
        title: "Task F",
        description: "This is an updated description for Task F",
        status: "in progress",
      },
  ];

function App() {
  return (
    <>
      <Header/>
      <Subheader subtitle="Todo List Manager"/>
      <ListContainer>
        <ListHeader content="Todo List"/>
        <ItemList itemList={itemList} />
      </ListContainer>
    </>
  )
}

export default App
