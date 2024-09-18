import { useState } from "react";
import Button from 'react-bootstrap/Button';
import "./Task.css";


const Task = ({title,handleDelete}) => {

    const [done,setDone] = useState(false);

    const handleDeleteTask = () => {
        handleDelete(title)
    }

    const handleDone = () => {
        if (done) {
            setDone(false);
        }else{
            setDone(true);
        }
    }

    return (
        <>
            <tr id={title} >
                <td>
                    <input type="checkbox" name="a" checked={done} onChange={handleDone}/>
                    <span style={{ textDecoration: done ? "line-through" : "none" }}>{title}</span> 
                    <Button variant="danger" onClick={handleDeleteTask}>Eliminar</Button>
                </td>
            </tr>
        </>
    );
}

export default Task