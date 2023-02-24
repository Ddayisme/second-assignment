import {useNavigate} from 'react-router-dom'

function LogOut() {

    const navigate = useNavigate()

    function clearStorage() {
        
        localStorage.removeItem("username")
        localStorage.removeItem("userID")
        navigate("/")
    }
    return (
        <button onClick={clearStorage}>Logout</button>
    )
}

export default LogOut;