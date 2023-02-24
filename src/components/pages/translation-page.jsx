
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import authGuard from "../authGuard";
import Translation from "../translation";
import { addTranslation } from "../../state/translationsSlice";

function TranslationPage(){

    const apiURL = "https://ripe-eminent-moonflower.glitch.me/translations"
    const apiKEY= "noroff"

    const dispatch= useDispatch();

    const translationHistory= useSelector((state) => state.translationHistory.translationsArray)
    let mappedTranslationHistory= [];
    translationHistory.forEach(element => {
        mappedTranslationHistory.push(element.payload)
    });

    const [toTranslate, setInput] = useState("");

    const handleTranslationSubmit = (event) => {
        event.preventDefault();   
        dispatch(addTranslation(toTranslate))
        addTranslationToAPI();
        
    }

    function handleTranslationChange(event){
        setInput(event.target.value)
    }

    function addTranslationToAPI(){
        fetch(`${apiURL}/${localStorage.getItem("userID")}`, {
            method: 'PATCH', // NB: Set method to PATCH
            headers: {
                'X-API-Key': apiKEY,
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                // Provide new translations to add to user with id 1
            
                translations:[...mappedTranslationHistory, toTranslate ]
            })
        })
        .then(response => {
          if (!response.ok) {
            throw new Error('Could not update translations history')
          }
          return response.json()
        })
        .then(updatedUser => {
          // updatedUser is the user with the Patched data
        })
        .catch(error => {
            console.log("Error")
        })
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