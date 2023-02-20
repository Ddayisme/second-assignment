import authGuard from "../authGuard";

function translationPage(){
    return( <div>
        <p>Translation page</p>
    </div>)
}

export default authGuard(translationPage);