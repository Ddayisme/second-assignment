import authGuard from "../authGuard";

function profilePage(){
    return <div>
        <p>Profile page</p>
    </div>
}

export default authGuard(profilePage);