import { useDispatch } from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { removeTranslations } from '../state/translationsSlice'

function LogOut() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    function clearStorage() {
        
        localStorage.removeItem("username")
        localStorage.removeItem("userID")
        dispatch(removeTranslations())
        navigate("/")
    }
    return (
        <button onClick={clearStorage}>Logout</button>
    )
}

export default LogOut;