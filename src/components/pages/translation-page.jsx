
import { useState } from "react";
import authGuard from "../authGuard";
import Translation from "../translation";

function TranslationPage(){

    const [toTranslate, setInput] = useState({});

    const handleTranslationSubmit = (event) => {
        event.preventDefault();    
        alert(toTranslate)
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