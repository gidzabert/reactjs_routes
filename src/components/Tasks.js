import Task from './Task';

const Tasks = ({tasks, onDelete, onToggleReminder}) =>{

    return (
        tasks.map(
            (task) => 
            <Task key={task.id}
                title={task.title} 
                reminder={task.reminder}
                description={task.description} 
                onDelete={() => onDelete(task.id)} 
                onToggleReminder={() => onToggleReminder(task.id)}
            />
        )
    );

}

export default Tasks;