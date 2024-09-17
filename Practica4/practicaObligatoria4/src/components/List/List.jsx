import { Button, Table } from "react-bootstrap";
import Task from "../Task/Task";
import "./List.css" 



const List = ({ tasks }) => {

    const tasksFiltered = tasks.filter(task => task != "")


    const tasksFilteredMapped = tasksFiltered.map(task => (
        <Task
        title={task}
        />
    ));

    return (
        <>
            <Table striped="columns" className="myTable">
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