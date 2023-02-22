import { useSelector } from "react-redux";
import authGuard from "../authGuard";



function ProfilePage(){

    
const translationHistory = useSelector((state) => state.translationHistory)

let translationVar= translationHistory.translationsArray.map((translation, index) =>(
    <div key={index}>{translation.payload}</div>
))

    return <div>
        <p>Profile page</p>
        {translationVar}
    </div>
}

export default authGuard(ProfilePage);