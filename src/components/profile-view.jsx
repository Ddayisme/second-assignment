import { useDispatch, useSelector } from "react-redux";
import { removeTranslations } from "../state/translationsSlice";
import { AutoLogout } from "../utils/autoLogout";
import LogOut from "./log-out";

/**
 * This component prints out the translation history of the currently logged in user.
 * It does this by taking the Redux state and maps it out.
 */
function ProfileView() {
  const apiUrl = "https://ripe-eminent-moonflower.glitch.me/translations";
  const apiKey = "noroff";
  const dispatch = useDispatch();
  AutoLogout();

  const translationHistory = useSelector((state) => state.translationHistory);
  const user = localStorage.getItem("username");

  let allTranslationArray = translationHistory.translationsArray.map(
    (translation, index) => <div key={index}>{translation.payload}</div>
  );

  function deleteHistory() {
    fetch(`${apiUrl}/${localStorage.getItem("userID")}`, {
      method: "PATCH", // NB: Set method to PATCH
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        // Provide new translations to add to user with id 1
        translations: [], // Removing all history
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Could not update translations history");
        }
        return response.json();
      })
      .then((updatedUser) => {
        dispatch(removeTranslations);
      })
      .catch((error) => {
        console.log("Error");
      });
    window.location.reload(false);
  }

  return (
    <div className="history">
      <h5>Translation History</h5>
      <p>
        <i>For user {user}</i>
      </p>
      {allTranslationArray}
      <button onClick={deleteHistory}>Delete History</button>
      <LogOut></LogOut>
    </div>
  );
}

export default ProfileView;
