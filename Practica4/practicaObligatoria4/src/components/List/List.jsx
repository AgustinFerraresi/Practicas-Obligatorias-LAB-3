import { Button, Table } from "react-bootstrap";
import Task from "../Task/Task";
import "./List.css" 



const List = ({ tasks ,handleDelete}) => {

    const tasksFiltered = tasks.filter(task => task != "")


    const tasksFilteredMapped = tasksFiltered.map(task => (
        <Task
        title={task}
        handleDelete = {handleDelete}
        />
    ));

    return (
        <>
            <Table striped="columns" className="myTable" variant="dark">
                <thead>
                    <tr>
                        <th>Tareas</th>
                    </tr>
                </thead>

                <tbody>
                    {tasksFilteredMapped}
                </tbody>
            </Table>
        </>
    );
}

export default List