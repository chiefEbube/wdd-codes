import { useState } from "react";

import MyForm from "./components/MyForm";
import TaskList from "./components/TaskList";

const App = () => {

  const [tasks, setTasks] = useState([])

  const addTask = (task) => {
    setTasks(prevTasks => [...prevTasks, task])
  }

  return (
    <div>
      <header>
        <h1>My To-Do App</h1>
      </header>
      
      <MyForm addTask={addTask}/>

      {
        tasks && <TaskList tasks={tasks}/>
      }
    </div>
  )
}

export default App;