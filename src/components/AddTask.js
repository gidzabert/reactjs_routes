import { useState } from "react";

const AddTask = ({submitTask}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [reminder, setReminder] = useState(false);
    const [errorTitle, setTitleError] = useState('');
    const [errorDescription, setDescriptionError] = useState('');

    const onSubmit = (e) => {
        e.preventDefault()

        if (!title) {
            setTitleError("Title is Required");
            return
        }else{
            setTitleError("");
        }
        if (!description) {
            setDescriptionError("Description is Required");
            return
        }else{
            setDescriptionError("");
        }
        submitTask({title, description, reminder});

        setTitle('');
        setDescription('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task Title</label>
                <input type="text" placeholder="Task Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>{errorTitle}</label>
            </div>
            <div className="form-control">
                <label>Description</label>
                <input type="text" placeholder="Task Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <label>{errorDescription}</label>
            </div>
            <div className="form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <div className="form-control">
                <button className="btn btn-block">Add Task</button>
            </div>
        </form>
    )
}

export default AddTask;