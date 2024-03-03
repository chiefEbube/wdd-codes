import { useState } from "react";
import { FaPlus } from "react-icons/fa6";

const MyForm = ({addTask}) => {

  const [task, setTask] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    addTask({
      name: task,
      isCompleted: false,
      id: Date.now()
    })
    setTask("")
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="task">Enter Task: </label>
        <input
          type="text"
          id="task"
          required
          maxLength={70}
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      <button aria-label="Add Task" type="submit"><FaPlus /></button>
    </form>
  )
}

export default MyForm
