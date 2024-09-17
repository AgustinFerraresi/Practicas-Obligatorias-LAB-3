import { useState } from "react";
import { Form, Button } from "react-bootstrap";

import "./NewTask.css"

const NewTask = ({ handleAddTask }) => {
    const [newTaskName, setNewTaskName] = useState("");

    const handleNewTaskName = (event) => {
        setNewTaskName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddTask(newTaskName);
        setNewTaskName("");
    }


    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={newTaskName} 
                    onChange={handleNewTaskName}
                    placeholder="Nueva tarea" 
                />
                <Button variant="primary" type="submit">Crear Tarea</Button>{' '}
            </Form>
        </div>
    );
}
export default NewTask;