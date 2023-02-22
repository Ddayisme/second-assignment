
import { useState } from "react";
import { useDispatch } from "react-redux";
import authGuard from "../authGuard";
import Translation from "../translation";
import { addTranslation } from "../../state/translationsSlice";

function TranslationPage(){

    const dispatch= useDispatch();

    const [toTranslate, setInput] = useState("");

    const handleTranslationSubmit = (event) => {
        event.preventDefault();   
        dispatch(addTranslation(toTranslate))
        
    }

    function handleTranslationChange(event){
        setInput(event.target.value)
    }

    return( <div>
        <form onSubmit={handleTranslationSubmit}>
            <fieldset>
                <input type="text" placeholder="What should be translated?" onChange={handleTranslationChange}></input>
                <button type="submit">Translate</button>
            </fieldset>
        </form>
        <Translation props = {toTranslate}></Translation>
    </div>)
}
export default authGuard(TranslationPage);