import { useState } from "react";
import "./Form.css";

const Form = () => {

    const [name,setName] = useState("");

    const handlerNameChange = (event) => {
        
        if (event.target.value.slice(-1).includes("o") || event.target.value.slice(-1).includes("O")) {
            alert("Por favor, ¡Nombres de usuario sin la letra o!");
            setName(event.target.value);
        }
        else{
            setName(event.target.value);
        }
    }

    const handlerForm = (event) => {
        event.preventDefault();
        if (name.includes("o") || name.includes("O") || !name) {
            alert("Usuario inválido para registrarse");
        }
        else{
            alert("Usuario registrado correctamente!");
        }
    }

    return(
        <div>
            <form onSubmit={handlerForm}>
                <h2>Formulario sin la O (͡ ° ͜ʖ ͡ °)</h2>
                <input type="text" value={name} onChange={handlerNameChange}/>
                <button type="submit">Registrarse</button>
                <p>{name}</p>
            </form>
        </div>
    );
}


export default Form;