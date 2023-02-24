import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Translation from "./translation";
import {
  addTranslation,
  removeOverTenHistory,
} from "../state/translationsSlice";

/**
 * This component generates the input field where you can enter a translation
 * And when the "Translate" button is clicked it will also put the english sentence into
 * both state and to the API.
 */
function TranslationView() {
  const apiUrl = "https://ripe-eminent-moonflower.glitch.me/translations";
  const apiKey = "noroff";

  const dispatch = useDispatch();

  const translationHistory = useSelector(
    (state) => state.translationHistory.translationsArray
  );
  let mappedTranslationHistory = [];
  translationHistory.forEach((element) => {
    mappedTranslationHistory.push(element.payload);
  });

  const [newTranslation, setNewTranslation] = useState("");
  const [translateInput, setTranslateInput] = useState("");

  const handleTranslationSubmit = (event) => {
    event.preventDefault();
    while (mappedTranslationHistory.length > 9) {
      mappedTranslationHistory.shift();
    }
    dispatch(addTranslation(newTranslation));
    addTranslationToAPI();
    setTranslateInput(newTranslation);
  };

  function handleTranslationChange(event) {
    setNewTranslation(event.target.value);
  }

  function addTranslationToAPI() {
    fetch(`${apiUrl}/${localStorage.getItem("userID")}`, {
      method: "PATCH", // NB: Set method to PATCH
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Provide new translations to add to user with id 1

        translations: [...mappedTranslationHistory, newTranslation],
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not update translations history");
        }
        return response.json();
      })
      .then((updatedUser) => {
        dispatch(removeOverTenHistory());
      })
      .catch((error) => {
        console.log("Error");
      });
  }

  return (
    <div>
      <form onSubmit={handleTranslationSubmit}>
        <fieldset>
          <input
            type="text"
            placeholder="What should be translated?"
            onChange={handleTranslationChange}
          ></input>
          <button type="submit">Translate</button>
        </fieldset>
      </form>
      <Translation props={translateInput}></Translation>
    </div>
  );
}
export default TranslationView;
