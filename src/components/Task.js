import { FaTimesCircle } from "react-icons/fa";

const Task = ({title, description, reminder, onDelete, onToggleReminder}) => {

    return (
        <div className={`task ${reminder ? 'reminder' : ''}`}  onDoubleClick={onToggleReminder}>
            <h3>{title} <FaTimesCircle className="task-icon" onClick={onDelete} /></h3>
            <h4>{description}</h4>
        </div>
    );
}

export default Task;