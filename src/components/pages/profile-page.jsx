import { useSelector } from "react-redux";
import { AutoLogin } from "../../state/autoLogin";
import authGuard from "../authGuard";
import LogOut from "../log-out";



function ProfilePage(){

    AutoLogin()

    
const translationHistory = useSelector((state) => state.translationHistory)
const user = localStorage.getItem("username")

let translationVar= translationHistory.translationsArray.map((translation, index) =>(
    <div key={index}>{translation.payload}</div>
))

    return <div className="history">
        <h5>Translation History</h5>
        <p><i>For user {user}</i></p>
        {translationVar}
        <LogOut></LogOut>
    </div>
}

export default authGuard(ProfilePage);