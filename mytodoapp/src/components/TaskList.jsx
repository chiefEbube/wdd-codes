const TaskList = ({ tasks }) => {
    return (
        <ul>
            {
                tasks.map((task) => {
                    return (
                        <li key={task.id}>{task.name}</li>
                    )
                })
            }
        </ul>
    )
}

export default TaskList
