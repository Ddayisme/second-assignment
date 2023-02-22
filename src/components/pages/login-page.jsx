import { useState } from "react";
import { useNavigate } from "react-router-dom";

const apiURL = "https://ripe-eminent-moonflower.glitch.me/translations"
const apiKEY= "noroff"

function LogInPage(){

    const [name, setName] = useState({value: ""});
    const navigate = useNavigate()

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("username", name)
        fetch(`${apiURL}?username=${name}`)
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if(result.length === 0){
                fetch(`${apiURL}`, {
                    method: "POST",
                    headers: {
                        "X-API-Key": apiKEY,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: name,
                        translations: []
                    })
                })
                .then(response => response.json())
                .then(result => {console.log(result)
                    localStorage.setItem("userID", result.id)
                })
            }
            else{
                localStorage.setItem("userID", result[0].id)
            }
        })
        
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