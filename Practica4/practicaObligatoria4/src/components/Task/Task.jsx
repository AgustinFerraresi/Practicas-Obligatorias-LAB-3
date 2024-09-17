import { useState } from "react";

import "./Task.css";

const Task = ({title}) => {

    const  [done,setDone] = useState(false);
    

    const handleDone = () => {
        if (done) {
            setDone(false);
        }else{
            setDone(true);
        }
    }

    return (
        <>
            <tr style={{ textDecoration: done ? "line-through" : "none" }}>
                <td>
                    <span>{title}</span> <input type="checkbox" name="a" checked={done} onChange={handleDone}/>
                </td>
            </tr>
        </>
    );
}

export default Task