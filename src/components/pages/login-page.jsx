import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LogInPage(){

    const [name, setName] = useState({value: ""});
    const navigate = useNavigate()

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("username", name)
        navigate("/translations")
    }

    function handleLoginChange(event){
        setName(event.target.value)
    }

    return (<>
        <form onSubmit={handleLoginSubmit}>
            <fieldset>
                <input type="text" placeholder="Enter Name" onChange={handleLoginChange}></input>
                <button type="submit">Login </button>
            </fieldset>
        </form>
    </>)
}

export default LogInPage;