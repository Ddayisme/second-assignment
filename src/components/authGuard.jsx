import { Navigate } from "react-router-dom";

function authGuard(Component){
    return function(props) {
        let condition = localStorage.getItem("username") != null;
         
        if(condition){
            return <Component {...props}/>
        }else{
            return <Navigate to="/"></Navigate>
        }
    }
}

export default authGuard;